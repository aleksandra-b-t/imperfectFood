import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';



export default function ImageWithTopic(props){
    return (  
        <View style={styles.picContainer}>
            <ImageBackground styles={styles.pic} source={props.url}>
            <Text style={styles.text}>{props.topic}</Text>
            </ImageBackground>
        </View>
    )
}
 
const styles = StyleSheet.create({
    picContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: '30%',
        resizeMode: "stretch",
        alignItems: 'center'
    },
    pic: {
        resizeMode: "stretch",
        position: 'absolute',
        height: '100%'
    },
    text: {
        color: 'black',
        fontSize: 10,
        fontWeight: 'bolder',  
    }
    
})