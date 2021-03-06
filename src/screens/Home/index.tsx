import React, { useState } from 'react';
import { Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import {
  View
} from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function Home() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  function handlePressionButton() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('FormularioCadastro');
    }, 2000);

  }
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Seja bem-vindo ao Banco Pi!</Text>
      <Button
        style={styles.button}
        color={theme.colors.secondary}
        icon="account-question"
        loading={loading}
        mode="contained"
        onPress={() => handlePressionButton()}
      >
        Entrar
      </Button>
    </View >
  );
}