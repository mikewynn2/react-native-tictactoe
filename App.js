import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Game } from './Game';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Game />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#535353',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
