import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Alert, Button } from 'react-native';

export default function App() {

  const [text, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <Text>Seu nome é: {text}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder='Escreva seu nome aqui'
        value={text}
      />
      <StatusBar style="auto" />
      <Button
        title="Click me"
        onPress={() => Alert.alert('Botão Clicado')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
  }
});
