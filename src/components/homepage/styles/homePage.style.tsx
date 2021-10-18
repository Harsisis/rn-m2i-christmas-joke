import {StyleSheet} from 'react-native';
import color from '../../../common/styles/color';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: color.background,
  },
  title: {
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
    color: color.primary,
  },
  text: {
    color: color.text,
  },
});
