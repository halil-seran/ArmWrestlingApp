import { useState, useCallback, useRef } from "react";
import {
  ScrollView,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const TechniquesCard = ({ item }) => {
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
        <Text style={styles.textStyle}>{item.name}</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
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
    marginTop: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
