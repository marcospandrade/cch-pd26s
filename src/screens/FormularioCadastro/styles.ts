import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    justifyContent: 'center',
    borderRadius: 20
  },
  avatar: {
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  cardFormulario: {
    textAlign: 'center',
    padding: 20,
    margin: 20
  },
  cardTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 20,
    marginHorizontal: 25
  },
  inputsForm: {
    marginTop: 20,
  },
  textInput: {
    marginBottom: 10,
  },
  picker: {
    marginTop: 15,
    marginBottom: 20,
    marginLeft: -8,
    height: 50
  },
  switchToggle: {
    flexDirection: 'row',
    marginBottom: 30
  },
  actionButton: {
    width: '100%',
    marginVertical: 10,
    borderRadius: 20
  }
});