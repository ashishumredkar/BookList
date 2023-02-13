import React from 'react';
import { TouchableHighlight, Image,} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { icons } from '../../../constant';

export default class BackButton extends React.PureComponent {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress} style={styles.btnContainer}>
        <Image source={icons.back_arrow_icon} style={styles.btnIcon} />
      </TouchableHighlight>
    );
  }
}

BackButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
};
