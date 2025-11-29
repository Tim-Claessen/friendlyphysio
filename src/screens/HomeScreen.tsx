import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ElevatedCard, PrimaryButton, AppLogo } from "../components";
import { Colors, Spacing, Typography } from "../theme/DesignSystem";

type RootStackParamList = {
  Home: undefined;
  DailyActivity: undefined;
  Difficulty: { activityType: "Mindfulness" | "Mobility" };
  Activity: { activityType: "Mindfulness" | "Mobility"; difficulty: 1 | 2 | 3 };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <AppLogo size="medium" style={styles.logo} />
      
      <ElevatedCard elevation="level3">
        <View style={styles.cardContent}>
          <Text variant="headlineMedium" style={styles.title}>
            Welcome to Friendly Physio!
          </Text>
          <PrimaryButton
            onPress={() => navigation.navigate("DailyActivity")}
            style={styles.button}
            contentStyle={styles.buttonContent}
          >
            Start Daily Activity
          </PrimaryButton>
        </View>
      </ElevatedCard>
      
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surface,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Spacing.screenHorizontal,
  },
  logo: {
    marginBottom: Spacing.lg,
  },
  cardContent: {
    padding: Spacing.cardPadding,
    alignItems: "center",
  },
  title: {
    marginBottom: Spacing.lg,
    textAlign: "center",
    color: Colors.onSurface,
    fontWeight: Typography.fontWeight.semibold,
  },
  button: {
    marginTop: Spacing.sm,
    minWidth: 240,
  },
  buttonContent: {
    paddingHorizontal: Spacing.md,
  },
});

