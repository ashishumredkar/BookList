import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';
import {DEFAULT_IMAGE} from './Home';
import LineDivider from '../components/LineDivider';
const BookInfoSection = (props) => {
  let book = props.book;
  const [publishedDate, setPublishedDate] = useState('');
 
  useEffect(() => {
    book.publishedDate &&
      setPublishedDate(getPublishDate(book?.publishedDate?.$date));
  }, [book]);

  const getPublishDate=(strDate)=>{
    if(strDate.length<0){
      return undefined;
    }
    const date= strDate.split('T') 
    return date[0].toString() ?? undefined;
}


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
        {publishedDate.length > 0 && <View style={styles.childRowContainer}>
          <Text style={styles.valueStyle}>{publishedDate}</Text>
          <Text style={styles.valueTitleStyle}>Published Date</Text>
        </View>
        }
      {publishedDate.length > 0 &&<LineDivider/>}
        <View
          style={[styles.childRowContainer, {paddingHorizontal: SIZES.radius}]}>
          <Text style={styles.valueStyle}>{book.pageCount}</Text>
          <Text style={styles.valueTitleStyle}>Page count</Text>
        </View>
        <LineDivider />
        {book.isbn?.length>0 &&<View style={styles.childRowContainer}>
          <Text style={styles.valueStyle} numberOfLines={1}>
            {book.isbn}
          </Text>
          <Text style={styles.valueTitleStyle}>ISBN</Text>
        </View>
        } 
      </View>
    </View>
  );
};
export default BookInfoSection;

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
