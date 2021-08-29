import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import {
  View,
  Text
} from 'react-native';

import { Button } from 'react-native-paper'
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export function Dashboard() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  function handlePressionButton() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Home');
    }, 1000);
  }

  return (
    <View style={styles.container}>
      <View
        style={styles.containerTitle}
      >
        <Text style={styles.text}>Agora você faz parte dos Pi Lovers!</Text>
      </View>

      <View
        style={styles.containerButton}
      >
        <Button
          style={styles.button}
          color={theme.colors.secondary}
          icon="home"
          loading={loading}
          mode="contained"
          onPress={() => handlePressionButton()}
        >
          Voltar para a Home
        </Button>
      </View>
    </View>
  );
}