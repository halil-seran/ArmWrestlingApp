import { View, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { ExercisesCard } from "../components/ExercisesCard";

export const ExercisesScreen = ({ navigation }) => {
  const route = useRoute();
  const data = route.params?.item;
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
    </View>
  );
};
