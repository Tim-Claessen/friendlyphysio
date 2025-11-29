import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ElevatedCard, PrimaryButton, SecondaryButton, AppLogo } from "../components";
import { Colors, Spacing, Typography } from "../theme/DesignSystem";

type RootStackParamList = {
  Home: undefined;
  DailyActivity: undefined;
  Difficulty: { activityType: "Mindfulness" | "Mobility" };
  Activity: { activityType: "Mindfulness" | "Mobility"; difficulty: 1 | 2 | 3 };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function DailyActivityScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <AppLogo size="medium" style={styles.logo} />
      
      <ElevatedCard elevation="level3">
        <View style={styles.cardContent}>
          <Text variant="headlineMedium" style={styles.introText}>
            What are you in the mood for today?
          </Text>
          
          <View style={styles.activityContainer}>
            <PrimaryButton
              onPress={() => {
                navigation.navigate("Difficulty", { activityType: "Mindfulness" });
              }}
              style={styles.activityButton}
            >
              Mindfulness
            </PrimaryButton>

            <SecondaryButton
              onPress={() => {
                navigation.navigate("Difficulty", { activityType: "Mobility" });
              }}
              style={styles.activityButton}
            >
              Mobility
            </SecondaryButton>
          </View>
        </View>
      </ElevatedCard>
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
  introText: {
    textAlign: "center",
    marginBottom: Spacing.lg,
    color: Colors.onSurface,
    fontWeight: Typography.fontWeight.semibold,
  },
  activityContainer: {
    width: "100%",
    gap: Spacing.gapMd,
    alignItems: "stretch",
  },
  activityButton: {
    width: "100%",
  },
});

