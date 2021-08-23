import { theme } from './../../global/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // verticalAlign: 'center',
  },
  heading: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  headingText: {
    fontSize: 12,
    color: theme.colors.heading,
  }
});