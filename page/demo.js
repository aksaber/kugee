import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    Animated,//创建动画的库
    Easing,//React Native创建动画的载体
} from 'react-native';

var screenW = Dimensions.get('window').width;
var screenH = Dimensions.get('window').height;

class AnimatedDecay extends Component {

    constructor(props) {
        super(props);

        this.state = {
            decayValue: new Animated.ValueXY({x:screenW - 200,y:0}),
        };

        this.decayAnimated = Animated.spring(
            this.state.decayValue,
            {
                toValue: {x:100, y:0},    //目标值
                velocity: 2,                //附着在弹簧上物体的初始速度。默认值0（对象处于静止状态）。
                tension: -23,               //控制速度。默认值40。
                friction: 3,                //控制“弹性”/过冲。默认值7。
            }
        );
    }

    _startAnimated() {
        this.decayAnimated.start();
    }

    render(){
        return (
            <View style={styles.mainStyle}>
                <Text>Kugee</Text>
                <Animated.View
                    style={{
                        width: 150,
                        height: 150,
                        transform:[
                            {translateX: this.state.decayValue.x}, // x轴移动
                        ]
                    }}
                >
                    <Text>1111111111111111</Text>
                </Animated.View>

                <TouchableOpacity style={styles.touchStyle} onPress={this._startAnimated.bind(this)}>
                    <Text style={{width:200,height:100,textAlign:'center',lineHeight:100}}>点击开始动画</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    mainStyle:{
        flex:1,
        width:screenW,
        backgroundColor:"#ffffff",
        justifyContent:'flex-start',
        alignItems:'flex-start',
        paddingTop:100,
        flexDirection: 'row'
    },
    touchStyle:{
        width:200,
        height:100,
        position:'absolute',
        bottom:0,
        left:screenW/2 - 100,
    },
});

export default AnimatedDecay;