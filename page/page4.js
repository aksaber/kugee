import React, { Fragment, Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';

import {
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class Page4 extends Component {
    static navigationOptions = {
        title: 'Page4',
    };
    render() {
        return (
            <Fragment>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>
                        <View style={styles.body}>
                            <View style={styles.sectionContainer}>
                                <Text style={styles.sectionTitle}>Page-4</Text>
                                <Text style={styles.sectionDescription}>
                                    Edit <Text style={styles.highlight}>App.js</Text> to change this
                                    screen and then come back to see your edits.
                                </Text>
                            </View>
                            <View style={styles.sectionContainer}>
                                <Text style={styles.sectionTitle}>See Your Changes</Text>
                                <Text style={styles.sectionDescription}>
                                    <ReloadInstructions />
                                </Text>
                            </View>
                            <View style={styles.sectionContainer}>
                                <Text style={styles.sectionTitle}>Debug</Text>
                                <Text style={styles.sectionDescription}>
                                    <DebugInstructions />
                                </Text>
                            </View>
                            <View style={styles.sectionContainer}>
                                <Text style={styles.sectionTitle}>Learn More</Text>
                                <Text style={styles.sectionDescription}>
                                    Read the docs to discover what to do next:
                                </Text>
                            </View>
                            <LearnMoreLinks />
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
});

export default Page4;