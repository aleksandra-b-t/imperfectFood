import { StatusBar } from 'expo-status-bar';
import React, {useRef} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GoToMyAccount from './GoToMyAccount.js';
import Carusel from './Carusel.js'



export default function App() {
  return (
    <View style={styles.container}>
      
      <GoToMyAccount />
      <Carusel />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
