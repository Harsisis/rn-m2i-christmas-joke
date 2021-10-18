import {StyleSheet} from 'react-native';
import color from '../../../common/styles/color';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: color.background,
    paddingBottom: 40,
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
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  highlightedTitle: {
    marginTop: 20,
    color: 'white',
    fontWeight: '800',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: color.darkenBackground,
    paddingBottom: 10,
  },
  placeholder: {
    height: 40,
    width: '100%',
  },
  back: {
    color: 'white',
    fontSize: 30,
    marginRight: 5,
  },
});
