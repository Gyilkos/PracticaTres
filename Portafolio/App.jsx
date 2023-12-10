/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Background } from '../components/Background';
import React, { useState, useContext } from 'react';
import { useForm } from './src/hooks/useForm';


const App = () => {

  const {name, lastName, email, city, country, summary, frameworks, hobbies, onChange} = useForm({
    name: '',
    lastName: '',
    email: '',
    city: '',
    country: '',
    summary: '',
    frameworks: [
      {nameFrameworks:'', levelFrameworks:'', yearFrameworks:''}
    ],
    hobbies: [
      {nameHobbies:'', descriptionHobbies:''}
    ]
  });
  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
};
const handleSave = async () => {
  // Aquí va la lógica para guardar los datos en la API
  // Por ejemplo:
  const response = await fetch('https://tu-api.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      lastName,
      email,
      city,
      country,
      summary,
      frameworks,
      hobbies
    })
  });

  if (!response.ok) {
    // Manejar error
  }

  const data = await response.json();
  console.log(data);
};

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Portafolio</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={{...styles.input, borderColor: '#2c64c6', borderWidth: 1}}
          placeholder='Nombre'
          placeholderTextColor="white"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(value) => onChange(value, 'name')}
          value={name}
        />
        <Text style={{...styles.textStyle, color: 'white', borderColor: '#2c64c6', borderWidth: 1}}>{'Nombre'}</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={{...styles.input, borderColor: '#2c64c6', borderWidth: 1}}
          placeholder='Apellido'
          placeholderTextColor="white"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(value) => onChange(value, 'lastName')}
          value={lastName}
        />
        <Text style={{...styles.textStyle, color: 'white', borderColor: '#2c64c6', borderWidth: 1}}>{'Apellido'}</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={{...styles.input, borderColor: '#2c64c6', borderWidth: 1}}
          placeholder='Email'
          placeholderTextColor="white"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(value) => onChange(value, 'email')}
          value={email}
        />
        <Text style={{...styles.textStyle, color: 'white', borderColor: '#2c64c6', borderWidth: 1}}>{'Email'}</Text>
      </View>    

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={{...styles.input, borderColor: '#2c64c6', borderWidth: 1}}
          placeholder='Ciudad'
          placeholderTextColor="white"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(value) => onChange(value, 'city')}
          value={city}
        />
        <Text style={{...styles.textStyle, color: 'white', borderColor: '#2c64c6', borderWidth: 1}}>{'Ciudad'}</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={{...styles.input, borderColor: '#2c64c6', borderWidth: 1}}
          placeholder='País'
          placeholderTextColor="white"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(value) => onChange(value, 'country')}
          value={country}
        />
        <Text style={{...styles.textStyle, color: 'white', borderColor: '#2c64c6', borderWidth: 1}}>{'Pais'}</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={{...styles.input, borderColor: '#2c64c6', borderWidth: 1}}
          placeholder='Resumen'
          placeholderTextColor="white"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(value) => onChange(value, 'summary')}
          value={summary}
        />
        <Text style={{...styles.textStyle, color: 'white', borderColor: '#2c64c6', borderWidth: 1}}>{'Resumen'}</Text>
      </View>

      <Button title="ACTUALIZAR" onPress={handleSave} />
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', // fondo oscuro
  },
  text: {
    color: 'white', // texto blanco
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    height: 600,
    marginBottom: 50
  },
  newUserContainer: {
      alignItems: 'flex-end',
      color:'white',
      marginTop: 10
  },
  title: {
      
      color: 'white',
      fontSize: 52,
      fontWeight: 'bold',
      marginTop: 20,
      textAlign: 'center'
  },
  label: {
      marginTop: 25,
      color: 'white',
      fontWeight: 'bold',
      paddingBottom: 10
  },
  label2: {
      marginTop: 25,
      color: 'white',
      marginHorizontal: 5,
      fontSize: 20,
      paddingBottom: 10,
      marginTop: 10
  },
  label3: {
      
      textAlign: 'center',
      color: 'white',
      marginHorizontal: 5,
      fontSize: 20,
      paddingBottom: 10,
      marginTop: 30
  },

  input: {
      backgroundColor: 'black',
      color:'white',
      borderRadius: 10,
      paddingHorizontal: 10,
      marginTop: 5
  }, 
  buttonContainer: {
      alignItems: 'center',
      marginTop: 25

  },
  button: {
      borderWidth: 4,
      borderColor: '#2c64c6',
      backgroundColor: '#2c64c6',
      paddingHorizontal: 112,
      paddingVertical: 6,
      marginVertical: 10,
      borderRadius: 10
  },
  buttonText: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'white'
  },
  linkText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold'
  },
  inputField: {
      color: 'white',
      fontSize: 20
  },
  registerContainer: {
      alignItems: 'flex-end',
      marginTop: 10
  },
  buttonRegister: {
      borderWidth: 4,
      borderColor: '#2c64c6',
      backgroundColor: '#2c64c6',
      paddingHorizontal: 130,
      paddingVertical: 1,
      marginVertical: 10,
      borderRadius: 10
  },
  buttonRegisterText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white'
  },
  linkRegisterText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold'
  },
  inputFieldRegister: {
      color: 'white',
      fontSize: 20
  },
  loginContainer: {
      alignItems: 'flex-end'
  },
});
export default App;
