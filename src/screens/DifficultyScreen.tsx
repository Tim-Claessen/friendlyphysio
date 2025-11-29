import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ElevatedCard, OutlinedButton, AppLogo } from "../components";
import { Colors, Spacing, Typography, Layout } from "../theme/DesignSystem";

type RootStackParamList = {
  Home: undefined;
  DailyActivity: undefined;
  Difficulty: { activityType: "Mindfulness" | "Mobility" };
  Activity: { activityType: "Mindfulness" | "Mobility"; difficulty: 1 | 2 | 3 };
};

type DifficultyScreenRouteProp = RouteProp<RootStackParamList, "Difficulty">;
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function DifficultyScreen() {
  const route = useRoute<DifficultyScreenRouteProp>();
  const navigation = useNavigation<NavigationProp>();
  const { activityType } = route.params;

  const renderStars = (count: number) => {
    return "★".repeat(count);
  };

  return (
    <View style={styles.container}>
      <AppLogo size="medium" style={styles.logo} />
      
      <ElevatedCard elevation="level3">
        <View style={styles.cardContent}>
          <Text variant="headlineMedium" style={styles.questionText}>
            What level of activity are you up for?
          </Text>
          
          <View style={styles.difficultyContainer}>
            <OutlinedButton
              onPress={() => {
                navigation.navigate("Activity", { activityType, difficulty: 1 });
              }}
              style={styles.difficultyButton}
            >
              {renderStars(1)}
            </OutlinedButton>

            <OutlinedButton
              onPress={() => {
                navigation.navigate("Activity", { activityType, difficulty: 2 });
              }}
              style={styles.difficultyButton}
            >
              {renderStars(2)}
            </OutlinedButton>

            <OutlinedButton
              onPress={() => {
                navigation.navigate("Activity", { activityType, difficulty: 3 });
              }}
              style={styles.difficultyButton}
            >
              {renderStars(3)}
            </OutlinedButton>
          </View>
        </View>
      </ElevatedCard>

      <View style={styles.bottomContainer}>
        <Text variant="labelMedium" style={styles.activityText}>
          {activityType}
        </Text>
      </View>
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
  questionText: {
    textAlign: "center",
    marginBottom: Spacing.lg,
    color: Colors.onSurface,
    fontWeight: Typography.fontWeight.semibold,
  },
  difficultyContainer: {
    width: "100%",
    gap: Spacing.gapMd,
    alignItems: "stretch",
  },
  difficultyButton: {
    width: "100%",
  },
  bottomContainer: {
    position: "absolute",
    bottom: Layout.bottomContainerOffset,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  activityText: {
    color: Colors.onSurfaceVariant,
    fontSize: Typography.fontSize.labelMedium,
    fontWeight: Typography.fontWeight.medium,
    letterSpacing: Typography.letterSpacing.wide,
  },
});

