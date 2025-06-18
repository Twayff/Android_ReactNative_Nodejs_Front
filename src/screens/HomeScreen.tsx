import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList, Livro } from '../navigation/AppNavigator';
import { useCart } from '../contexts/CartContext'; // <-- hook personalizado seguro

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;

// Lista de livros fictícia (exemplo)
const livrosExemplo: Livro[] = [
  { id: '1', titulo: 'Dom Casmurro' },
  { id: '2', titulo: 'O Pequeno Príncipe' },
  { id: '3', titulo: '1984' },
];

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProps>();
  const { addToCart } = useCart(); // <-- usando hook seguro

  return (
    <View style={styles.container}>
      {/* Cabeçalho com título e carrinho */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Biblioteca</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Carrinho')}>
          <Ionicons name="cart-outline" size={28} color="#5A2D82" />
        </TouchableOpacity>
      </View>

      {/* Lista de livros */}
      <FlatList
        data={livrosExemplo}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.livroItem}>
            <Text style={styles.livroTitulo}>{item.titulo}</Text>

            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={[styles.button, styles.detailsButton]}
                onPress={() => navigation.navigate('Detalhes', { livro: item })}
              >
                <Ionicons name="information-circle-outline" size={18} color="#fff" />
                <Text style={styles.buttonText}>Detalhes</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.cartButton]}
                onPress={() => {
                  addToCart(item); // adiciona ao carrinho
                  navigation.navigate('Carrinho'); // navega para a tela Carrinho
                }}
              >
                <Ionicons name="cart-outline" size={18} color="#fff" />
                <Text style={styles.buttonText}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF9F5',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#5A2D82',
  },
  livroItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },
  livroTitulo: {
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  detailsButton: {
    backgroundColor: '#5A2D82',
    marginRight: 10,
  },
  cartButton: {
    backgroundColor: '#A060C9',
  },
  buttonText: {
    color: '#fff',
    marginLeft: 6,
    fontSize: 14,
  },
});
