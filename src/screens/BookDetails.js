import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  Animated,
  StyleSheet,
} from 'react-native';
import {FONTS, COLORS, SIZES} from '../../constant';
import {format, parseISO} from 'date-fns';
import {DEFAULT_IMAGE} from './Home';
import BackButton from '../components/BackButton/BackButton';
import Header from '../components/Header';

const LineDivider = () => {
  return (
    <View style={{width: 1, paddingVertical: 5}}>
      <View
        style={{
          flex: 1,
          borderLeftColor: COLORS.lightGray2,
          borderLeftWidth: 1,
        }}></View>
    </View>
  );
};

const BookDetail = ({route, navigation}) => {
  const [book, setBook] = useState(null);

  const [scrollViewWholeHeight, setScrollViewWholeHeight] = useState(1);
  const [scrollViewVisibleHeight, setScrollViewVisibleHeight] = useState(0);
  const [publishedDate, setPublishedDate] = useState('NA');
  const indicator = new Animated.Value(0);

  const getPublishDate = date => {
    return format(parseISO(date), 'MMM dd,yyyy');
  };

  useEffect(() => {
    let {book} = route.params;
    setBook(book);
    book.publishedDate &&
      setPublishedDate(getPublishDate(book?.publishedDate?.$date));
  }, [book]);

  const renderBookInfoSection = () => {
    return (
      <View style={styles.bookContainer}>
        <ImageBackground
          source={{uri: book.thumbnailUrl ?? DEFAULT_IMAGE}}
          resizeMode="cover"
          style={styles.sectionContainer}
        />
        <View style={styles.dummyImage}>
          <Image
            source={{uri: book.bookHower}}
            resizeMode="contain"
            style={styles.imageStyle}
          />
        </View>

        <View style={styles.rowContiner}>
          <View style={styles.childRowContainer}>
            <Text style={styles.valueStyle}>{publishedDate}</Text>
            <Text style={styles.valueTitleStyle}>Published Date</Text>
          </View>
          <LineDivider />
          <View
            style={[
              styles.childRowContainer,
              {paddingHorizontal: SIZES.radius},
            ]}>
            <Text style={styles.valueStyle}>{book.pageCount}</Text>
            <Text style={styles.valueTitleStyle}>Page count</Text>
          </View>
          <LineDivider />
          <View style={styles.childRowContainer}>
            <Text style={styles.valueStyle} numberOfLines={1}>
              {book.isbn}
            </Text>
            <Text style={styles.valueTitleStyle}>ISBN</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderBookDescription = () => {
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
        <View style={{width: 4, height: '100%', backgroundColor: COLORS.gray1}}>
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
          <Text style={{...FONTS.body2, color: COLORS.lightGray}}>
            {book.longDescription ?? 'No Description Provided by Author!!!'}
          </Text>
        </ScrollView>
      </View>
    );
  };

  if (book) {
    return (
      <View style={[styles.bookContainer, {backgroundColor: COLORS.black}]}>
        <Header />
        <View style={{flex: 4}}>{renderBookInfoSection()}</View>
        <View style={styles.descriptionView}>
          <Text style={{...FONTS.h2, color: COLORS.white, paddingTop: 4}}>
            Title: {book.title}
          </Text>
          <Text style={styles.valueStyle}>Status: {book.status}</Text>
          <Text style={styles.valueStyle}>
            Categories:{' '}
            {book.categories.map(category => {
              return category + ', ';
            })}
          </Text>
          <Text style={styles.valueStyle}>
            Authors:{' '}
            {book.authors.map(author => {
              return author + ', ';
            })}
          </Text>
        </View>
        <View style={{flex: 2}}>{renderBookDescription()}</View>
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
});
