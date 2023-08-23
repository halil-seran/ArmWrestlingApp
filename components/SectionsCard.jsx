import { View, Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const SectionsCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.sectionContainer}
      onPress={() => navigation.navigate("Exercise", { item })}
    >
      <Text>{item.name}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    shadowColor: "black",
    shadowOpacity: 0.7,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 15,
    backgroundColor: "white",
    width: "90%",
    marginLeft: "5%",
    height: windowWidth / 2.2,
    marginBottom: 20,
  },
});
