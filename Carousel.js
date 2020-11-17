import React, { Component } from 'react';
import { ImageBackground, Text, View, StyleSheet, Button, Image} from 'react-native';
import Carousel from 'react-native-carousel-control';


export class Carousels extends Component {
    images = [
        'https://res.cloudinary.com/imperfect/image/upload/h_600,f_auto,fl_lossy,q_auto/v1568152022/website-assets/ValueCarousel3.png', 
        'https://res.cloudinary.com/imperfect/image/upload/h_600,f_auto,fl_lossy,q_auto/v1568850603/website-assets/MobileValueProp1ImageNew.png',
        'https://res.cloudinary.com/imperfect/image/upload/h_600,f_auto,fl_lossy,q_auto/v1568312015/website-assets/ValueCarousel2.png'
        ]; 
        
    render() {
        return (
            <View style={styles.container}>
                <Carousel
                    sliderWidth={300}
                    itemWidth={300}
                    autoplay={true}
                    loop={true}
                    >
                    {this.images.map((image, imageIndex) => {
                    return (
                    <View
                        style={{ width: '100%', 
                        height: '500',
                        resizeMode: "stretch",
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'stretch', }}
                        key={imageIndex}
                    >
                        <ImageBackground source={{ uri: image }} style={styles.card}>
                         </ImageBackground>
                    </View>)})}
                </Carousel>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      paddingTop: 0,
      justifyContent: 'center',
      flexDirection: 'row',
      resizeMode: "stretch",
      height: '10%',
    },
    carousel: {
        
    },  
    card: {
        flex: 1,
        height: '100%',
        marginVertical: 4,
        marginHorizontal: 16,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center"
      },
  });

export default Carousels;