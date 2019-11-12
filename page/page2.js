import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    Dimensions,
    Animated, //创建动画的库
    Easing, //React-Native创建动画的载体
} from 'react-native';

import { MarqueeHorizontal, MarqueeVertical } from 'react-native-marquee-ab';
import { BoxShadow } from 'react-native-shadow';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import HomeSwiper from '../components/homeSwiper';
import HomeList from '../components/homeList';

// 屏幕的宽度
const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;

const image = 'http://pic18.nipic.com/20120103/8993051_170340691334_2.jpg'

class Page2 extends Component {
    static navigationOptions = {
        title: 'Page2',
    };
    
    state = {
        list: [
            {
                id: 1,
                name: 'saber',
                image: image
            },
            {
                id: 2,
                name: 'archer',
                image: image
            },
            {
                id: 3,
                name: 'lancer',
                image: image
            },
            {
                id: 4,
                name: 'lancer',
                image: image
            },
            {
                id: 5,
                name: 'lancer',
                image: image
            },
            {
                id: 6,
                name: 'lancer',
                image: image
            },
            {
                id: 7,
                name: 'lancer',
                image: image
            },
            {
                id: 2,
                name: 'lancer',
                image: image
            }
        ],
    }

    render() {
        const shadowOpt = {
            width: 315,
            height: 44,
            color: '#000',
            border: 4,
            radius: 22,
            opacity: 0.1,
            x: 0,
            y: 0,
            style: { marginVertical: 5 }
        }

        return (
            <ScrollView style={{height: screenH - 50, paddingTop: 10}}>
                <HomeSwiper />
                <BoxShadow setting={shadowOpt}>
                    <View style={{width: 305, height: 44}}>
                        <Text>4554698723132</Text>
                    </View>
                </BoxShadow>
                <View style={styles.midTitle}>
                    <Text style={styles.midLeft}>kuGee ></Text>
                    <MarqueeHorizontal
                        textList = {[
                            {label : '1', value : '一闪一闪亮晶晶，满天都是小星星'},
                        ]}
                        speed = {50}
                        width = {screenW - 110}
                        height = {40}
                        direction = {'left'}
                        reverse = {false}
                        bgContainerStyle = {{backgroundColor: '#fff'}}
                        textStyle = {{fontSize: 14, color : '#fb7397',}}
                    />
                </View>
                <HomeList data={this.state.list} navigation={this.props.navigation} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    midTitle: {
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    midLeft: {
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 20,
        color: '#fb7397'
    },
    midRight: {
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 10,
        color: '#fb7397',
    }
})

export default Page2;