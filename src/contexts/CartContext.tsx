import React, { createContext, useState, ReactNode, useContext } from 'react';
import type { Livro } from '../navigation/AppNavigator';

// Define o tipo do contexto do carrinho
type CartContextType = {
  cart: Livro[];
  addToCart: (livro: Livro) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

// Cria o contexto com valor inicial indefinido para forçar uso correto
const CartContext = createContext<CartContextType | undefined>(undefined);

// Props do provider
type CartProviderProps = {
  children: ReactNode;
};

// Provedor do contexto
export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Livro[]>([]);

  const addToCart = (livro: Livro) => {
    // Evita adicionar livro duplicado
    if (!cart.some(item => item.id === livro.id)) {
      setCart(prev => [...prev, livro]);
    }
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook para usar o contexto de forma segura
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }
  return context;
}