// MODAL OLUCAK BASINCA MODAL ACILICAK HAREKET HAKKINDA DETAYLI BILGI VERICEK
// cardda  type a gore  dumbell  yada  barbell yada  cable  iconu olucak

import { useState, useCallback, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  Pressable,
  ScrollView,
} from "react-native";
import { Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import YoutubePlayer from "react-native-youtube-iframe";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const ExercisesCard = ({ item }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <YoutubePlayer
              height={windowHeight / 4.5}
              width={windowWidth / 1.2}
              play={playing}
              videoId={item.link}
              onChangeState={onStateChange}
            />
            <ScrollView style={{ flex: 1, marginVertical:17 }}>
              <Text style={styles.modalText}>{item.detail}</Text>
            </ScrollView>
            <View style={styles.modalButtons}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={togglePlaying}
              >
                <Text style={styles.textStyle}>
                  {playing ? "pause" : "play"}
                </Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={styles.cardContainer}
        onPress={() => setModalVisible(true)}
      >
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            style={styles.imageArea}
            source={{
              uri: `${item.image}`,
            }}
          />
        </View>
        <View style={styles.textArea}>
          <View style={styles.textNameArea}>
            <Text
              style={{
                color: "black",
                fontSize: 18,
                fontWeight: "700",
                textAlign: "center",
                paddingLeft: 5,
                paddingRight: 5,
              }}
            >
              {item.name}
            </Text>
          </View>
          <View style={styles.textIconArea}>
            {item.type === "dumbell" ? (
              <FontAwesome5 name="dumbbell" color="black" size={25} />
            ) : null}
            {item.type === "barbell" ? (
              <Entypo
                name="flow-line"
                color="black"
                size={40}
                style={{
                  transform: [{ rotate: "90deg" }],
                }}
              />
            ) : null}
          </View>
        </View>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "45.5%",
    marginLeft: "3%",
    // marginRight: "2.5%",
    height: windowWidth / 1.8,
    backgroundColor: "#bbd0ff",
    marginBottom: 15,
    borderRadius: 15,
    // flexDirection: "row",
    shadowColor: "black",
    shadowOpacity: 0.7,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 11,
  },
  imageArea: {
    // backgroundColor: "white",
    width: windowWidth / 2.3,
    height: windowWidth / 2.7,
    borderRadius: 11,
    marginTop: 5,
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: windowWidth / 1.1,
    height: windowHeight / 1.3,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowRadius: 20,
    elevation: 15,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: windowWidth / 3.5,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontSize: 20,
    textAlign: "left",
  },
  modalButtons: {
    flexDirection: "row",
    // backgroundColor: "red",
    width: "100%",
    justifyContent: "space-around",
  },
});
