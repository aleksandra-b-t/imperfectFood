import { StatusBar } from 'expo-status-bar';
import React, {useRef} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GoToMyAccount from './GoToMyAccount.js';
import Carousels from './Carousel.js'
import NavBar from './NavBar.js'
import TouchableBar from './TouchableBar.js'



export default function App() {
  return (
    <View style={styles.container}>
      
      <GoToMyAccount />
      <TouchableBar text="Imperfect Food's response to COVID-19" color='green' />
      {/* <Carousels /> */}
      {/* <NavBar/> */}
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
