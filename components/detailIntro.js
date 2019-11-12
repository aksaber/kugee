import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';

export default class DetailIntro extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.name}>电影名称</Text>
                <Text style={styles.subtitle}>导演：王晶</Text>
                <Text style={styles.subtitle}>主演：胡歌，杨幂，唐嫣</Text>
                <Text style={styles.description}>恭喜fpx，恭喜fpx，恭喜fpx，恭喜fpx，恭喜fpx，恭喜fpx。</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        height: 1000
    },
    name: {
        fontSize: 18
    },
    subtitle: {
        color: '#888'
    },
    description: {
        marginTop: 20,
        color: '#888'
    }
})