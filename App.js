import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native-paper';


import Container from './src/components/Container';

export default function App() {

  const [gas, setGas] = useState('');
  const [eta, setEta] = useState('');
  const [res, setRes] = useState('');


  const handleCalculo = () => {
    if (!gas || gas <= 0 || !eta || eta <= 0) {
      Alert.alert('Campos obrigatórios');
    } else {
      
      let pct = Math.round((eta / gas) * 100);
      if (pct < 70) {
        setRes(pct + '% Recomendado uso do etanol');
      } else {
        setRes(pct + '% Recomendado uso da gasolina');
      }
    }
  };

  return (
    <Container>


      <View style={styles.inputContainer}>
        <View style={styles.greenBar}></View>
        <TextInput
          style={styles.input}
          placeholder="Gasolina"
          placeholderTextColor="white"
          keyboardType='decimal-pad'
          value={gas}
          onChangeText={(text) => setGas(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.greenBar}></View>
        <TextInput
          style={styles.input}
          placeholder="Etanol"
          placeholderTextColor="white"
          keyboardType='decimal-pad'
          value={eta}
          onChangeText={(text) => setEta(text)}
        />
      </View>

      <Button
        mode="contained"
        onPress={() => handleCalculo()}
        theme={{ colors: { primary: '#1cee52' } }}
      >
        Calcular
      </Button>

      <Text style={styles.text}> {res} </Text> 


    </Container>


  );
};

const styles = StyleSheet.create({

  text:{
    color: 'white'
  },


  inputContainer: {
    flexDirection: 'row', // Para alinhar a barra à esquerda
    alignItems: 'center', // Centralizar verticalmente
    marginBottom: 40, // Adicionar margem inferior
  },

  input: {
    fontSize: 80,
    flex: 1,
    height: 50,
    color: 'white',
    paddingLeft: 5
  },

  greenBar: {
    width: 1,
    height: 80, // Mesma altura do input
    backgroundColor: '#1cee52', // Cor verde neon
  },


});
