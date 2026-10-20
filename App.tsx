import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  Switch,
  Pressable,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

interface FormState {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  age: string;
  bio: string;
  subscribe: boolean;
  agreeTerms: boolean;
}

const initialFormState: FormState = {
  fullName: '',
  email: '',
  password: '',
  phoneNumber: '',
  age: '',
  bio: '',
  subscribe: false,
  agreeTerms: false,
};

export default function App() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submittedJson, setSubmittedJson] = useState<string | null>(null);

  const handleInputChange = (field: keyof FormState, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    setSubmitting(true);
    setTimeout(() => {
      console.log('=== COLLECTED FORM DATA ===');
      console.log(formData);

      const jsonString = JSON.stringify(formData, null, 2);
      console.log('=== FORM DATA AS JSON ===');
      console.log(jsonString);

      setSubmittedJson(jsonString);
      setSubmitting(false);
    }, 400);
  };

  const handleReset = () => {
    setFormData(initialFormState);
    setSubmittedJson(null);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 15 }}>
          Simple Form Demonstration
        </Text>

        {/* 1. Default TextInput */}
        <Text>Full Name (Default Text):</Text>
        <TextInput
          style={inputStyle}
          placeholder="Enter full name"
          value={formData.fullName}
          onChangeText={(text) => handleInputChange('fullName', text)}
        />

        {/* 2. Email TextInput */}
        <Text>Email (email-address):</Text>
        <TextInput
          style={inputStyle}
          placeholder="Enter email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={formData.email}
          onChangeText={(text) => handleInputChange('email', text)}
        />

        {/* 3. Password TextInput */}
        <Text>Password (secureTextEntry):</Text>
        <TextInput
          style={inputStyle}
          placeholder="Enter password"
          secureTextEntry={true}
          value={formData.password}
          onChangeText={(text) => handleInputChange('password', text)}
        />

        {/* 4. Phone Number TextInput */}
        <Text>Phone Number (phone-pad):</Text>
        <TextInput
          style={inputStyle}
          placeholder="Enter phone number"
          keyboardType="phone-pad"
          value={formData.phoneNumber}
          onChangeText={(text) => handleInputChange('phoneNumber', text)}
        />

        {/* 5. Numeric TextInput */}
        <Text>Age (numeric):</Text>
        <TextInput
          style={inputStyle}
          placeholder="Enter age"
          keyboardType="numeric"
          value={formData.age}
          onChangeText={(text) => handleInputChange('age', text)}
        />

        {/* 6. Multiline TextInput */}
        <Text>Bio / Notes (multiline):</Text>
        <TextInput
          style={[inputStyle, { minHeight: 60, textAlignVertical: 'top' }]}
          placeholder="Enter notes..."
          multiline={true}
          numberOfLines={3}
          value={formData.bio}
          onChangeText={(text) => handleInputChange('bio', text)}
        />

        {/* 7. Switch - Subscribe */}
        <View style={switchRowStyle}>
          <Text>Subscribe to updates:</Text>
          <Switch
            value={formData.subscribe}
            onValueChange={(val) => handleInputChange('subscribe', val)}
          />
        </View>

        {/* 8. Switch - Agree Terms */}
        <View style={switchRowStyle}>
          <Text>Agree to terms:</Text>
          <Switch
            value={formData.agreeTerms}
            onValueChange={(val) => handleInputChange('agreeTerms', val)}
          />
        </View>

        {/* 9. Pressable Submit Button */}
        <Pressable
          style={{
            backgroundColor: '#007AFF',
            padding: 10,
            alignItems: 'center',
            marginTop: 10,
          }}
          onPress={handleSubmit}
          disabled={submitting}
        >
          {submitting ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>
              Submit to Console
            </Text>
          )}
        </Pressable>

        {/* 10. Pressable Reset Button */}
        <Pressable
          style={{
            backgroundColor: '#eee',
            padding: 10,
            alignItems: 'center',
            marginTop: 8,
          }}
          onPress={handleReset}
        >
          <Text style={{ color: '#333' }}>Reset</Text>
        </Pressable>

        {/* Submitted JSON Output */}
        {submittedJson && (
          <View style={{ marginTop: 20, padding: 10, backgroundColor: '#f0f0f0' }}>
            <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Console Output:</Text>
            <Text style={{ fontFamily: 'monospace', fontSize: 12 }}>
              {submittedJson}
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

// Minimal, basic default styles
const inputStyle = {
  borderWidth: 1,
  borderColor: '#ccc',
  padding: 8,
  marginTop: 4,
  marginBottom: 12,
};

const switchRowStyle = {
  flexDirection: 'row' as const,
  justifyContent: 'space-between' as const,
  alignItems: 'center' as const,
  marginVertical: 6,
};
