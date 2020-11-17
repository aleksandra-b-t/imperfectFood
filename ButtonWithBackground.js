import React, { memo } from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'

const ButtonWithBackground = props => {
    const content = (
        <View style={[styles.button, {backgroundColor:props.color}]}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
    return (
        <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 16,
        width: 300,
        borderRadius: 24,
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 20
    }
})

export default ButtonWithBackground;
