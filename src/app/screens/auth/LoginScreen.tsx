import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useAuthStore } from '@store/auth.store';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'operator' | 'supervisor'>('operator');
  const login = useAuthStore(state => state.login);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Field Ops Login</Text>

      <TextInput
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
      />

      <Button
        title={`Role: ${role}`}
        onPress={() =>
          setRole(role === 'operator' ? 'supervisor' : 'operator')
        }
      />

      <View style={{ height: 12 }} />

      <Button
        title="Login"
        onPress={() => login(email || 'user@demo.com', role)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 12,
    borderRadius: 6
  }
});
