import { View, Text } from "react-native";

export const TechniquesCard = ({ item }) => {
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  );
};
