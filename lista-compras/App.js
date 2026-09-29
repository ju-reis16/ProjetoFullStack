import React from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Minha Lista de Compras
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite um produto..."
      />

      <Pressable style={styles.botao}>
        <Text style={styles.textoBotao}>
          ADICIONAR
        </Text>
      </Pressable>

      <View style={styles.lista}>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
    paddingTop: 60
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 10
  },

  botao: {
    backgroundColor: '#333',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center'
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold'
  },

  lista: {
    marginTop: 25
  }
});