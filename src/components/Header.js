import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';
import BackButton from './BackButton/BackButton';
const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.titleContiner}>
        <Text style={styles.title}>Book Detail's</Text>
      </View>
    </View>
  );
};
export default memo(Header);
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: SIZES.base,
    height: 70,
    alignItems: 'flex-end',
    backgroundColor: 'black',
  },
  titleContiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  title: {
    ...FONTS.h1,
    color: COLORS.white,
  },
});
