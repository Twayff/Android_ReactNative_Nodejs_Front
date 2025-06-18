import React, { JSX } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

export default function LoginScreen({ navigation }: LoginScreenProps): JSX.Element {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>
        <Image
          source={require('../../assets/testeLeiaComigo.jpg')}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title}>Bem-vindo(a) ao Leia Comigo</Text>
        <Text style={styles.subtitle}>compartilhe, leia, transforme!</Text>

        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#555" style={styles.icon} />
          <TextInput
            placeholder="Digite seu email"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#555" style={styles.icon} />
          <TextInput placeholder="Digite sua senha" secureTextEntry style={styles.input} />
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Ionicons name="lock-closed" size={18} color="#fff" />
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Ionicons name="person-outline" size={18} color="#5A2D82" />
          <Text style={styles.registerButtonText}>Cadastre-se</Text>
        </TouchableOpacity>

        {/* Botão para testar a navegação ao Perfil */}
        <TouchableOpacity
          style={[styles.registerButton, { marginTop: 20, backgroundColor: '#5A2D82' }]}
          onPress={() => navigation.navigate('Perfil')}
        >
          <Ionicons name="person-circle-outline" size={18} color="#fff" />
          <Text style={[styles.registerButtonText, { color: '#fff' }]}>Ir para Perfil</Text>
        </TouchableOpacity>

        {/* Botão para testar a navegação à Home */}
        <TouchableOpacity
          style={[styles.registerButton, { marginTop: 12, backgroundColor: '#28a745' }]}
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons name="home-outline" size={18} color="#fff" />
          <Text style={[styles.registerButtonText, { color: '#fff' }]}>Testar Home</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF9F5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 260,
    height: 160,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  loginButton: {
    flexDirection: 'row',
    backgroundColor: '#5A2D82',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    alignItems: 'center',
    gap: 8,
    marginTop: 10,
    width: '100%',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  registerButton: {
    flexDirection: 'row',
    borderColor: '#5A2D82',
    borderWidth: 1,
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    gap: 8,
    marginTop: 12,
    width: '100%',
    justifyContent: 'center',
  },
  registerButtonText: {
    color: '#5A2D82',
    fontSize: 16,
  },
});