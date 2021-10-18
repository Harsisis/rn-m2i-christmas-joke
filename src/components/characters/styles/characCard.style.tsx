import {StyleSheet} from 'react-native';
import color from '../../../common/styles/color';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: color.background,
    borderBottomColor: color.ligthenBackground,
    borderTopColor: color.ligthenBackground,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  title: {
    color: color.primary,
  },
  text: {
    color: color.text,
  },
});
