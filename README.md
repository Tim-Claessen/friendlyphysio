# Friendly Physio

A React Native mobile application designed to help users engage with daily physiotherapy activities through guided mindfulness and mobility exercises.

## 🚀 Tech Stack

### MVP Stack

- **Framework**: React Native
- **Language**: TypeScript
- **Development Toolset**: Expo (~54.0.25)
- **UI Components**: React Native Paper (Material Design 3)
- **Navigation**: React Navigation (Native Stack)
- **Version Control**: GitHub
- **Development Tools**: VS Code & Cursor

## 📁 Project Structure

```text
friendlyphysio/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── AppLogo.tsx
│   │   ├── ElevatedCard.tsx
│   │   ├── PrimaryButton.tsx
│   │   ├── SecondaryButton.tsx
│   │   ├── TextButton.tsx
│   │   ├── OutlinedButton.tsx
│   │   └── index.ts
│   ├── screens/             # Screen components
│   │   ├── HomeScreen.tsx
│   │   ├── DailyActivityScreen.tsx
│   │   ├── DifficultyScreen.tsx
│   │   └── ActivityScreen.tsx
│   └── theme/               # Design system & theming
│       ├── DesignSystem.ts
│       ├── FriendlyPhysioTheme.ts
│       └── Material3Colors.ts
├── assets/
│   ├── config/
│   │   └── activites.json   # Activity data
│   └── images/              # App images and logos
├── App.tsx                  # Root component
├── index.ts                 # Entry point
└── package.json
```

## 🏗️ Architecture

### Design System

The app uses a centralized design system (`src/theme/DesignSystem.ts`) that consolidates:

- **Colors**: Material 3 color palette
- **Typography**: Font sizes, weights, line heights, letter spacing
- **Spacing**: Consistent spacing scale and component padding
- **Elevation & Shadows**: Platform-specific shadow definitions
- **Border Radius**: Standardized corner radius values
- **Component Dimensions**: Logo sizes, button dimensions, etc.

### Component Architecture

- **Separation of Concerns**: Component logic separated from presentation
- **Reusable Components**: Common UI patterns abstracted into focused components
- **Type Safety**: Full TypeScript support with proper type definitions
- **Consistent Styling**: All components reference the centralized design system

### Navigation Flow

1. **HomeScreen** → Welcome screen with "Start Daily Activity" button
2. **DailyActivityScreen** → Choose between "Mindfulness" or "Mobility"
3. **DifficultyScreen** → Select difficulty level (1, 2, or 3 stars)
4. **ActivityScreen** → Display randomly selected activity with instructions

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn
- Expo CLI (optional, but recommended)
- iOS Simulator (for Mac) or Android Emulator / physical device

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd friendlyphysio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

   Or use the platform-specific commands:

   ```bash
   npm run android  # For Android
   npm run ios      # For iOS
   npm run web      # For web (limited functionality)
   ```

4. **Run on your device**

   - Scan the QR code with Expo Go app (iOS/Android)
   - Or press `a` for Android emulator, `i` for iOS simulator

## 📱 Features

### Current Features (MVP)

- ✅ Material Design 3 UI with custom theme
- ✅ Multi-screen navigation flow
- ✅ Activity type selection (Mindfulness/Mobility)
- ✅ Difficulty level selection (1-3 stars)
- ✅ Random activity selection based on type and difficulty
- ✅ Activity display with goal and detailed instructions
- ✅ Responsive design with consistent spacing and typography
- ✅ Reusable component library
- ✅ Centralized design system

## 🎨 Design System

The app follows Material Design 3 principles with a custom color palette:

- **Primary**: `#6750A4` (Indigo)
- **Secondary**: `#FF8C42` (Coral)
- **Surface**: `#F9F9F9` (Light Gray)
- **On Surface**: `#1C1B1F` (Dark Gray)
- **Star Color**: `#FFB74D` (Light Gold)

All design tokens are defined in `src/theme/DesignSystem.ts` for easy maintenance and consistency.

## 🔮 Future Roadmap

See [TODO.md](./TODO.md) for detailed implementation plans:

- **Local Storage**: AsyncStorage integration
- **Notifications**: Daily activity reminders via expo-notifications
- **Database**: Cloud Firestore for data persistence
- **Authentication**: Firebase Authentication
- **Analytics**: Google Analytics for Firebase
- **Performance Monitoring**: Firebase Performance Monitoring
- **Build & Deployment**: EAS Build for app store distribution

## 📝 Development Notes

- The app uses React Native Paper for Material Design 3 components
- Navigation is handled by React Navigation (Native Stack)
- All styling constants are centralized in the design system
- Components are designed to be reusable and maintainable
- TypeScript ensures type safety throughout the codebase

## 🤝 Contributing

This is a private project. For questions or suggestions, please contact the project maintainer.

## 📄 License

Private - All rights reserved
