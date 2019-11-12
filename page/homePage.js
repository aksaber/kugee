import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    Dimensions
} from 'react-native';

import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Page2 from './page2';
import Page6 from './home/page6';
import Page7 from './home/page7';
import VideoDetail from '../components/videoDetail'

class AppHome extends Component {
    componentDidMount() {
        console.log(1, this.props)
    }
    render() {
        return <AppContainer2 />
    }
}

const AppNavigator = createMaterialTopTabNavigator(
    {
        Page2,
        Page6,
        Page7,
    },
    {
        swipeEnabled: true,
        tabBarOptions: {
            // scrollEnabled: true // 顶部tab可滑动
        }
    }
)

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
        // VideoDetail: {
        //     screen: VideoDetail,
        //     navigationOptions: {
        //         headerTitle: '视频页',
        //         headerStyle: {
        //             backgroundColor: '#fb7397'
        //         },
        //         headerTitleStyle: {
        //             color: '#fff',
        //             flex: 1,
        //             textAlign: 'center',
        //             marginLeft: -45
        //         },
        //         headerTintColor: '#000',// 标题和按钮颜色
        //         headerBackImage: <Image
        //             source={require('../assets/image/icon_control_shrink_screen.png')}
        //             style={{width: 30, height: 30}}
        //         />,
        //         // headerShown: false, // 是否隐藏标题栏
        //     }
        // }
    }
)

const AppContainer2 = createAppContainer(AppStackNavigator);

export default AppHome;