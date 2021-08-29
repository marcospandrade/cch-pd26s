import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    color: 'white'
  },
  containerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: theme.colors.heading,
  },
  containerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 25,
    marginTop: 20,
    paddingHorizontal: 10,

  }
});