import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, Alert, TouchableHighlight } from 'react-native';

export default function GoToMyAccount() {
  return (
    <View style={styles.viewContainer}>
      <ImageBackground 
        style={styles.pic}
        source={{uri: 'https://res.cloudinary.com/imperfect/image/upload/q_auto:best,f_auto,dpr_auto,w_auto/v1601919017/website-assets/ABTasty%20website%20test%20assets/Asset_4_2x.png',
      }}> 
      <View style={styles.buttonContainer}>
        <TouchableHighlight style={styles.acc}>
          <Text
              color='#EF5859'
              height='90px'
              width='190px'
              onPress={() => Alert.alert('You are reditected to tour account')}
             >"Go To My Account" </Text>  
           </TouchableHighlight>
        </View> 
      </ImageBackground>
      </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    // display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: '40%',
    // width: '100%',
    resizeMode: "stretch",
    // alignItems: 'center'
  },
  pic: {
    width: 'null',
    height: 'auto',
    // resizeMode: "stretch",
    // flexDirection: 'row',
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'stretch',
  },
  buttonContainer: {
    // backgroundColor: null,
    // justifyContent: 'center',
    // flexDirection: 'row',
    // alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: '40%',
    alignSelf: 'center' ,
    padding: 0,
   },
  acc: {
    // height: 90,
    // width: 190,
    borderRadius: 50,
    
  },
});