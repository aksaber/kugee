import React, { Component } from 'react';
import {
    FlatList,
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native';

// 屏幕的宽度
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const cols = 2;  // 每行显示2个
const boxW = 100;
const vMargin = 15;
const hMargin = 25;
const cellWH = (width-2*vMargin-15)/cols;

export default class HomeList extends Component {
    goDetail = (params) => {
        console.log(this.props.navigation.navigate('VideoDetail'));
        // this.props.navigation.navigate('VideoDetail');
    }

    renderData = (item) => {
        return (
            <TouchableWithoutFeedback onPress={() => this.goDetail(item.item)}>
                <View style={styles.list}>
                    <Image
                        source={{uri: item.item.image}}
                        style={{width: cellWH, height: 100}}
                    />
                    <Text style={styles.title}>{item.item.name}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.props.data}
                    renderItem={this.renderData}
                    numColumns={2}
                    style={styles.flatList}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flatList: {
        
    },
    list: {
        width: cellWH,
        height: boxW,
        marginLeft: vMargin,
        marginBottom: hMargin
    },
    title: {
        textAlign: 'center'
    }
});