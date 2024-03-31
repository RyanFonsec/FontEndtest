import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CadastroB from '../CadastroB';

export default function CadastroA({navigation}) {
  const [nome, setNome] = useState('');
  const [sexo, setSexo] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [repetirSenha, setRepetirSenha] = useState('');

  const handleCadastro = () => {
    // teste de confirmação
    navigation.navigate(CadastroB)
    };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Cadastro</Text>
      <Text style={styles.subtitle}>Dados do representante:</Text>
      <View style={styles.form}>
      <Text style={styles.label}>Nome completo:</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          value={nome}
          onChangeText={setNome}
        />
        <Text style={styles.label}>Sexo:</Text>
        <Picker
          style={styles.input}
          selectedValue={sexo}
          onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}
        >
          <Picker.Item label="Escolha:" value="" />
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
          <Picker.Item label="Outro" value="Outro" />
          <Picker.Item label="Prefiro não dizer" value="Prefiro não dizer" />
        </Picker>
        <Text style={styles.label}>Data de nascimento:</Text>
        <TextInput
          style={styles.input}
          placeholder="Data de nascimento"
          value={dataNascimento}
          onChangeText={setDataNascimento}
        />
        <Text style={styles.label}>CPF:</Text>
        <TextInput
          style={styles.input}
          placeholder="CPF"
          value={cpf}
          onChangeText={setCpf}
        />
        <Text style={styles.label}>Telefone:</Text>
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          value={telefone}
          onChangeText={setTelefone}
        />
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        <Text style={styles.label}>Repetir senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Repetir senha"
          secureTextEntry
          value={repetirSenha}
          onChangeText={setRepetirSenha}
        />
        <Button title="Cadastrar" onPress={handleCadastro} />
      </View>
    </View>
  );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  form: {
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
});
