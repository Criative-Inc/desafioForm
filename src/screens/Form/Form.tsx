import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';

import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import * as yup from 'yup';

import { 
  useFonts,
  Roboto_500Medium,
  Roboto_400Regular,
} from '@expo-google-fonts/roboto';

type FormData = {
  nome: string;
  email: string;
  endereco: string;
  dtNascimento: string;
  telefone: string;
};

// const createDataFormSchema = yup.object().shape({
//   name: yup.string().required('Nome é obrigatório').min(3, 'Nome deve ter no mínimo 3 caracteres'),
//   email: yup.string().required('Nome é obrigatório').email('Insira um email válido')
// })

export function Form() {
  // criação pra chegar a input de checkbox
  const [isChecked, setChecked] = useState(false);

  // criação das variavels das fontes
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_400Regular,
  })
  

  const [data, setData] = useState({
    nome: '',
    email: '',
    endereco: '',
    dtNascimento: '',
    telefone: ''
  })

  const handleChange = (name: string, value: string) => {
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendForm = (e: React.FormEvent) => {
    e.preventDefault()

    console.log(`Nome: ${data.nome}`)
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.h2}> Dados do participante </Text>
        <View style={styles.line}></View>

        <View>
          <Text style={styles.label}> Nome </Text>
          <TextInput
            value={data.nome}
            onChangeText={(text: string) => handleChange('nome', text)}
            style={styles.input} 
            placeholder='Digite seu nome'
            placeholderTextColor='#BFBFBF'
          /> 

          <Text style={styles.label}> E-mail </Text>
          <TextInput
            value={data.email}
            onChangeText={(text: string) => handleChange('email', text)}
            style={styles.input} 
            placeholder='exemplo@exemplo.com'
            keyboardType='email-address'
            placeholderTextColor='#BFBFBF'
          /> 

          <Text style={styles.label}> Endereço </Text>
          <TextInput
            value={data.endereco}
            onChangeText={(text: string) => handleChange('endereco', text)}
            style={styles.input} 
            placeholder='Rua Trinta e Três, 245 - Bairro'
            placeholderTextColor='#BFBFBF'
          /> 

          <Text style={styles.label}> Data de Nascimento </Text>
          <TextInput
            value={data.dtNascimento}
            onChangeText={(text: string) => handleChange('dtNascimento', text)}
            style={styles.input} 
            placeholder='dd/mm/aaaa'
            placeholderTextColor='#BFBFBF'
          /> 

          <Text style={styles.label}> Telefone </Text>
          <TextInput
            value={data.telefone}
            onChangeText={(text: string) => handleChange('telefone', text)}
            style={styles.input} 
            placeholder='(99) 99999-9999'
            keyboardType='numeric'
            placeholderTextColor='#BFBFBF'
          />
        </View>

        <View style={styles.termos}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#6B5BD4' : '#6B5BD4'}
          />

          <Text style={styles.textTermos}>Aceito os termos</Text>
        </View>
      </View>
    </>
  );
}

// export { sendForm }