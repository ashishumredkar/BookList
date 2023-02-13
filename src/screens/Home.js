import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant/theme';
import {bookCollection} from '../../data/dataArray';
export const DEFAULT_IMAGE = 'https://reactjs.org/logo-og.png';

const Home = ({navigation}) => {
  const profileData = {
    name: 'Asurion Japan',
  };
  const renderHeader = profile => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          paddingHorizontal: SIZES.padding,
          alignItems: 'center',
        }}>
        <View style={{flex: 1}}>
          <View style={{marginRight: SIZES.padding}}>
            <Text style={{...FONTS.h3, color: COLORS.white}}>Hello...</Text>
            <Text style={{...FONTS.h2, color: COLORS.white}}>
              {profile.name}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderCatogory = item => {
    return item.categories.map((data, index) => {
      return (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: SIZES.base,
            marginRight: SIZES.base,
            backgroundColor: COLORS.darkGreen,
            height: 40,
            borderRadius: SIZES.radius,
          }}>
          <Text
            style={{
              ...FONTS.body3,
              color: index != 0 ? COLORS.lightGreen : COLORS.lightBlue,
            }}>
            {data}
          </Text>
        </View>
      );
    });
  };
  const renderItem = ({item}) => {
    return (
      <View style={{marginVertical: SIZES.base}} key={item.isbn}>
        <TouchableOpacity
          style={{flex: 1, flexDirection: 'row'}}
          onPress={() =>
            navigation.navigate('BookDetails', {
              book: item,
            })
          }>
          <Image
            source={{uri: item.thumbnailUrl ?? DEFAULT_IMAGE}}
            resizeMode="cover"
            style={{width: 100, height: 150, borderRadius: 10}}
          />
          <View style={{flex: 1, marginLeft: SIZES.radius}}>
            <View>
              <Text
                style={{
                  paddingRight: SIZES.padding_10,
                  ...FONTS.h2,
                  color: COLORS.white,
                }}>
                {item.title}
              </Text>
              <Text style={{...FONTS.h3, color: COLORS.lightGray}}>
                {item.authors[0]}
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: SIZES.radius}}>
              <Text
                style={{...FONTS.body4, color: COLORS.lightGray}}
                numberOfLines={1}>
                {item.shortDescription ?? 'No Short description was provid...'}
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: SIZES.base}}>
              {renderCatogory(item)}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
        marginTop: 0,
        paddingLeft: SIZES.padding_10,
      }}>
      <View style={{height: 100}}>{renderHeader(profileData)}</View>
      <FlatList
        data={bookCollection}
        renderItem={renderItem}
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
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
