import { Platform } from "react-native";

// ============================================================================
// COLOR PALETTE
// ============================================================================
export const Colors = {
  primary: "#6750A4",
  primaryLight: "#A68CCF",
  secondary: "#FF8C42",
  surface: "#F9F9F9",
  surfaceContainerHigh: "#FFFFFF",
  onSurface: "#1C1B1F",
  onSurfaceVariant: "#49454F",
  starColor: "#FFB74D",
  shadow: "#000",
} as const;

// ============================================================================
// TYPOGRAPHY
// ============================================================================
export const Typography = {
  // Font Sizes
  fontSize: {
    display: 36,
    headlineLarge: 32,
    headlineMedium: 28,
    headlineSmall: 24,
    titleLarge: 22,
    titleMedium: 20,
    titleSmall: 18,
    bodyLarge: 16,
    bodyMedium: 14,
    bodySmall: 12,
    labelLarge: 14,
    labelMedium: 12,
    labelSmall: 11,
  },
  // Font Weights
  fontWeight: {
    regular: "400" as const,
    medium: "500" as const,
    semibold: "600" as const,
    bold: "700" as const,
  },
  // Line Heights
  lineHeight: {
    display: 44,
    headlineLarge: 40,
    headlineMedium: 36,
    headlineSmall: 32,
    titleLarge: 28,
    titleMedium: 24,
    titleSmall: 20,
    bodyLarge: 24,
    bodyMedium: 20,
    bodySmall: 16,
    labelLarge: 20,
    labelMedium: 16,
    labelSmall: 16,
  },
  // Letter Spacing
  letterSpacing: {
    tight: -0.5,
    normal: 0,
    wide: 0.1,
    wider: 0.15,
  },
} as const;

// ============================================================================
// SPACING
// ============================================================================
export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
  // Screen padding
  screenHorizontal: 24,
  screenVertical: 20,
  // Component padding
  cardPadding: 24,
  buttonPaddingVertical: 12,
  buttonPaddingHorizontal: 24,
  // Gaps
  gapXs: 4,
  gapSm: 8,
  gapMd: 16,
  gapLg: 24,
} as const;

// ============================================================================
// ELEVATION & SHADOWS
// ============================================================================
export const Elevation = {
  level0: 0,
  level1: 1,
  level2: 2,
  level3: 4,
  level4: 8,
  level5: 12,
} as const;

export const Shadows = {
  level1: Platform.select({
    ios: {
      shadowColor: Colors.shadow,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
    },
    android: {
      elevation: Elevation.level1,
    },
  }),
  level2: Platform.select({
    ios: {
      shadowColor: Colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 4,
    },
    android: {
      elevation: Elevation.level2,
    },
  }),
  level3: Platform.select({
    ios: {
      shadowColor: Colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
    },
    android: {
      elevation: Elevation.level3,
    },
  }),
  level4: Platform.select({
    ios: {
      shadowColor: Colors.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 12,
    },
    android: {
      elevation: Elevation.level4,
    },
  }),
} as const;

// ============================================================================
// BORDER RADIUS
// ============================================================================
export const BorderRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 9999,
} as const;

// ============================================================================
// COMPONENT DIMENSIONS
// ============================================================================
export const ComponentDimensions = {
  logo: {
    small: 75,
    medium: 90,
    large: 150,
  },
  button: {
    minHeight: 56,
    minHeightLarge: 64,
    minWidth: 200,
  },
  card: {
    maxWidth: 400,
  },
} as const;

// ============================================================================
// LAYOUT
// ============================================================================
export const Layout = {
  bottomContainerOffset: 60,
  logoTopOffset: 60,
  logoBottomMargin: 32,
} as const;

