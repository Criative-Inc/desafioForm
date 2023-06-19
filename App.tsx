import React, { useState } from 'react'; // Import do useState para criar estados
import { Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'; // Import de componentes do React Native
import { useForm, Controller } from 'react-hook-form'; // Import de componentes da biblioteca React Hook Form
import { yupResolver } from '@hookform/resolvers/yup' // Import do yupResolvers
import * as yup from 'yup' // Import do yup para fazer as validações do formulário
import Checkbox from 'expo-checkbox'; // Import da checkbox
// Imports necessários para fazer o envio do pdf
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { differenceInYears, min, parse } from 'date-fns'; // Import para cálculo de idade
import styles from './src/style/appStyle'; // Import do style do App


const schema = yup.object({
  nome: yup.string().required('- Informe seu nome'),
  email: yup.string().email('- E-mail inválido').required('- Informe seu email'),
  endereco: yup.string().required('- Informe seu endereço'),
  dataNascimento: yup.string().required('- Informe sua data'),
  telefone: yup.string().min(11, '- Número inválido').required('- Informe seu telefone'),
}) // Criando schema para validação com yup

export default function App() {
  const { control, handleSubmit, formState: { errors }, getValues } = useForm({
    resolver: yupResolver(schema),
  }) // Desconstruindo o form state, e aplicando o yupResolver

  function handleSignIn(data) {
    console.log(data);
  } // Função chamada quando o usuário aperta o botão, armazenando os valores das inputs no parâmetro 'data'

  const [checado, setChecado] = useState(false); // Estado para validação da Checkbox

  // Obtendo os valores da inputs
  const nome = getValues().nome
  const email = getValues().email;
  const endereco = getValues().endereco;
  const telefone = getValues().telefone;
  const dataNascimento = getValues().dataNascimento; // Transformando a data de nascimento em idade
  const dataAtual = new Date();
  const dataNascimentoObj = parse(dataNascimento, 'dd/MM/yyyy', new Date());
  const idade = differenceInYears(dataAtual, dataNascimentoObj);
  console.log(idade) // Obs: Se o usuário não digitar corretamente o formato 'dd/MM/yyyy', vai retornar no log e no PDF um NaN


  const htmlPdf = `
    <html>
      <body>
        <h1>Perfil</h1>
        <p>Eu me chamo ${nome}</p>
        <p>Tenho ${idade} anos</p>
        <p>Moro no seguinte endereço: ${endereco}</p>
        <h2>Meus contatos:</h2>
        <p>E-mail: ${email}</p>
        <p>Telefone: ${telefone}</p>
      </body>
    </html>
  `; // Criando html do pdf


  let generatePdf = async () => {
    const file = await printToFileAsync({
      html: htmlPdf,
      base64: false
    });

    await shareAsync(file.uri);
  };  // Função para gerar o pdf

  return (
    <View style={{ flex: 1 }}>

      <View style={styles.header}>
        <Image style={styles.headerImage}
          source={require('./src/assets/seta-direita.png')}
        />
        <Text style={styles.headerContent}>Perfil</Text>
      </View>

      <ScrollView>
        <View style={styles.container}>
          <View style={styles.containerForm}>
            <Text style={styles.formTitle}>Dados do participante</Text>
            <Image style={styles.formLine}
              source={require('./src/assets/linha.png')}
            />

            <View style={styles.inputsContainer}>
              <View style={styles.boxError}>
                <Text style={styles.inputTitle}>Nome</Text>
                {errors.nome && <Text style={styles.erro}>{errors.nome?.message}</Text>}
              </View>
              <Controller
                control={control}
                name="nome"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputs}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="Digite seu nome"
                  />
                )}
              />

              <View style={styles.boxError}>
                <Text style={styles.inputTitle}>E-mail</Text>
                {errors.email && <Text style={styles.erro}>{errors.email?.message}</Text>}
              </View>
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputs}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="exemplo@exemplo.com"
                  />
                )}
              />

              <View style={styles.boxError}>
                <Text style={styles.inputTitle}>Endereço</Text>
                {errors.endereco && <Text style={styles.erro}>{errors.endereco?.message}</Text>}
              </View>
              <Controller
                control={control}
                name="endereco"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputs}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="Rua Trinta e Três, 245 - Bairro"
                  />
                )}
              />

              <View style={styles.boxError}>
                <Text style={styles.inputTitle}>Data de nascimento</Text>
                {errors.dataNascimento && <Text style={styles.erro}>{errors.dataNascimento?.message}</Text>}
              </View>
              <Controller
                control={control}
                name="dataNascimento"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputs}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="dd/mm/aaaa"
                  />
                )}
              />

              <View style={styles.boxError}>
                <Text style={styles.inputTitle}>Telefone</Text>
                {errors.telefone && <Text style={styles.erro}>{errors.telefone?.message}</Text>}
              </View>
              <Controller
                control={control}
                name="telefone"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.inputs}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    keyboardType='numeric'
                    placeholder="(99) 99999-9999"
                  />
                )}
              />
            </View>

            <View style={styles.boxCheckbox}>
              <Checkbox style={styles.checkbox} color="#6B5BD4" value={checado} onValueChange={setChecado} />
              <Text style={styles.checkBoxtext}>Aceito os termos</Text>
            </View>
            <View style={styles.boxErro2}>
              {!checado && (
                <Text style={styles.erro2}>Aceite os termos</Text>
              )}
            </View>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.button} onPress={handleSubmit((data) => {
              if (!checado) {
                console.log('O checkbox não foi marcado');
                return;
              }
              handleSignIn(data);
              generatePdf();
            })}>
              <Text style={styles.buttonContent}>Gerar PDF</Text>
            </TouchableOpacity>

            <View style={styles.alert}>
              <Image style={styles.footerImage}
                source={require('./src/assets/atencao.png')}
              />
              <View style={styles.alertText}>
                <Text style={styles.alertTitle}>Importante!</Text>
                <Text style={styles.alertSubTitle}>Preencha todos os dados</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}