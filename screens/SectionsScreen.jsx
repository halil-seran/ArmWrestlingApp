import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import * as data from "../data/Data.json";
import { SectionsCard } from "../components/SectionsCard";
import { useState } from "react";

export const SectionsScreen = () => {
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <>
          <View style={styles.screen}>
            <View style={{ marginTop: 30 }}></View>
            {/* spacer koydum eger status bugi duzelmesse diye */}
            <Text>Exercise screen{data.sections[0].name}</Text>
            <FlatList
              data={data.sections}
              renderItem={({ item }) => <SectionsCard item={item} />}
              keyExtractor={(item) => item.slug}
            />
          </View>
          <View style={styles.AdsArea}>
            <Text>This is ads area</Text>
          </View>
        </>
      )}
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
