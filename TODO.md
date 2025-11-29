## 1. Project Initialization

- Create a new Expo project using the TypeScript template:
  ```bash
  npx create-expo-app@latest friendlyphysio --template expo-template-blank-typescript
  ```
- Initialize a local **Git repository**.
- Create a remote repository on **GitHub** and push your initial code.

## 2. Install UI Components

- Add React Native Paper and its dependencies (`react-native-safe-area-context`):
  ```bash
  npx expo install react-native-paper
  ```
- Install the required icon package:
  ```bash
  npx expo install react-native-vector-icons
  ```

## 3. Theme Setup (React Native Paper)

- Define your custom theme (colors, fonts, etc.) in a file like `src/theme/colors.ts`.
- Wrap your main component (`App.tsx`) with the `PaperProvider`:

  ```typescript
  import { PaperProvider } from "react-native-paper";

  // ... theme import

  export default function App() {
    return (
      <PaperProvider theme={myCustomTheme}>
        {/* Your components here */}
      </PaperProvider>
    );
  }
  ```

## 4. MVP Implementation (UI & Logic)

- Create a simple functional component for your main screen.
- Implement the UI using React Native Paper components (e.g., `Button`, `Text`, `Surface`).
- Use React's `useState` hook to manage the current state of the logic tree.
- Implement `onPress` handlers for the buttons to update the state and display the corresponding text.

---

## 💡 Future State Implementation Plan (Post-MVP)

### 5. Authentication & Database (Firebase)

- Set up a new project in the **Firebase Console**.
- Install the necessary Firebase packages (e.g., `firebase`).
- Integrate Firebase Authentication for user sign-up/login.
- Integrate Cloud Firestore for data storage, ensuring security rules are configured.

### 6. Analytics & Performance (Google/Firebase)

- Set up **Google Analytics for Firebase**.
- Implement logging events to track key user actions.
- Set up **Firebase Performance Monitoring** to track startup time and network requests.

### 7. Local Storage & Notifications

- Integrate **AsyncStorage** for local, non-critical data.
- Install and configure the **`expo-notifications`** library.
- Implement logic for requesting user permission and scheduling notifications.

### 8. Build & Deployment (EAS)

- Adopt **Expo Application Services (EAS) Build** to create native build artifacts (`.apk`, `.aab`, `.ipa`).
- Configure `eas.json` for different build profiles (e.g., development, staging, production).
- Use **EAS Submit** for streamlined deployment to the Apple App Store and Google Play Store.
