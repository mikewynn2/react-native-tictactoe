import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


export class Square extends Component {
    render() {
        return (

            <TouchableOpacity 
                onPress={() => this.props.onClick()}
                style={{
                    ...styles.button,
                    backgroundColor: this.props.playerXTurn ? 'steelblue' : 'crimson'
                }}
            >
                <Text style={styles.label}>{this.props.value}</Text>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 2,
        height: 80,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },

    label: {
        fontSize: 64,
        color: 'white',
    },

})
