import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';

import Page2 from './page2';
import Page6 from './home/page6';
import Page7 from './home/page7';

import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view'

const screenWidth = Dimensions.get('window').width;

export default class AppHome extends Component {
    render() {
        return (
            <ScrollableTabView
                style={styles.container}
                renderTabBar={() => <DefaultTabBar style={{borderBottomColor: '#fff'}} />}
                tabBarUnderlineStyle={styles.lineStyle}
                tabBarActiveTextColor='#fb7397'
            >
                <Page2 tabLabel="娱乐" navigation={this.props.navigation} />
                <Page6 tabLabel="科技" navigation={this.props.navigation} />
                <Page7 tabLabel="游戏" navigation={this.props.navigation} />
            </ScrollableTabView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    lineStyle: {
      height: 1,
      backgroundColor: '#fb7397'
    },
    textStyle: {
      flex: 1,
      fontSize: 20,
      marginTop: 20,
      textAlign:'center'
    },
});