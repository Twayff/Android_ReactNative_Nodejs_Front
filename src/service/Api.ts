import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Lembre-se de instalar: npx expo install @react-native-async-storage/async-storage

// Utilize variáveis de ambiente para a URL base.
// Exemplo com 'react-native-dotenv' ou 'expo-constants' (se estiver usando Expo)
// Para 'react-native-dotenv': crie um arquivo .env na raiz do projeto: API_URL=http://192.168.1.XX:3000
// E importe como: import { API_URL } from '@env';
// Ou se for um backend local, substitua pelo IP da sua máquina ou 'localhost'
const API_BASE_URL = 'http://192.168.1.100:5000'; // Ex: http://192.168.1.100:3000

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10 segundos de timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adicionar o token de autenticação em requisições
api.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem('userToken'); // Chave que você usará para guardar o token
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Erro ao buscar token no AsyncStorage:', error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para lidar com respostas de erro (ex: 401 Unauthorized)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Exemplo: se o token expirou (401) e ainda não tentamos reautenticar
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      console.log('Token expirado ou inválido. Tentar reautenticar ou redirecionar para login...');
      // Aqui você pode:
      // 1. Tentar renovar o token (refresh token flow)
      // 2. Limpar o token antigo do AsyncStorage
      // 3. Redirecionar o usuário para a tela de Login (requer acesso ao sistema de navegação)
      //    Ex: NavigationService.navigate('Login'); (se você tiver um serviço de navegação global)
    }
    return Promise.reject(error);
  }
);

export default api;