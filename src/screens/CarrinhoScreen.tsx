import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useCart } from '../contexts/CartContext';

export default function CarrinhoScreen() {
  const { cart } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Itens no Carrinho:</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nome}>{item.titulo}</Text>
            {item.autor && <Text style={styles.autor}>Autor: {item.autor}</Text>}
          </View>
        )}
        ListEmptyComponent={<Text style={styles.vazio}>Carrinho vazio.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  item: { marginBottom: 10, borderBottomWidth: 1, borderColor: '#ddd', paddingBottom: 8 },
  nome: { fontSize: 16 },
  autor: { fontSize: 14, color: '#555' },
  vazio: { textAlign: 'center', marginTop: 50, fontSize: 16, color: '#888' },
});