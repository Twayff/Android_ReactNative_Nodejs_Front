import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { CartProvider } from './src/contexts/CartContext';  // Importa o provedor do contexto do carrinho

export default function App() {
  return (
    <CartProvider>  {/* Envolve o app com o provedor do carrinho */}
      <NavigationContainer>
        <StatusBar style="auto" />
        <AppNavigator />
      </NavigationContainer>
    </CartProvider>
  );
}
