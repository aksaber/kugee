import React, { Component } from 'react';
// import {
//     createStackNavigator,
//     createBottomTabNavigator,
//     createAppContainer,
// } from 'react-navigation';
import { Image } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';

import Page1 from './page/page1';
// import AppHome from './page/homePage';
import AppHome from './page/homePage1'
import Page3 from './page/page3';
import Page4 from './page/page4';
import Page5 from './page/page5';
import VideoDetail from './components/videoDetail';

const SELECTED_COLOR = '#ffc0cb';
const UNSELECTED_COLOR = '#000';

class App extends Component {
    render() {
        return <AppContainer2 /> ;
    }
}

const AppNavigator = createMaterialTopTabNavigator(
    {
        AppHome: {
            screen: AppHome,
            navigationOptions: {
                tabBarLabel: 'Page2',
                tabBarIcon: ({ focused }) => (
                    <SvgUri
                        width="18"
                        height="18"
                        source={{uri: 'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg'}}
                        fill={focused ? SELECTED_COLOR : UNSELECTED_COLOR}
                    />
                )
            }
        },
        Page1: {
            screen: Page1,
            navigationOptions: {
                // title: 可以用作headerTitle和tabBarLabel的备选的通用标题。
                // tabBarOnPress: Tab被点击的回调函数，它的参数是一保函一下变量的对象：
                //   navigation：页面的 navigation props
                //   defaultHandler: tab press 的默认 handler
                // tabBarVisible: 导航是否可见
                tabBarLabel: 'Page1',
                tabBarColor: 'red',
                tabBarIcon: ({ focused }) => (

                    <Image
                        source={require('./assets/image/timg.jpg')}
                        style={{ width: 18, height: 18 }}
                    />
                )
            }
        },
        Page3,
        Page4,
        Page5
    },
    {
        initialRouteName: 'AppHome',
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon: true,
            activeTintColor: '#ffc0cb',  // 选中状态的标签和图标的颜色
            inactiveTintColor: 'grey',   // 非选中时的颜色
            indicatorStyle: {
                height: 0, // 不显示indicator(底部的线)
            },
            style: {
                backgroundColor: '#f2f2f2',
                borderTopWidth: 0,
                borderTopColor: 'grey',
            },
            labelStyle: {
                marginTop: -3
            },
            tabStyle: {
                height: 60
            },
            pressColor: '#ccc', // 水波纹颜色
        },
        // tabBarOptions: {
        //     activeTintColor: '#fb7299',
        //     inactiveTintColor: '#999',
        // }
    }
);

const AppContainer = createAppContainer(AppNavigator);

const AppStackNavigator = createStackNavigator(
    {
        AppContainer: {
            screen: AppContainer,
            navigationOptions: {
                tabBarVisible: true,
                header: null
            }
        },
        VideoDetail: {
            screen: VideoDetail,
        }
    }
)

const AppContainer2 = createAppContainer(AppStackNavigator);

export default App;