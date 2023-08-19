import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ExercisesScreen } from "../screens/ExercisesScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import { TechniquesScreen } from "../screens/TechniquesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "red",
        }}
      >
        <Tab.Screen
          name="Exercise"
          component={ExercisesScreen}
          options={{
            // tabBarLabel: "Exercise",
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="dumbbell" color={color} size={32} />
            ),
          }}
        />
        <Tab.Screen
          name="Technic"
          component={TechniquesScreen}
          options={{
            // tabBarLabel: "Home",
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="arm-flex" color={color} size={32} />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingsScreen}
          options={{
            // tabBarLabel: "Home",
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="alien" color={color} size={32} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
