import React, { Component } from 'react';
import { ImageBackground, Text, View, StyleSheet} from 'react-native';
import Carousel from 'react-native-carousel-control';

export class Test extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Carousel style={styles.carousel}>
                    <ImageBackground source={{uri: 'https://res.cloudinary.com/imperfect/image/upload/h_600,f_auto,fl_lossy,q_auto/v1568152022/website-assets/ValueCarousel3.png'}} />
                    <ImageBackground source={{uri: 'https://res.cloudinary.com/imperfect/image/upload/h_600,f_auto,fl_lossy,q_auto/v1568850603/website-assets/MobileValueProp1ImageNew.png'}} />
                    <ImageBackground source={{uri: 'https://res.cloudinary.com/imperfect/image/upload/h_600,f_auto,fl_lossy,q_auto/v1568312015/website-assets/ValueCarousel2.png'}} />
                </Carousel>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    carousel: {
        
    }
  });


export default Test
