import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constant/theme';
import {bookCollection} from '../../data/dataArray';
import HomeHeader from '../components/HomeHeader';
import BookItem from './BookItem';
export const DEFAULT_IMAGE = 'https://reactjs.org/logo-og.png';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: 100}}>{<HomeHeader />}</View>
      <FlatList
        data={bookCollection}
        renderItem={item => <BookItem {...item} />}
        keyExtractor={(item, index) => `${item.isbn}` + index}
        showsVerticalScrollIndicator={false}
        initialNumToRender={5}
        maxToRenderPerBatch={1}
        windowSize={7}
        removeClippedSubviews
      />
    </SafeAreaView>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    marginTop: 0,
    paddingLeft: SIZES.padding_10,
  },
});
