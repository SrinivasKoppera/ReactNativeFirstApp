import { View, SafeAreaView, Text } from "react-native";

export const PersonDetailsScreen = ({ route }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>This is Person Details {route.params} </Text>
      </View>
    </SafeAreaView>
  );
};
