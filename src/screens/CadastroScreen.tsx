import React, { JSX } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

type CadastroScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Cadastro'>;
};

export default function CadastroScreen({ navigation }: CadastroScreenProps): JSX.Element {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <Text style={styles.title}>Crie sua Conta</Text>
          <Text style={styles.subtitle}>Junte-se à nossa comunidade e comece a compartilhar!</Text>

          {/* Campo de Nome */}
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={20} color="#555" style={styles.icon} />
            <TextInput placeholder="Seu nome completo" style={styles.input} autoCapitalize="words" />
          </View>

          {/* Campo de E-mail */}
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color="#555" style={styles.icon} />
            <TextInput
              placeholder="Seu email"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Campo de Confirmação de E-mail */}
          <View style={styles.inputContainer}>
            <Ionicons name="mail-unread-outline" size={20} color="#555" style={styles.icon} />
            <TextInput
              placeholder="Confirme seu email"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Campo de Senha */}
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#555" style={styles.icon} />
            <TextInput placeholder="Sua senha" secureTextEntry style={styles.input} />
          </View>

          {/* Campo de Confirmação de Senha */}
          <View style={styles.inputContainer}>
            <Ionicons name="key-outline" size={20} color="#555" style={styles.icon} />
            <TextInput placeholder="Confirme sua senha" secureTextEntry style={styles.input} />
          </View>

          {/* Campo de Salário Familiar */}
          <View style={styles.inputContainer}>
            <Ionicons name="wallet-outline" size={20} color="#555" style={styles.icon} />
            <TextInput
              placeholder="Salário familiar (ex: R$ 3000)"
              style={styles.input}
              keyboardType="numeric"
            />
          </View>

          {/* Campo de Pessoas na Casa */}
          <View style={styles.inputContainer}>
            <Ionicons name="people-outline" size={20} color="#555" style={styles.icon} />
            <TextInput
              placeholder="Quantas pessoas moram na casa?"
              style={styles.input}
              keyboardType="numeric"
            />
          </View>

          {/* Botão Criar Conta */}
          <TouchableOpacity style={styles.registerButton}>
            <Ionicons name="person-add" size={18} color="#fff" />
            <Text style={styles.registerButtonText}>Criar Conta</Text>
          </TouchableOpacity>

          {/* Link para Login */}
          <TouchableOpacity
            style={styles.loginLink}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.loginLinkText}>Já tem uma conta? <Text style={{ fontWeight: 'bold' }}>Faça login</Text></Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#FEF9F5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
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
    marginBottom: 20,
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
  registerButton: {
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
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  loginLink: {
    marginTop: 20,
    marginBottom: 20,
  },
  loginLinkText: {
    color: '#555',
    fontSize: 14,
  },
});