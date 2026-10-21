# React Native Form Demonstration - Mobile Dev Practical

A React Native mobile application built with Expo and TypeScript exploring various `TextInput` configurations and core interactive form components.

## Overview

This project demonstrates a simple, responsive form designed with minimal, clean styling that collects user input and formats the resulting data structure as a JSON object logged to the developer console and displayed on screen upon submission.

---

## Explored Input Types & Core Components

### `TextInput` Variations
- **Default Text (`keyboardType="default"`)**: Standard single-line text input for names.
- **Email (`keyboardType="email-address"`)**: Keyboard layout optimized for email input (`@`, `.com`, `autoCapitalize="none"`).
- **Password (`secureTextEntry={true}`)**: Obscures characters for secure credential entry.
- **Phone Number (`keyboardType="phone-pad"`)**: Software dial pad for entering telephone numbers.
- **Numeric Input (`keyboardType="numeric"`)**: Number-only keypad for age and numeric values.
- **Multiline Textarea (`multiline={true}`, `numberOfLines={3}`)**: Expands input into a multiline area for notes/bio with `textAlignVertical="top"`.

### Other Form Elements
- **`Switch`**: Platform-native toggle switches for boolean values (newsletter subscription, terms agreement).
- **`Pressable`**: Interactive buttons with touch feedback for submitting and resetting the form.
- **`ActivityIndicator`**: Loading spinner indicating asynchronous processing during form submission.
- **`ScrollView`**: Scrollable container to maintain accessibility to form fields when the virtual keyboard is active.
- **`SafeAreaView`**: Ensures content renders within safe device boundaries across iOS and Android.

---

## Form State Structure & JSON Output

When the form is submitted, data is structured into the following JSON schema:

```json
{
  "fullName": "John Doe",
  "email": "john.doe@example.com",
  "password": "secretpassword",
  "phoneNumber": "+1234567890",
  "age": "25",
  "bio": "Mobile application developer exploring React Native core components.",
  "subscribe": true,
  "agreeTerms": true
}
```

---

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn
- Expo Go app on your physical mobile device (optional, for device testing)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/IGITANGAZA23/mobileforms.git
   cd mobileforms
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Expo development server:
   ```bash
   npm start
   ```

### Running the App
- **Web**: Press `w` in the terminal or navigate to `http://localhost:8081`
- **Android**: Press `a` (requires Android Emulator or connected device with USB debugging)
- **iOS**: Press `i` (requires macOS and Xcode simulator)
- **Expo Go (Physical Device)**: Scan the QR code displayed in the terminal with your camera (iOS) or Expo Go app (Android).
