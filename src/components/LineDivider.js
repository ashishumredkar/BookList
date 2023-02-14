import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';
const LineDivider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.childContainer}></View>
    </View>
  );
};
export default memo(LineDivider);
const styles = StyleSheet.create({
  container: {
    width: 1,
    paddingVertical: 5,
  },
  childContainer: {
    flex: 1,
    borderLeftColor: COLORS.lightGray2,
    borderLeftWidth: 1,
  },
});
