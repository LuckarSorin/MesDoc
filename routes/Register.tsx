import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

function Register ({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (

    <View style={styles.container}>
      <View style={styles.containerBackground}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Nom d'utilisateur"
              value={username}
              onChangeText={text => setUsername(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Mot de passe"
              secureTextEntry={true}
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Confirmer le mot de passe"
              secureTextEntry={true}
              value={confirmPassword}
              onChangeText={text => setConfirmPassword(text)}
            />
          </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BDCBF3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 500,
    width: 6000,
    backgroundColor: 'white',
  },
  inputContainer: {
    backgroundColor: 'white',
    margin: 10,
  },
  input: {
        width: 250,
        borderWidth: 2,
        paddingLeft: 10,
        borderRadius: 15,
        borderColor: '#BDCBF3',
    },
});

export default Register;
