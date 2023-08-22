import { Text, View, SafeAreaView, StyleSheet, FlatList } from "react-native";
import * as data from "../data/Data.json";
import { SectionsCard } from "../components/SectionsCard";

export const SectionsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screen}>
        <View style={{ marginTop: 30 }}></View>
        {/* spacer koydum eger status bugi duzelmesse diye */}
        <Text>Exercise screen{data.mockData[0].name}</Text>
        <FlatList
          data={data.mockData}
          renderItem={({ item }) => <SectionsCard item={item} />}
          keyExtractor={(item) => item.slug}
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
    marginBottom: 10,
    marginTop: 10,
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#eeeeee",
  },
  screen: { flex: 1 },
});
