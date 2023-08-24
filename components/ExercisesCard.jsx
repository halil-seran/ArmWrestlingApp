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
      // Alert.alert("video has finished playing!");
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
              width={windowWidth / 1.3}
              play={playing}
              videoId={item.link}
              onChangeState={onStateChange}
            />
            <ScrollView style={{ flex: 1 }}>
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
            style={styles.imageArea}
            source={{
              uri: `${item.image}`,
            }}
          />
        </View>
        <View style={styles.textArea}>
          <View style={styles.textNameArea}>
            <Text style={{ color: "black", fontSize: 18, fontWeight: "700" }}>
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
    width: "45%",
    marginLeft: "2.5%",
    marginRight: "2.5%",
    height: windowWidth / 1.8,
    backgroundColor: "#bbd0ff",
    marginBottom: 20,
    borderRadius: 15,
    // flexDirection: "row",
    flex: 1,
    shadowColor: "black",
    shadowOpacity: 0.7,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 15,
  },
  imageArea: {
    width: windowWidth / 2.5,
    height: windowWidth / 2.5,
    borderRadius: 15,
    marginTop: 10,
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
    width: windowWidth / 1.2,
    height: windowHeight / 1.5,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
    marginBottom: 5,
    fontSize: 18,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    // backgroundColor: "red",
    width: "100%",
    justifyContent: "space-around",
  },
});
