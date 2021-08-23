import React, { useState } from 'react';
import { Button, Text } from 'react-native-paper';
import {
  View
} from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export function Teste() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  function handleBackButton() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.goBack();
    }, 2000);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headingText}>
          É hora de amar a Sarah
        </Text >
      </View>
      <View style={styles.buttonsDiv}>
        <Button
          icon="arrow-left"
          mode="contained"
          loading={loading}
          onPress={() => handleBackButton()}
        >
          Voltar
        </Button>
        <Button
          icon="arrow-right"
          mode="contained"
          loading={loading}
          onPress={() => handleBackButton()}
        >
          Eita
        </Button>
      </View>

    </View>

  );
}