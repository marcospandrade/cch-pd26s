import React, { useState } from 'react';
import { Button, Text } from 'react-native-paper';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import {
  View
} from 'react-native';
import { styles } from './styles';

export function Home() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  function handlePressionButton() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Teste');
    }, 2000);

  }
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Agora é hora de? (Clique no botão para descobrir)</Text>
      </View>

      <Button icon="account-question" loading={loading} mode="contained" onPress={() => handlePressionButton()}>
        Press me
      </Button>
    </View>
  );
}