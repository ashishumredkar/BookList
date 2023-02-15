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

  // const getPublishDate = (date) => {
  //   return format(parseISO(date), 'yyyy/MM/dd');
  // };
  const getPublishDate=(strDate)=>{
    let date2 = new Date(strDate);
    console.log('date33',date2);

    var strSplitDate = String(strDate).split(' ');
    var date = new Date(strSplitDate[0]);
    // alert(date);
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!

    var yyyy = date.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    date =  dd + "-" + mm + "-" + yyyy;
    return date.toString();
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
        <View style={styles.childRowContainer}>
          <Text style={styles.valueStyle}>{publishedDate}</Text>
          <Text style={styles.valueTitleStyle}>Published Date</Text>
        </View>
        <LineDivider />
        <View
          style={[styles.childRowContainer, {paddingHorizontal: SIZES.radius}]}>
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
