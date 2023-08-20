import { Text, View, SafeAreaView, StyleSheet, FlatList } from "react-native";
import * as data from "../Data.json";
import { Cards } from "../components/Cards";


export const ExercisesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screen}>
        <Text>Exercise screen{data.exercises[0].name}</Text>
        <View style={{ marginTop: 20 }}></View>
        {/* spacer koydum eger status bugi duzelmesse diye */}
        <FlatList
          data={data.exercises}
          renderItem={({ item }) => <Cards item={item} />}
          keyExtractor={(item) => item.slug}
          numColumns={2}
        />
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
    backgroundColor: "#faf0ca",
  },
  screen: { flex: 1 },
});
