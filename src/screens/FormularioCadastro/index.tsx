import React, { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';
import Slider from '@react-native-community/slider';
import AwesomeAlert from 'react-native-awesome-alerts';
import { ScrollView } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';
import { Avatar, Button, Card, Title, Paragraph, TextInput, Switch, Text, ToggleButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export type pessoaCadastro = {
  name: String,
  age: number,
  sex: String,
  isStudant: boolean,
  limit: String
}

export function FormularioCadastro() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [estudante, setEstudante] = useState(false);
  const [limiteDesejado, setLimiteDesejado] = useState("0,00");
  let limiteControl = 0;
  let message: string = "";

  const [cadastrante, setCadastrante] = useState<pessoaCadastro>({} as pessoaCadastro);
  const [sucessModal, setSucessModal] = useState(false);
  const [failModal, setFailModal] = useState(false);

  const onToggleSwitch = () => setEstudante(!estudante);


  function transformMoney(limite: number) {
    const valorFormatado = limite.toFixed(2);
    setLimiteDesejado(valorFormatado.replace(".", ",").toString());
  }

  function hideAlert(option: String) {
    if (option === "sucess") {
      setSucessModal(false);
      navigation.navigate('Dashboard');
    } else {
      setFailModal(false);
    }
  }

  function loadPessoaCadastro() {
    setLoading(true);
    if (nome === '' || idade === '' || sexo === '' || limiteDesejado === "0,00") {
      setFailModal(true);
      setLoading(false);
    } else {
      let obj: pessoaCadastro = {
        name: nome,
        age: Number(idade),
        sex: sexo,
        isStudant: estudante,
        limit: limiteDesejado
      }
      setCadastrante(obj);
      handleAbrirConta(cadastrante);
    }
  }

  function handleAbrirConta(obj: pessoaCadastro) {
    //request api
    message =
      "Dados da conta aberta" +
        "\n Nome: " + obj.name +
        "\n Idade: " + obj.age +
        "\n Sexo: " + obj.sex +
        "\n É estudante:" + obj.isStudant ? "Sim" : "Não" +
        "\n Limit: " + obj.limit

    setSucessModal(true);
    setLoading(false);
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
                <Text>Limite: R$ {limiteDesejado} </Text>
                <Slider
                  style={{ width: '105%', height: 60, marginLeft: -5 }}
                  minimumValue={0}
                  step={0.5}
                  value={limiteControl}
                  maximumValue={200}
                  onSlidingComplete={(value) => {
                    setTimeout(() => {
                      transformMoney(value)
                    }, 50)
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
                  loadPessoaCadastro();
                }, 1500)
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
            <AwesomeAlert
              show={sucessModal}
              showProgress={false}
              title="Sua conta foi aberta com sucesso!"
              message={`Dados da conta aberta:
                \n Nome: ${cadastrante.name}
                \n Idade: ${cadastrante.age}
                \n Sexo: ${cadastrante.sex}
                \n É estudante: ${cadastrante.isStudant ? "Sim" : "Não"} 
                \n Limite: ${cadastrante.limit}`}
              closeOnTouchOutside={true}
              closeOnHardwareBackPress={false}
              showCancelButton={false}
              showConfirmButton={true}
              confirmText="Show de bola"
              confirmButtonColor={theme.colors.primary}
              onConfirmPressed={() => {
                hideAlert("sucess");
              }}
            />

            <AwesomeAlert
              show={failModal}
              showProgress={false}
              title="Erro!"
              message="Não foi possível abrir sua conta! Preencha todos os campos"
              messageStyle={{ textAlign: "center" }}
              closeOnTouchOutside={true}
              closeOnHardwareBackPress={false}
              showCancelButton={false}
              showConfirmButton={true}
              confirmText="OK, voltar para preenchimento"
              confirmButtonColor={theme.colors.red}
              onConfirmPressed={() => {
                hideAlert("fail");
              }}
            />
          </Card.Content>
        </Card>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}