# React Native Form Demonstration - Mobile Dev Practical

A React Native project built with Expo exploring various `TextInput` types and core form elements based on Course Slide 21 (**Core React Native Components**).

## Overview

This project demonstrates a simple, lightweight form with minimal default styling that collects user input and logs the resulting data structure as a JSON object to the developer console.

### Explored `TextInput` Types
- **Default Text Input (`keyboardType="default"`)**: For standard single-line text like Full Name.
- **Email Input (`keyboardType="email-address"`)**: Keyboard optimized for email input (`@`, `.com`, no auto-capitalization).
- **Password Input (`secureTextEntry={true}`)**: Automatically masks sensitive characters.
- **Phone Number (`keyboardType="phone-pad"`)**: Software dial pad for telephone numbers.
- **Numeric Input (`keyboardType="numeric"`)**: Number-only keypad for age/numbers.
- **Multiline / Textarea (`multiline={true}`)**: Multi-line expanded field for notes/bio.

### Other Form Elements Demonstrated
- **`Switch`**: Platform-native boolean toggle (used for subscription and terms agreement).
- **`Pressable`**: Interactive wrapper handling raw touch feedback for submit and reset buttons.
- **`ScrollView`**: Scrollable viewport allowing full access to all fields when the software keyboard opens.
- **`ActivityIndicator`**: Platform spinner indicating active submission state.

## How to Run

1. Install dependencies (if not already installed):
   ```bash
   npm install
   ```
2. Start the Expo development server:
   ```bash
   npm start
   ```
3. Choose your preview platform:
   - **Web Browser**: Press `w` or open `http://localhost:8081`
   - **Android Emulator**: Press `a`
   - **Physical Device**: Scan the QR code using the **Expo Go** mobile app.
