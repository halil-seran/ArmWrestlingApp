import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MyTabs as Navigation } from "./navigation";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import "expo-dev-client";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <Navigation />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
