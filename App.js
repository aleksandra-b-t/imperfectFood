import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import GoToMyAccount from './GoToMyAccount.js';
import Carousels from './Carousel.js'
import TouchableBar from './TouchableBar.js'
import ImageWithTopic from './ImageWithTopic.js'




export default function App() {
  return (
    
      <View style={styles.container}>
        {/* <GoToMyAccount />
        <TouchableBar text="Imperfect Food's response to COVID-19" color='green' />
        <Carousels />
        <TouchableBar text="↑ GOOD FOR YOU AND YOURS. ↑" color="purple" /> */}
        <TouchableBar text="↓ GOOD FOR THE PLANET. ↓" color="green" />
        <ImageWithTopic url={'https://res.cloudinary.com/imperfect/image/upload/h_800,f_auto,fl_lossy,q_auto/v1569292112/website-assets/DesktopItemsWeLoveImage.png'} topic='jakis topic'/>
      </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    width: '100%',
    height: '100%',

  },
});
