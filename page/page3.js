import React, { Fragment, Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TouchableWithoutFeedback
} from 'react-native';

import {
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class Page3 extends Component {
    static navigationOptions = {
        title: 'Page3',
    };

    goDetail = () => {
        console.log(this.props.navigation.navigate('VideoDetail'));
        this.props.navigation.navigate('VideoDetail');
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.goDetail}>
                <View>
                    <Text>11</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    
});

export default Page3;