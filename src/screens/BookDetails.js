import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Animated, StyleSheet} from 'react-native';
import {FONTS, COLORS, SIZES} from '../../constant';
import BookDesription from '../components/BookDescription';
import Header from '../components/Header';
import BookInfoSection from './BookInfoSection';

const BookDetail = ({route}) => {
  const [book, setBook] = useState(null);
  const [scrollViewWholeHeight, setScrollViewWholeHeight] = useState(1);
  const [scrollViewVisibleHeight, setScrollViewVisibleHeight] = useState(0);
  const indicator = new Animated.Value(0);

  useEffect(() => {
    let {book} = route.params;
    setBook(book);
  }, [book]);

  if (book) {
    return (
      <View style={[styles.bookContainer, {backgroundColor: COLORS.black}]}>
        <Header />
        <View style={{flex: 4}}>
          <BookInfoSection book={book} />
        </View>
        <View style={styles.descriptionView}>
          <Text style={styles.title}>Title: {book.title}</Text>
          <Text style={styles.valueStyle}>Status: {book.status}</Text>
          {book.categories?.length > 0 && (
            <Text style={styles.valueStyle}>
              Categories:{' '}
              {book.categories.map(category => {
                return category + ', ';
              })}
            </Text>
          )}
          {book.authors?.length > 0 && (
            <Text style={styles.valueStyle}>
              Authors:{' '}
              {book.authors.map(author => {
                return author + ', ';
              })}
            </Text>
          )}
        </View>
        <View style={{flex: 2}}>
          <BookDesription description={book.longDescription} />
        </View>
      </View>
    );
  } else {
    return <></>;
  }
};
export default BookDetail;

const styles = StyleSheet.create({
  bookContainer: {
    flex: 1,
  },
  childBookDescription: {
    width: 4,
    height: '100%',
    backgroundColor: COLORS.gray1,
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
  title: {
    ...FONTS.h2,
    color: COLORS.white,
    paddingTop: 4,
  },
});
