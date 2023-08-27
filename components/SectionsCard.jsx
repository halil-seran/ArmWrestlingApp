import { View, Text, Pressable, Image } from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const SectionsCard = ({ item }) => {
  const navigation = useNavigation();

  const imageSelect = (type) => {
    let path = "";
    if (type === "biceps") {
      path = require("../assets/images/biceps.jpg");
    } else if (type === "hands") {
      path = require("../assets/images/hands.jpg");
    } else if (type === "forearm") {
      path = require("../assets/images/forearm.jpg");
    } else if (type === "back") {
      path = require("../assets/images/back.jpg");
    } else if (type === "shoulder") {
      path = require("../assets/images/shoulder.jpg");
    } else if (type === "triceps") {
      path = require("../assets/images/triceps.jpg");
    } else {
      path = require("../assets/images/hands.jpg");
    }
    return path;
  };

  return (
    <Pressable
      style={styles.sectionContainer}
      onPress={() => navigation.navigate("Exercise", { item })}
    >
      <Image
        resizeMode="cover"
        style={styles.imageArea}
        source={imageSelect(item.slug)}
      />
      <View style={styles.textArea}>
        <Text style={styles.textStyle}>{item.name} </Text>
        <Text style={styles.textStyle}>Exercises</Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    shadowColor: "black",
    // shadowOpacity: 0.7,
    // shadowOffset: { width: 2, height: 3 },
    // shadowRadius: 8,
    elevation: 10,
    borderRadius: 15,
    backgroundColor: "#324047",
    width: windowWidth / 1.11,
    marginLeft: "5%",
    height: windowWidth / 1.11 / 1.6,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageArea: {
    // backgroundColor: "white",
    width: windowWidth / 1.11 / 1.6,
    height: windowWidth / 1.11 / 1.6,

    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  textArea: {
    flex: 1,
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "white",
    fontSize: 30,
    fontFamily: "Inter_900Black",
  },
});
