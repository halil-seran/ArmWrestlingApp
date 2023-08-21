import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SectionsScreen } from "../screens/SectionsScreen";
import { TechniquesScreen } from "../screens/TechniquesScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import { ExercisesScreen } from "../screens/ExercisesScreen";

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

function ExercisesStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Section" component={SectionsScreen} />
      <HomeStack.Screen name="Exercise" component={ExercisesScreen} />
    </HomeStack.Navigator>
  );
}

export function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "red",
        }}
      >
        <Tab.Screen
          name="ExerciseStack"
          component={ExercisesStackScreen}
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
