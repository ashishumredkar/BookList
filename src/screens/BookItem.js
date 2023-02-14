import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';
import CategoryComponent from '../components/CategoryComponent';
import {DEFAULT_IMAGE} from './Home';
const BookItem = (props) => {
  const item = props.item;
  const navigation = useNavigation();
  const navigateBookDetails = () => {
    navigation.navigate('BookDetails', {
      book: item,
    });
  };
  return (
    <View style={{marginVertical: SIZES.base}} key={item.isbn}>
      <TouchableOpacity
        style={styles.childContainer}
        onPress={() => navigateBookDetails()}>
        <Image
          source={{uri: item.thumbnailUrl ?? DEFAULT_IMAGE}}
          resizeMode="cover"
          style={styles.imageContiner}
        />
        <View style={styles.titleContainer}>
          <View>
            <Text
              style={styles.title}>
              {item.title}
            </Text>
            <Text style={styles.authersStyles}>
              {item.authors[0]}
            </Text>
          </View>
          <View style={styles.descriptionView}>
            <Text
              style={styles.shortDescription}
              numberOfLines={1}>
              {item.shortDescription ?? 'No Short description was provid...'}
            </Text>
          </View>
          <View style={styles.categoryContainer}>
            <CategoryComponent category={item.categories} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default BookItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: SIZES.base,
    height: 80,
    alignItems: 'flex-end',
    backgroundColor: 'black',
  },
  childContainer:{
    flex: 1, flexDirection: 'row'
  },
  imageContiner: {
    width: 100, height: 150, borderRadius: 10
  },
  descriptionView:{
    flexDirection: 'row', marginTop: SIZES.radius
  },
  shortDescription: {
    ...FONTS.body4, color: COLORS.lightGray
  },
  titleContainer:{
    flex: 1, marginLeft: SIZES.radius
  },
  title: {
    paddingRight: SIZES.padding_10,
    ...FONTS.h2,
    color: COLORS.white,
  },
  authersStyles:{
    ...FONTS.h3, color: COLORS.lightGray
  },
  categoryContainer:{
    flexDirection: 'row', marginTop: SIZES.base
  }
});
