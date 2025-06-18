import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import CadastroScreen from '../screens/CadastroScreen';
import ProfileScreen from '../screens/PerfilScreen';
import HomeScreen from '../screens/HomeScreen';
import DetalhesScreen from '../screens/DetalhesScreen';
import CarrinhoScreen from '../screens/CarrinhoScreen';

// Definição do tipo Livro
export type Livro = {
  id: string;
  titulo: string;
  capa?: string;
  autor?: string;
  descricao?: string;
};

export type RootStackParamList = {
  Login: undefined;
  Cadastro: undefined;
  Perfil: undefined;
  Home: undefined;
  Detalhes: { livro: Livro }; // Parâmetro: o livro selecionado
  Carrinho: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={CadastroScreen}
        options={{ title: 'Criar Conta' }}
      />
      <Stack.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{ title: 'Meu Perfil' }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Biblioteca' }}
      />
      <Stack.Screen
        name="Detalhes"
        component={DetalhesScreen}
        options={{ title: 'Detalhes do Livro' }}
      />
      <Stack.Screen
        name="Carrinho"
        component={CarrinhoScreen}
        options={{ title: 'Meu Carrinho' }}
      />
    </Stack.Navigator>
  );
}