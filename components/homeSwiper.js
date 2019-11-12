import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'

import Swiper from 'react-native-swiper'

export default class HomeSwiper extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Swiper
                    style={styles.wrapper}
                    loop={true}
                    autoplay={true}
                    autoplayTimeout={3}
                    showsPagination={false}
                >
                    <View style={styles.slide1}>
                        <Text style={styles.text}>Hello Swiper</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>And simple</Text>
                    </View>
                </Swiper>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 5,
        paddingRight: 5,
        height: 200,
    },
    wrapper: {
        
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})