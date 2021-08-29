import React, { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';
import Slider from '@react-native-community/slider';
import { ScrollView } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';
import { Avatar, Button, Card, Title, Paragraph, TextInput, Switch, Text, ToggleButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export function FormularioCadastro() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [estudante, setEstudante] = useState(false);
  const [limiteDesejado, setLimiteDesejado] = useState("0,00");
  let limiteControl = 0;

  const onToggleSwitch = () => setEstudante(!estudante);


  function transformMoney(limite: number) {
    const valorFormatado = limite.toFixed(2);
    setLimiteDesejado(valorFormatado.replace(".", ",").toString());
  }

  function handleAbrirConta() {

  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? "padding" : 'height'}
      style={styles.container}
    >
      <ScrollView>
        <Card style={styles.cardFormulario}>
          <Avatar.Icon style={styles.avatar} icon="bank" />
          <Card.Title
            style={styles.cardTitle}
            title="Cadastre-se no Banco Pi"
          />
          <Card.Content>
            <View>
              <Title>Venha ser um PiLover</Title>
              <Paragraph>Preencha esse formulário para criarmos sua conta!</Paragraph>

              <View style={styles.inputsForm}>
                <TextInput
                  style={styles.textInput}
                  label="Nome"
                  mode="outlined"
                  value={nome}
                  onChangeText={nome => setNome(nome)}
                />
                <TextInput
                  style={styles.textInput}
                  label="Idade"
                  mode="outlined"
                  value={idade}
                  keyboardType="numeric"
                  maxLength={3}
                  onChangeText={idade => setIdade(idade)}
                />
              </View>
              <View>
                <Picker
                  style={styles.picker}
                  selectedValue={sexo}
                  onValueChange={(itemValue, itemIndex) =>
                    setSexo(itemValue)
                  }>
                  <Picker.Item label="Selecione o sexo..." value="" />
                  <Picker.Item label="Masculino" value="masculino" />
                  <Picker.Item label="Feminino" value="feminino" />
                  <Picker.Item label="Outro" value="outro" />
                </Picker>
              </View>

              <View style={styles.switchToggle}>
                <Text>Estudante</Text>
                <Switch
                  value={estudante}
                  onValueChange={onToggleSwitch} />
              </View>

              <View>
                <Text>Saldo: R$ {limiteDesejado} </Text>
                <Slider
                  style={{ width: '105%', height: 60, marginLeft: -5 }}
                  minimumValue={0}
                  step={0.5}
                  value={limiteControl}
                  maximumValue={200}
                  onSlidingComplete={(value) => {
                    setTimeout(() => {
                      transformMoney(value)
                    }, 200)
                  }}
                />
              </View>
            </View>
            <Button
              icon="check"
              mode="contained"
              color={theme.colors.secondary}
              style={styles.actionButton}
              loading={loading}
              onPress={() => {
                setLoading(true)
                setTimeout(() => {
                  setLoading(false);
                  Alert.alert('Cadastrado com sucesso!')
                }, 2000)
              }}
            >
              Abrir conta
            </Button>
            <Button
              icon="arrow-left"
              mode="contained"
              color={theme.colors.orange}
              style={styles.actionButton}
              onPress={() => {
                navigation.goBack()
              }}
            >
              Cancelar
            </Button>
          </Card.Content>
        </Card>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}