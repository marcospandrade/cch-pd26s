import React from 'react';

import {
  View,
  Text
} from 'react-native';
import { styles } from './styles';

export function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Você agora faz parte dos Pi Lovers!</Text>
    </View>
  );
}