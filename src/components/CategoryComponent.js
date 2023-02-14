import React, { memo,  } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constant';
const CategoryComponent = ({category}) => {
    return category.map((data, index) => {
        return (
          <View
            style={styles.container} key={index}>
            <Text
              style={{
                ...FONTS.body3,
                color: index == 0 ? COLORS.lightGreen : COLORS.lightBlue,
              }}>
              {data}
            </Text>
          </View>
        );
      });
    }
export default memo(CategoryComponent);

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
        ...SIZES.font_18, color: COLORS.white
    },
  });