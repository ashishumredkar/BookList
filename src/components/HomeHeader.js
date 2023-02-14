import React, { memo } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';
const HomeHeader = () => {
  const profileData = {
    name: 'Asurion Japan',
  };

  return (
    <View style={styles.headerStyle}>
      <View style={{flex: 1}}>
        <View style={{marginRight: SIZES.padding}}>
          <Text style={styles.greetingStyle}>Hello...</Text>
          <Text style={styles.nameStyle}>{profileData.name}</Text>
        </View>
      </View>
    </View>
  );
};
export default memo(HomeHeader);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: SIZES.base,
    marginRight: SIZES.base,
    backgroundColor: COLORS.darkGreen,
    height: 40,
    borderRadius: SIZES.radius,
  },
  headerStyle: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: SIZES.padding,
    alignItems: 'center',
  },
  greetingStyle: {
    ...FONTS.h3,
    color: COLORS.white,
  },
  nameStyle: {
    ...FONTS.h2,
    color: COLORS.white,
  },
});
