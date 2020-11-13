import { StatusBar } from 'expo-status-bar';
import React, {useRef} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GoToMyAccount from './GoToMyAccount.js';
import Carousel from './Carousel.js'
import Test from './Test.js'



export default function App() {
  return (
    <View style={styles.container}>
      
      <GoToMyAccount />
      <Carousel />
      {/* <Test/> */}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    display: 'flex',
    width: '100vw',
    height: '100vh',

  },
});
