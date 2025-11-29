import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import { FriendlyPhysioTheme } from "./src/theme/FriendlyPhysioTheme";
import { Colors } from "./src/theme/DesignSystem";
import HomeScreen from "./src/screens/HomeScreen";
import DailyActivityScreen from "./src/screens/DailyActivityScreen";
import DifficultyScreen from "./src/screens/DifficultyScreen";
import ActivityScreen from "./src/screens/ActivityScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={FriendlyPhysioTheme}>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              animation: 'default',
              //animationDuration: 4000,
            }}
          >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
          />
          <Stack.Screen 
            name="DailyActivity" 
            component={DailyActivityScreen}
          />
          <Stack.Screen 
            name="Difficulty" 
            component={DifficultyScreen}
          />
          <Stack.Screen 
            name="Activity" 
            component={ActivityScreen}
          />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surface,
  },
});
