import { Text, View, SafeAreaView, StyleSheet } from "react-native";

export const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screen}>
        <Text>Settings screen</Text>
      </View>
      <View style={styles.AdsArea}>
        <Text>This is ads area</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  AdsArea: {
    backgroundColor: "#F5B700",
    width: "90%",
    marginLeft: "5%",
    height: 70,
    borderRadius: 15,
    marginBottom: 20,
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  screen: { flex: 1 },
});
