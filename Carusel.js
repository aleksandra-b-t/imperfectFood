import React, { useRef } from "react";
import {SafeAreaView, ScrollView, StyleSheet, View, ImageBackground, Animated, useWindowDimensions, Text} from "react-native";

// const images = {
// pic1: `https://res.cloudinary.com/imperfect/image/upload/h_600,f_auto,fl_lossy,q_auto/v1568152022/website-assets/ValueCarousel3.png`, 
// pic2: `https://res.cloudinary.com/imperfect/image/upload/h_600,f_auto,fl_lossy,q_auto/v1568850603/website-assets/MobileValueProp1ImageNew.png`,
// pic3: `https://res.cloudinary.com/imperfect/image/upload/h_600,f_auto,fl_lossy,q_auto/v1568312015/website-assets/ValueCarousel2.png`};
const images = new Array(3).fill('https://res.cloudinary.com/imperfect/image/upload/h_600,f_auto,fl_lossy,q_auto/v1568152022/website-assets/ValueCarousel3.png', 'https://res.cloudinary.com/imperfect/image/upload/h_600,f_auto,fl_lossy,q_auto/v1568850603/website-assets/MobileValueProp1ImageNew.png');

const Carusel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const { width: windowWidth } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          style={styles.scrollViewStyle}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX
                }
              }
            }
          ])}
          scrollEventThrottle={1}
        >
          {images.map((image, imageIndex) => {
            return (
              <View
                style={{ width: windowWidth, 
                    height: '100%',
                    resizeMode: "stretch",
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'stretch', }}
                key={imageIndex}
              >
                <ImageBackground source={{ uri: image }} style={styles.card}>
                </ImageBackground>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1)
              ],
              outputRange: [8, 16, 8],
              extrapolate: "clamp"
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, { width }]}
              />
            );
          })}
        </View>
      </View>
      <View style={styles.lineContainer}>
        <Text style={styles.line}> ↑ GOOD FOR YOU AND YOURS. ↑</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  scrollContainer: {
    height: 1000,
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    flex: 1,
    height: 800,
    marginVertical: 4,
    marginHorizontal: 16,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center"
  },
  textContainer: {
    backgroundColor: "rgba(0,0,0, 0.7)",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "grey",
    marginHorizontal: 4
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  lineContainer: {
    backgroundColor: '#B22374',
    height: 50,
    width: '100%',

  },
  line: {
    fontWeight: 7,
    color: 'white',
    font: 'bold',
    fontSize: 24,
    alignContent: 'center',
    justifyContent: "center",

  }
});

export default Carusel;