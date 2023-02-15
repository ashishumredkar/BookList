import React, { useState } from 'react';
import {ScrollView, StyleSheet, Text, View,Animated} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';
const BookDescription = (props) => {
    const{description}=props;
    const [scrollViewWholeHeight, setScrollViewWholeHeight] = useState(1);
    const [scrollViewVisibleHeight, setScrollViewVisibleHeight] = useState(0);
    const indicator = new Animated.Value(0);

    const indicatorSize =
    scrollViewWholeHeight > scrollViewVisibleHeight
      ? (scrollViewVisibleHeight * scrollViewVisibleHeight) /
        scrollViewWholeHeight
      : scrollViewVisibleHeight;

  const difference =
    scrollViewVisibleHeight > indicatorSize
      ? scrollViewVisibleHeight - indicatorSize
      : 1;
  return (
   <View style={styles.bookDescrContainer}>
    <View style={styles.childBookDescription}>
      <Animated.View
        style={{
          width: 4,
          height: indicatorSize,
          backgroundColor: COLORS.lightGray4,
          transform: [
            {
              translateY: Animated.multiply(
                indicator,
                scrollViewVisibleHeight / scrollViewWholeHeight,
              ).interpolate({
                inputRange: [0, difference],
                outputRange: [0, difference],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}
      />
    </View>
    <ScrollView
      contentContainerStyle={{paddingLeft: SIZES.padding2}}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      onContentSizeChange={(width, height) => {
        setScrollViewWholeHeight(height);
      }}
      onLayout={({
        nativeEvent: {
          layout: {x, y, width, height},
        },
      }) => {
        setScrollViewVisibleHeight(height);
      }}
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {y: indicator}}}],
        {useNativeDriver: false},
      )}>
      <Text
        style={{
          ...FONTS.h2,
          color: COLORS.white,
          marginBottom: SIZES.padding,
        }}>
        Description
      </Text>
      <Text style={styles.bookTitleDescription}>
        {description ?? 'No Description Provided by Author!!!'}
      </Text>
    </ScrollView>
  </View>
);

};
export default BookDescription;

const styles = StyleSheet.create({
    bookContainer: {
      flex: 1,
    },
    childBookDescription:{
      width: 4, height: '100%', backgroundColor: COLORS.gray1
    },
    sectionContainer: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    dummyImage: {
      flex: 5,
      paddingTop: SIZES.padding2,
      alignItems: 'center',
    },
    imageStyle: {
      flex: 1,
      width: 150,
      height: 'auto',
    },
    rowContiner: {
      flexDirection: 'row',
      paddingVertical: 20,
      margin: SIZES.padding,
      borderRadius: SIZES.radius,
      backgroundColor: 'rgba(0,0,0,0.3)',
    },
    valueTitleStyle: {
      ...FONTS.body4,
      color: COLORS.white,
    },
    valueStyle: {
      ...FONTS.h3,
      color: COLORS.white,
    },
    childRowContainer: {
      flex: 1,
      alignItems: 'center',
    },
    bookDescrContainer: {
      flex: 1,
      flexDirection: 'row',
      padding: SIZES.padding,
    },
    descriptionView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: COLORS.gray4,
    },
    title:{
      ...FONTS.h2, color: COLORS.white, paddingTop: 4
    },
    bookTitleDescription:{
      ...FONTS.body2, color: COLORS.lightGray
    }
  });
  
