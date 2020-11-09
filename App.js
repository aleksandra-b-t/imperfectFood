import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GoToMyAccount from './GoToMyAccount.js';



export default function App() {
  return (
    <View style={styles.container}>
      
      <GoToMyAccount />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
