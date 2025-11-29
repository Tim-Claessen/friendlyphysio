import { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text, Modal, Portal } from "react-native-paper";
import { RouteProp, useRoute } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ElevatedCard, TextButton, PrimaryButton, AppLogo } from "../components";
import { Colors, Spacing, Typography, Layout, Shadows } from "../theme/DesignSystem";

const activitiesData = require("../../assets/config/activites.json");

type RootStackParamList = {
  Home: undefined;
  DailyActivity: undefined;
  Difficulty: { activityType: "Mindfulness" | "Mobility" };
  Activity: { activityType: "Mindfulness" | "Mobility"; difficulty: 1 | 2 | 3 };
};

type ActivityScreenRouteProp = RouteProp<RootStackParamList, "Activity">;

interface Activity {
  id: number;
  type: string;
  difficulty: number;
  activity: string;
  goal: string;
  instructions: string;
}

export default function ActivityScreen() {
  const route = useRoute<ActivityScreenRouteProp>();
  const { activityType, difficulty } = route.params;
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [instructionsVisible, setInstructionsVisible] = useState(false);

  useEffect(() => {
    // Filter activities by type and difficulty
    const filteredActivities = activitiesData.filter(
      (activity: Activity) =>
        activity.type === activityType && activity.difficulty === difficulty
    );

    // Randomly select one activity
    if (filteredActivities.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredActivities.length);
      setSelectedActivity(filteredActivities[randomIndex]);
    }
  }, [activityType, difficulty]);

  const showInstructions = () => setInstructionsVisible(true);
  const hideInstructions = () => setInstructionsVisible(false);

  return (
    <View style={styles.container}>
      <AppLogo size="medium" style={styles.logo} />
      
      {selectedActivity && (
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <ElevatedCard elevation="level3">
            <View style={styles.cardContent}>
              <Text variant="headlineMedium" style={styles.activityTitle}>
                {selectedActivity.activity}
              </Text>
              <Text variant="bodyLarge" style={styles.goalText}>
                {selectedActivity.goal}
              </Text>
              <View style={styles.buttonContainer}>
                <TextButton
                  onPress={showInstructions}
                  style={styles.instructionsButton}
                >
                  Detailed Instructions
                </TextButton>
              </View>
            </View>
          </ElevatedCard>
        </ScrollView>
      )}

      <View style={styles.bottomContainer}>
        <Text variant="labelMedium" style={styles.difficultyText}>
          {difficulty === 1 ? "★" : difficulty === 2 ? "★★" : "★★★"}
        </Text>
        <Text variant="labelMedium" style={styles.activityText}>
          {activityType}
        </Text>
      </View>

      <Portal>
        <Modal
          visible={instructionsVisible}
          onDismiss={hideInstructions}
          contentContainerStyle={styles.modalContainer}
        >
          <ElevatedCard elevation="level4" style={styles.modalCard}>
            <View style={styles.modalCardContent}>
              <Text variant="headlineSmall" style={styles.modalTitle}>
                Instructions
              </Text>
              <Text variant="bodyLarge" style={styles.modalInstructions}>
                {selectedActivity?.instructions}
              </Text>
              <PrimaryButton
                onPress={hideInstructions}
                style={styles.closeButton}
              >
                Close
              </PrimaryButton>
            </View>
          </ElevatedCard>
        </Modal>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surface,
    paddingHorizontal: Spacing.screenHorizontal,
  },
  logo: {
    alignSelf: "center",
    marginTop: Layout.logoTopOffset,
    marginBottom: Layout.logoBottomMargin,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingBottom: 180,
  },
  cardContent: {
    padding: Spacing.cardPadding,
  },
  activityTitle: {
    marginBottom: Spacing.md,
    textAlign: "center",
    color: Colors.onSurface,
    fontWeight: Typography.fontWeight.semibold,
    fontSize: Typography.fontSize.headlineMedium,
    lineHeight: Typography.lineHeight.headlineMedium,
  },
  goalText: {
    marginBottom: Spacing.lg,
    lineHeight: Typography.lineHeight.bodyLarge,
    textAlign: "center",
    color: Colors.onSurfaceVariant,
    fontSize: Typography.fontSize.bodyLarge,
  },
  buttonContainer: {
    alignItems: "flex-end",
    marginTop: Spacing.sm,
  },
  instructionsButton: {
    marginTop: 0,
  },
  bottomContainer: {
    position: "absolute",
    bottom: Layout.bottomContainerOffset,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  difficultyText: {
    marginBottom: Spacing.sm,
    color: Colors.starColor,
    fontSize: Typography.fontSize.titleMedium,
    fontWeight: Typography.fontWeight.regular,
  },
  activityText: {
    color: Colors.onSurfaceVariant,
    fontSize: Typography.fontSize.labelMedium,
    fontWeight: Typography.fontWeight.medium,
    letterSpacing: Typography.letterSpacing.wide,
  },
  modalContainer: {
    padding: Spacing.cardPadding,
  },
  modalCard: {
    margin: 0,
  },
  modalCardContent: {
    padding: Spacing.cardPadding,
  },
  modalTitle: {
    marginBottom: Spacing.md,
    textAlign: "center",
    color: Colors.onSurface,
    fontWeight: Typography.fontWeight.semibold,
  },
  modalInstructions: {
    marginBottom: Spacing.lg,
    lineHeight: Typography.lineHeight.bodyLarge,
    color: Colors.onSurfaceVariant,
  },
  closeButton: {
    marginTop: Spacing.sm,
  },
});

