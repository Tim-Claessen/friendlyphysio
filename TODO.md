# Friendly Physio - Development TODO

## ✅ MVP Stack (Current)

### Framework & Tools

- ✅ **Framework**: React Native
- ✅ **Language**: TypeScript
- ✅ **Development Toolset**: Expo
- ✅ **Version Control**: GitHub
- ✅ **Coding Help**: VS Code & Cursor
- ✅ **UI Components**: React Native Paper

### Completed Features

- ✅ Project initialization with Expo TypeScript template
- ✅ React Native Paper theme setup
- ✅ Navigation setup (React Navigation)
- ✅ Screen structure (Home, DailyActivity, Difficulty, Activity)
- ✅ Design system architecture (centralized constants)
- ✅ Reusable component library (buttons, cards, logo)
- ✅ Activity selection and display logic

---

## 🚀 Future State Implementation Plan

### 1. Local Storage

- [ ] Integrate **AsyncStorage** for local, non-critical data
- [ ] Implement data persistence for user preferences
- [ ] Cache activity history locally

### 2. Notifications

- [ ] Install and configure **expo-notifications** library
- [ ] Implement logic for requesting user permission
- [ ] Set up notification scheduling for daily activity reminders
- [ ] Configure notification channels (Android) and categories (iOS)

### 3. Database

- [ ] Set up a new project in the **Firebase Console**
- [ ] Install Firebase packages (`@react-native-firebase/firestore` or `firebase`)
- [ ] Integrate **Cloud Firestore** for data storage
- [ ] Configure security rules for Firestore
- [ ] Implement data models for user activities and progress

### 4. Authentication

- [ ] Install Firebase Authentication packages
- [ ] Integrate **Firebase Authentication** for user sign-up/login
- [ ] Implement authentication flows (email/password, social login if needed)
- [ ] Add user profile management
- [ ] Secure API endpoints with authentication

### 5. Analytics

- [ ] Set up **Google Analytics for Firebase**
- [ ] Implement event logging to track key user actions
- [ ] Define custom events for activity completion, difficulty selection, etc.
- [ ] Set up user properties and user segments

### 6. Performance Monitoring

- [ ] Set up **Firebase Performance Monitoring**
- [ ] Track app startup time
- [ ] Monitor network request performance
- [ ] Add custom performance traces for critical user flows

### 7. Build & Deployment

- [ ] Adopt **Expo Application Services (EAS) Build**
- [ ] Configure `eas.json` for different build profiles (development, staging, production)
- [ ] Set up EAS Build for creating native build artifacts (`.apk`, `.aab`, `.ipa`)
- [ ] Use **EAS Submit** for streamlined deployment to:
  - Apple App Store
  - Google Play Store
- [ ] Configure app signing certificates
- [ ] Set up CI/CD pipeline for automated builds

---

## 📝 Notes

- All MVP requirements are complete and the app is functional
- Future state items can be implemented incrementally based on priorities
- Consider implementing local storage and notifications first for offline functionality
- Firebase integration can be done as a cohesive unit (Auth + Firestore + Analytics + Performance)
