import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, Alert } from 'react-native';

export default function GoToMyAccount() {
  return (
    <View>
      <ImageBackground 
        style={styles.pic}
        source={{uri: 'https://res.cloudinary.com/imperfect/image/upload/q_auto:best,f_auto,dpr_auto,w_auto/v1601919017/website-assets/ABTasty%20website%20test%20assets/Asset_4_2x.png',
      }}> 
      <View style={styles.buttonContainer}>
        <Button
            title="Go To My Account"
            color='#EF5859'
            style= {styles.acc}
            onPress={() => Alert.alert('You are reditected to tour account')}
            />  
        </View> 
      </ImageBackground>
      <View>
      <Button
        title="Imperfect Food's response to COVID-19"
        color='#547420'
        onPress={() => Alert.alert("Redirected to 'Imperfect Food's response to COVID-19'")}
        style={styles.but}
        />    
        </View>
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
  buttonContainer: {
    flex: 1,
    backgroundColor: null,
    justifyContent: 'center',
    alignItems: 'center'
  },
  acc: {
    height: 70,
    width: 90,
    borderRadius: 50,
    position: "relative",
    marginTop: 100,
  
  },
  but: {
      height: 100,
  }
});