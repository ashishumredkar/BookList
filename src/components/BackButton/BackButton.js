import React, { memo } from 'react';
import { TouchableHighlight, Image,} from 'react-native';
import styles from './styles';
import { icons } from '../../../constant';

const BackButton  =(props) => {
    return (
      <TouchableHighlight onPress={props.onPress} style={styles.btnContainer}>
        <Image source={icons.back_arrow_icon} style={styles.btnIcon} />
      </TouchableHighlight>
    );
}
export default memo(BackButton);
