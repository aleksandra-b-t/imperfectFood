import { StatusBar } from 'expo-status-bar';
import React, {useRef} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GoToMyAccount from './GoToMyAccount.js';
import Carusel from './Carusel.js'
import Test from './Test.js'



export default function App() {
  return (
    <View style={styles.container}>
      
      <GoToMyAccount />
      {/* <Carusel /> */}
      <Test/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
