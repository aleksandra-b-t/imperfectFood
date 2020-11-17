import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';



export default function TouchableBar(props){
    const content = (  
        <View style={[styles.cross, {backgroundColor:props.color}]}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
    return (
        <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
    )
}
 
const styles = StyleSheet.create({
    cross: {
        padding: 10,
        width: '100%',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold'
    }
})

