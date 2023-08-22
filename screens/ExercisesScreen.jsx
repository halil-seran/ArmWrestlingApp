import { View, Text, Button, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { ExercisesCard } from "../components/ExercisesCard";

export const ExercisesScreen = ({ navigation }) => {
  const route = useRoute();
  const data = route.params?.item;
  // burdan direk flatlist e data olarak gonder itemi
  return (
    <View>
      <View style={{ marginTop: 30 }}></View>
      {/* spacer koydum eger status bugi duzelmesse diye */}
      <FlatList
        data={data.exercises}
        renderItem={({ item }) => <ExercisesCard item={item} />}
        keyExtractor={(item) => item.slug}
        numColumns={2}
      />

      {/* <Button title="gonder" onPress={() => navigation.navigate("Section")} /> */}
    </View>
  );
};
