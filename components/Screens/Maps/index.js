import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
} from "react-native";

export const MapsScreen = () => {
  return (
    <SafeAreaView style={styles.mapsPageContainer}>
      <View style={styles.container}>
        <Text style={styles.mapsScreenHeading}>This is Maps Screen</Text>
      </View>
      <StatusBar auto="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mapsPageContainer: {
    backgroundColor: "plum",
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mapsScreenHeading: {
    fontSize: 25,
    fontWeight: "900",
  },
});
