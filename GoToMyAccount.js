import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button } from 'react-native';

export default function GoToMyAccount() {
  return (
    <View>
      <ImageBackground 
      style={styles.pic}
      source={{uri: 'https://res.cloudinary.com/imperfect/image/upload/q_auto:best,f_auto,dpr_auto,w_auto/v1601919017/website-assets/ABTasty%20website%20test%20assets/Asset_4_2x.png',
      }}> 
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  pic: {
    width: null,
    height: 400,
    resizeMode: "stretch",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});