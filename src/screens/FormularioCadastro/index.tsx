import React, { useState } from 'react';
import {
  View
} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, TextInput, HelperText } from 'react-native-paper';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

export function FormularioCadastro() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [error, setError] = useState('');

  // function onChangeText(text) {
  //   setText(text);
  // }

  return (
    <View style={styles.container}>
      <Card style={styles.cardFormulario}>
        <Card.Title
          title="Cadastre-se no Banco Pi"
          // style={styles.cardTitle}
          left={(props) => <Avatar.Icon {...props} icon="bank" />}
        />
        <Card.Content>
          <Title>Venha ser um PiLover</Title>
          <Paragraph>Preencha esse formulário para criarmos sua conta!</Paragraph>

          <View style={styles.inputsForm}>
            <TextInput
              label="Nome"
              mode="outlined"
              value={nome}
              onChangeText={nome => setNome(nome)}
            />
            <TextInput
              label="Idade"
              mode="outlined"
              value={idade}
              onChangeText={idade => setIdade(idade)}
            />
          </View>
        </Card.Content>
        <Card.Actions
          style={{justifyContent: 'space-between'}}
        >
          <Button mode="contained" color={theme.colors.orange}>Cancelar</Button>
          <Button mode="contained" color={theme.colors.secondary}>Cadastrar</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}