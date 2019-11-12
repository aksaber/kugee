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

const width = Dimensions.get('window').width;
const cols = 4;  // 每行显示2个
const boxW = 70;
const boxH = 25;
const vMargin = 15;
const hMargin = 25;
const cellWH = (width-2*vMargin-15)/cols;

export default class Series extends Component {

    selSeries = () => {
        alert('series');
    }

    renderSeries = () => {
        const list = [];
        const arr = [1, 2, 3, 4, 5];
        arr.map((item, index) => {
            list.push(
                <TouchableOpacity
                    onPress={this.selSeries}
                    style={styles.btn}
                >
                    <Text>{index+1}</Text>
                </TouchableOpacity>
            )
        });
        return list;
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderSeries()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#eeeeee',
        paddingTop: hMargin,
        height: 1000
    },
    btn: {
        backgroundColor: '#fff',
        alignItems: 'center',
        width: boxW,
        height: boxH,
        borderRadius: 3,
        marginLeft: vMargin,
        marginBottom: hMargin
    }
})