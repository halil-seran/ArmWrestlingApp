import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SectionsScreen } from "../screens/SectionsScreen";
import { TechniquesScreen } from "../screens/TechniquesScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import { ExercisesScreen } from "../screens/ExercisesScreen";
import { PrivacyPolicy } from "../screens/settingsScreens/PrivacyPolicy";

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

function ExercisesStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{
          tabBarShowLabel: false,
          headerShown: false,
        }}
        name="Section"
        component={SectionsScreen}
      />
      <HomeStack.Screen
        options={{
          tabBarShowLabel: false,
          headerShown: false,
        }}
        name="Exercise"
        component={ExercisesScreen}
      />
    </HomeStack.Navigator>
  );
}

function SettingsStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{
          tabBarShowLabel: false,
          headerShown: false,
        }}
        name="Section"
        component={SettingsScreen}
      />
      <HomeStack.Screen
        options={{
          tabBarShowLabel: false,
          headerShown: false,
        }}
        name="PrivacyPolicy"
        component={PrivacyPolicy}
      />
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
          name="SettingsStack"
          component={SettingsStackScreen}
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
