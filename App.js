import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MyTabs as Navigation } from "./navigation";

export default function App() {
  return (
    <>
      <Navigation />
      {/* <StatusBar hidden={false} /> */}
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
