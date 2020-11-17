import { StatusBar } from 'expo-status-bar';
import React from 'react';
import ButtonWithBackground from './ButtonWithBackground.js'
import { StyleSheet, Text, View, Image, ImageBackground, Button, Alert, TouchableHighlight } from 'react-native';

export default function GoToMyAccount() {
  return (
    <View style={styles.viewContainer}>
      <ImageBackground 
        style={styles.pic}
        source={{uri: 'https://res.cloudinary.com/imperfect/image/upload/q_auto:best,f_auto,dpr_auto,w_auto/v1601919017/website-assets/ABTasty%20website%20test%20assets/Asset_4_2x.png',
      }}> 
        <View style={styles.buttonContainer}>
          <ButtonWithBackground text='Go To My Accout' color='coral'/>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '55%',
    resizeMode: "stretch",
  },
  pic: {
    width: 'null',
    height: 'auto',
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 17,
    right: '40%',
    alignSelf: 'center' ,
    padding: 0,
   }
});