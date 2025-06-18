import React, { JSX, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert, // Usado para mensagens de confirmação (em vez de console.log)
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator'; // Caminho para o seu navegador

type ProfileScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Perfil'>;
};

export default function ProfileScreen({ navigation }: ProfileScreenProps): JSX.Element {
  // Estados para as informações do usuário (mock de dados)
  const [profileImageUri, setProfileImageUri] = useState<string>('https://placehold.co/100x100/A0C49D/FFFFFF?text=USER');
  const [fullName, setFullName] = useState<string>('Nome Completo do Usuário');
  const [email, setEmail] = useState<string>('usuario@example.com');
  const [currentPassword, setCurrentPassword] = useState<string>('******'); // Senha mascarada
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');
  const [isEditingPassword, setIsEditingPassword] = useState<boolean>(false);

  // Função para simular a troca de foto (apenas placeholder por enquanto)
  const handleChangePhoto = () => {
    Alert.alert('Trocar Foto', 'Funcionalidade para trocar a foto de perfil será implementada aqui.');
    // Aqui você integraria uma biblioteca como 'expo-image-picker'
  };

  // Função para simular a troca de senha
  const handleChangePassword = () => {
    if (!isEditingPassword) {
      setIsEditingPassword(true);
      return;
    }

    if (newPassword.length < 6) {
      Alert.alert('Erro', 'A nova senha deve ter pelo menos 6 caracteres.');
      return;
    }

    if (newPassword !== confirmNewPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    // Aqui você enviaria a nova senha para o seu backend
    Alert.alert('Sucesso', 'Senha alterada com sucesso!');
    setNewPassword('');
    setConfirmNewPassword('');
    setIsEditingPassword(false);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <Text style={styles.title}>Meu Perfil</Text>

          {/* Foto de Perfil */}
          <TouchableOpacity style={styles.imageContainer} onPress={handleChangePhoto}>
            <Image
              source={{ uri: profileImageUri }}
              style={styles.profileImage}
              onError={() => setProfileImageUri('https://placehold.co/100x100/A0C49D/FFFFFF?text=USER')} // Fallback image
            />
            <View style={styles.cameraIcon}>
              <Ionicons name="camera-outline" size={24} color="#FFF" />
            </View>
          </TouchableOpacity>

          {/* Nome Completo */}
          <View style={styles.infoBlock}>
            <Text style={styles.label}>Nome Completo:</Text>
            <TextInput
              style={styles.infoText}
              value={fullName}
              onChangeText={setFullName}
              editable={true} // Pode ser editável ou apenas texto
            />
          </View>

          {/* E-mail */}
          <View style={styles.infoBlock}>
            <Text style={styles.label}>E-mail:</Text>
            <TextInput
              style={styles.infoText}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              editable={true} // Pode ser editável ou apenas texto
            />
          </View>

          {/* Senha */}
          <View style={styles.infoBlock}>
            <Text style={styles.label}>Senha:</Text>
            <TextInput
              style={styles.infoText}
              value={currentPassword} // Exibir a senha mascarada
              secureTextEntry={true}
              editable={false} // Não editável diretamente
            />
            <TouchableOpacity style={styles.changeButton} onPress={handleChangePassword}>
              <Text style={styles.changeButtonText}>
                {isEditingPassword ? 'Salvar Senha' : 'Trocar Senha'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Campos para Nova Senha (condicional) */}
          {isEditingPassword && (
            <View style={styles.passwordChangeContainer}>
              <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={20} color="#555" style={styles.icon} />
                <TextInput
                  placeholder="Nova Senha"
                  secureTextEntry
                  style={styles.input}
                  value={newPassword}
                  onChangeText={setNewPassword}
                />
              </View>
              <View style={styles.inputContainer}>
                <Ionicons name="key-outline" size={20} color="#555" style={styles.icon} />
                <TextInput
                  placeholder="Confirme a Nova Senha"
                  secureTextEntry
                  style={styles.input}
                  value={confirmNewPassword}
                  onChangeText={setConfirmNewPassword}
                />
              </View>
              <TouchableOpacity
                style={[styles.changeButton, {backgroundColor: '#4CAF50'}]}
                onPress={handleChangePassword}
              >
                <Text style={styles.changeButtonText}>Confirmar Troca</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.changeButton, {backgroundColor: '#D32F2F', marginTop: 8}]}
                onPress={() => setIsEditingPassword(false)}
              >
                <Text style={styles.changeButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Botão temporário para voltar ao login - Remover em produção */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Ionicons name="arrow-back-outline" size={20} color="#5A2D82" />
            <Text style={styles.backButtonText}>Voltar ao Login</Text>
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
    paddingVertical: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#FEF9F5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 30,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#5A2D82',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#5A2D82',
    borderRadius: 20,
    padding: 6,
    borderWidth: 2,
    borderColor: '#FEF9F5',
  },
  infoBlock: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  label: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    paddingVertical: 4, // Ajuste para TextInput
  },
  changeButton: {
    backgroundColor: '#5A2D82',
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  changeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  passwordChangeContainer: {
    width: '100%',
    marginTop: 20,
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#F9F9F9', // Cor de fundo mais clara para inputs dentro do container
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    width: '100%',
    marginBottom: 12,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  backButton: {
    flexDirection: 'row',
    borderColor: '#5A2D82',
    borderWidth: 1,
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    gap: 8,
    marginTop: 30,
    width: '100%',
    justifyContent: 'center',
  },
  backButtonText: {
    color: '#5A2D82',
    fontSize: 16,
  },
});