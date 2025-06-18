import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../navigation/AppNavigator';

type DetalhesRouteProp = RouteProp<RootStackParamList, 'Detalhes'>;

export default function DetalhesScreen() {
  const route = useRoute<DetalhesRouteProp>();
  const { livro } = route.params;

  return (
    <View style={styles.container}>
      {livro.capa ? (
        <Image source={{ uri: livro.capa }} style={styles.capa} />
      ) : (
        <View style={styles.semImagem}>
          <Text style={styles.semImagemTexto}>Imagem não disponível</Text>
        </View>
      )}

      <Text style={styles.titulo}>{livro.titulo}</Text>
      {livro.autor && <Text style={styles.autor}>Autor: {livro.autor}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF9F5',
    padding: 20,
    alignItems: 'center',
  },
  capa: {
    width: 180,
    height: 260,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
  },
  semImagem: {
    width: 180,
    height: 260,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  semImagemTexto: {
    color: '#666',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#5A2D82',
    textAlign: 'center',
    marginBottom: 10,
  },
  autor: {
    fontSize: 16,
    color: '#444',
  },
});