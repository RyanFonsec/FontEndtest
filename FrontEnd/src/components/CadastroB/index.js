import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';

export default function CadastroB() {
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [endereco, setEndereco] = useState('');
  const [fundacao, setFundacao] = useState('');
  const [regimeTributacao, setRegimeTributacao] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');
  const [pais, setPais] = useState('');
  const [estado, setEstado] = useState('');
  const [complemento, setComplemento] = useState('');
  const [telefoneComercial, setTelefoneComercial] = useState('');
  const [email, setEmail] = useState('');

  const handleCadastro = () => {
    // teste de confirmação
    console.log('Dados do formulário:', {
      nomeEmpresa,
      cnpj,
      endereco,
      fundacao,
      regimeTributacao,
      cidade,
      cep,
      pais,
      estado,
      complemento,
      telefoneComercial,
      email
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Empresa</Text>
      <View style={styles.form}>
      <Text style={styles.label}>Nome da empresa:</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome Da Empresa"
          value={nomeEmpresa}
          onChangeText={setNomeEmpresa}
        />
        <Text style={styles.label}>CNPJ:</Text>
        <TextInput
          style={styles.input}
          placeholder="CNPJ"
          value={cnpj}
          onChangeText={setCnpj}
        />
        <Text style={styles.label}>Endereço:</Text>
        <TextInput
          style={styles.input}
          placeholder="Endereço"
          value={endereco}
          onChangeText={setEndereco}
        />
        <Text style={styles.label}>Fundação:</Text>
        <TextInput
          style={styles.input}
          placeholder="Fundação"
          value={fundacao}
          onChangeText={setFundacao}
        />
        <Text style={styles.label}>Regime de tributaçâo:</Text>
        <TextInput
          style={styles.input}
          placeholder="Regime de Tributação"
          value={regimeTributacao}
          onChangeText={setRegimeTributacao}
        />
        <Text style={styles.label}>Cidade:</Text>
        <TextInput
          style={styles.input}
          placeholder="Cidade"
          value={cidade}
          onChangeText={setCidade}
        />
        <Text style={styles.label}>CEP:</Text>
        <TextInput
          style={styles.input}
          placeholder="CEP"
          value={cep}
          onChangeText={setCep}
        />
        <Text style={styles.label}>País:</Text>
        <TextInput
          style={styles.input}
          placeholder="País"
          value={pais}
          onChangeText={setPais}
        />
        <Text style={styles.label}>Estado:</Text>
        <TextInput
          style={styles.input}
          placeholder="Estado"
          value={estado}
          onChangeText={setEstado}
        />
        <Text style={styles.label}>Complemento</Text>
        <TextInput
          style={styles.input}
          placeholder="Complemento"
          value={complemento}
          onChangeText={setComplemento}
        />
        <Text style={styles.label}>Telefone comercial::</Text>
        <TextInput
          style={styles.input}
          placeholder="Telefone Comercial"
          value={telefoneComercial}
          onChangeText={setTelefoneComercial}
        />
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Button title="Cadastrar" onPress={handleCadastro} />
      </View>
    </View>
  );
}

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
});
