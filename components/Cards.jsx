// MODAL OLUCAK BASINCA MODAL ACILICAK HAREKET HAKKINDA DETAYLI BILGI VERICEK
// cardda  type a gore  dumbell  yada  barbell yada  cable  iconu olucak

import { View, Text, StyleSheet, Image } from "react-native";
import { Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const Cards = ({ item }) => {
  return (
    <>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageArea}
            source={{
              uri: `${item.link}`,
            }}
          />
        </View>
        <View style={styles.textArea}>
          <View style={styles.textNameArea}>
            <Text style={{ color: "white" }}>{item.name}</Text>
          </View>
          <View style={styles.textIconArea}>
            {item.type === "dumbell" ? (
              <FontAwesome5 name="dumbbell" color="white" size={25} />
            ) : null}
            {item.type === "barbell" ? (
              <Entypo
                name="flow-line"
                color="white"
                size={40}
                style={{
                  transform: [{ rotate: "90deg" }],
                }}
              />
            ) : null}
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "45%",
    marginLeft: "2.5%",
    marginRight: "2.5%",
    height: windowWidth / 1.8,
    backgroundColor: "#f95738",
    marginBottom: 20,
    borderRadius: 15,
    // flexDirection: "row",
    flex: 1,
  },
  imageArea: {
    width: windowWidth / 2.5,
    height: windowWidth / 2.5,
    borderRadius: 5,
    marginTop: 8,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  textArea: {
    flexDirection: "row",
    flex: 1,
  },
  textNameArea: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  textIconArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
});
