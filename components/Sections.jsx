import { View, Text, Pressable } from "react-native";
import { Cards } from "./Cards";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const Sections = ({ item }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.sectionContainer}
      onPress={() => navigation.navigate("Exercise")}
    >
      <Text>{item.name}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: "red",
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
