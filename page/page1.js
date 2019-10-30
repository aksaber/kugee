import React, { Fragment, Component } from 'react';
import {
    View,
    Text,
    Image,
    Button,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';

import Video from 'react-native-video';
import Orientation from 'react-native-orientation';

const screenWidth = Dimensions.get('window').width;

function formatTime(second) {
    let h = 0, i = 0, s = parseInt(second);
    if (s > 60) {
        i = parseInt(s / 60);
        s = parseInt(s % 60);
    }
    // 补零
    let zero = function (v) {
        return (v >> 0) < 10 ? "0" + v : v;
    };
    return [zero(h), zero(i), zero(s)].join(":");
}

class Page1 extends Component {
    static navigationOptions = {
        title: 'Page1',
    };

    constructor(props) {
        super(props);
        this.state = {
            rate: 1,
            volume: 1,
            muted: false,
            resizeMode: 'contain',
            duration: 0,  // 视频的总时长
            currentTime: 0,  // 视频当前播放的时间
            videoWidth: screenWidth,
            videoHeight: screenWidth * 9/16, // 默认16：9的宽高比
            showVideoCover: true,    // 是否显示视频封面
            showVideoControl: false, // 是否显示视频控制组件
            isPlaying: false,        // 视频是否正在播放
            isFullScreen: false,     // 当前是否全屏显示（纵向）
            playFromBeginning: false, // 是否从头开始播放
        };
    }

    _onLoadStart = () => {
        console.log('视频开始加载');
    };

    _onBuffering = () => {
        console.log('视频缓冲中...')
    };

    onLoad = (data) => {
        console.log(`视频加载完成: ${data.duration}`);
        this.setState({duration: data.duration});
    }

    onProgress = (data) => {
        console.log(data);
        if (this.state.isPlaying) {
            this.setState({
                currentTime: data.currentTime,
            })
        }
    };

    onEnd = () => {
        console.log('视频播放结束');
        // this.setState({
        //     currentTime: 0,
        //     isPlaying: false,
        //     playFromBeginning: true,
        //     showVideoCover: true
        // });  //需要这样吗？
        // //回到初始点
        // this.videoPlayer.seek(0);
    };

    onAudioBecomingNoisy = () => {
        this.setState({isPlaying: true})
    };

    onAudioFocusChanged = (event) => {
        this.setState({isPlaying: !event.hasAudioFocus})
    };
    
    hideControl() {
        if (this.state.showVideoControl) {
            this.setState({
                showVideoControl: false,
            })
        } else {
            this.setState(
                {
                    showVideoControl: true,
                },
                // 5秒后自动隐藏工具栏
                () => {
                    setTimeout(
                        () => {
                            this.setState({
                                showVideoControl: false
                            })
                        }, 5000
                    )
                }
            )
        }
    }

    // 点击了播放器正中间的播放按钮
    onPressPlayButton() {
        let isPlay = !this.state.isPlaying;
        this.setState({
            isPlaying: isPlay,
            showVideoCover: false
        }, () => {
            // console.log(this.state.isPlaying);
        });
        if (this.state.playFromBeginning) {
            this.videoPlayer.seek(0);
            this.setState({
                playFromBeginning: false,
            })
        }
    }

    // 点击了工具栏上的播放按钮
    onControlPlayPress() {
        this.onPressPlayButton();
    }

    // 点击了工具栏上的全屏按钮
    onControlShrinkPress() {
        // 开始点击 isFullScreen -> false
        if (this.state.isFullScreen) {
            //竖屏
            console.log('当前为竖屏');
            Orientation.lockToPortrait();
        } else {
            //横屏
            console.log('当前为横屏');
            Orientation.lockToLandscape();
        }
    }

    // 进度条值改变
    onSliderValueChanged(currentTime) {
        console.log(`进度条值：${currentTime}`);
        this.videoPlayer.seek(currentTime);
        if (this.state.isPlaying) {
            this.setState({
                currentTime: currentTime
            })
        } else {
            this.setState({
                currentTime: currentTime,
                isPlaying: true,
                showVideoCover: false
            })
        }
    }

    // 屏幕旋转时宽高会发生变化，可以在onLayout的方法中做处理，比监听屏幕旋转更加及时获取宽高变化
    _onLayout = (event) => {
        //获取根View的宽高
        let {width, height} = event.nativeEvent.layout;
        console.log('通过onLayout得到的宽度：' + width);
        console.log('通过onLayout得到的高度：' + height);

        // 一般设备横屏下都是宽大于高，这里可以用这个来判断横竖屏
        let isLandscape = (width > height);
        if (isLandscape){
            this.setState({
                videoWidth: width,
                videoHeight: height,
                isFullScreen: true,
            })
        } else {
            this.setState({
                videoWidth: width,
                videoHeight: width * 9/16,
                isFullScreen: false,
            })
        }
        //解除所有锁定
        // Orientation.unlockAllOrientations();
    };

    getCurrentTimePercentage() {
        if (this.state.currentTime > 0) {
            return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
        }
        return 0;
    };

    render() {
        const flexCompleted = this.getCurrentTimePercentage() * 100;
        const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;
        return (
            <View style={styles.container} onLayout={this._onLayout}>
                <View
                    style={{ width: this.state.videoWidth, height: this.state.videoHeight, backgroundColor:'#000000' }}
                >
                    <Video
                        ref={(ref) => { //方法对引用Video元素的ref引用进行操作
                            this.videoPlayer = ref
                        }}
                        source={{ uri: 'https://gslb.miaopai.com/stream/HNkFfNMuhjRzDd-q6j9qycf54OaKqInVMu0YhQ__.mp4?ssig=bbabfd7684cae53660dc2d4c2103984e&time_stamp=1533631567740&cookie_id=&vend=1&os=3&partner=1&platform=2&cookie_id=&refer=miaopai&scid=HNkFfNMuhjRzDd-q6j9qycf54OaKqInVMu0YhQ__'}}
                        // source={require('../assets/video/11.mp4')}//设置视频源  
                        style={{width: this.state.videoWidth, height: this.state.videoHeight}}
                        rate={this.state.rate}//播放速率
                        paused={!this.state.isPlaying}//暂停
                        volume={this.state.volume}//调节音量
                        muted={this.state.muted}//控制音频是否静音
                        resizeMode={this.state.resizeMode}//缩放模式
                        onLoad={this.onLoad}
                        onProgress={this.onProgress}//视频播放过程中每个间隔进度单位调用的回调函数
                        onEnd={this.onEnd}//视频播放结束时的回调函数
                        repeat={true}
                        onAudioFocusChanged={this.onAudioFocusChanged}
                        // controls={true}
                        // onAudioBecomingNoisy={this.onAudioBecomingNoisy}
                        // playWhenInactive={false}
                        // playInBackground={false}
                        // ignoreSilentSwitch={'ignore'}
                        // progressUpdateInterval={250.0}
                        onLoadStart={this._onLoadStart}
                        // onError={this._onPlayError}
                        // onBuffer={this._onBuffering}
                    />
                    {
                        this.state.showVideoCover ?
                            <Image
                                style={{
                                    position:'absolute',
                                    top: 0,
                                    left: 0,
                                    width: this.state.videoWidth,
                                    height: this.state.videoHeight
                                }}
                                resizeMode={'cover'}
                                source={require('../assets/image/timg.jpg')}
                            /> : null
                    }
                    <TouchableWithoutFeedback onPress={() => { this.hideControl() }}>
                        <View
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: this.state.videoWidth,
                                height: this.state.videoHeight,
                                backgroundColor: this.state.isPlaying ? 'transparent' : 'rgba(0, 0, 0, 0.2)',
                                alignItems:'center',
                                justifyContent:'center'
                            }}>
                            {
                                this.state.isPlaying ? null :
                                    <TouchableWithoutFeedback onPress={() => { this.onPressPlayButton() }}>
                                        <Image
                                            style={styles.playButton}
                                            source={require('../assets/image/icon_video_play.png')}
                                        />
                                    </TouchableWithoutFeedback>
                            }
                        </View>
                    </TouchableWithoutFeedback>
                    {
                        this.state.showVideoControl ?
                            <View style={[styles.control, {width: this.state.videoWidth}]}>
                                <TouchableOpacity activeOpacity={0.3} onPress={() => { this.onControlPlayPress() }}>
                                    <Image
                                        style={styles.playControl}
                                        source={this.state.isPlaying ? require('../assets/image/icon_control_pause.png') : require('../assets/image/icon_control_play.png')}
                                    />
                                </TouchableOpacity>
                                <Text style={styles.time}>{formatTime(this.state.currentTime)}</Text>
                                <Text style={styles.time}>{formatTime(this.state.duration)}</Text>
                                <TouchableOpacity activeOpacity={0.3} onPress={() => { this.onControlShrinkPress() }}>
                                    <Image
                                        style={styles.shrinkControl}
                                        source={this.state.isFullScreen ? require('../assets/image/icon_control_shrink_screen.png') : require('../assets/image/icon_control_full_screen.png')}
                                    />
                                </TouchableOpacity>
                            </View> : null
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    playButton: {
        width: 50,
        height: 50,
    },
    control: {
        flexDirection: 'row',
        height: 44,
        alignItems:'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    playControl: {
        width: 24,
        height: 24,
        marginLeft: 15,
    },
    shrinkControl: {
        width: 15,
        height: 15,
        marginRight: 15,
    },
    time: {
        fontSize: 12,
        color: 'white',
        marginLeft: 10,
        marginRight: 10
    },
});

export default Page1;