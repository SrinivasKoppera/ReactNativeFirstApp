import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
} from "react-native";

export const AboutScreen = () => {
  return (
    <SafeAreaView style={styles.aboutPageContainer}>
      <View style={styles.container}>
        <Text style={styles.aboutScreenHeading}>This is About Screen</Text>
      </View>
      <StatusBar auto="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  aboutPageContainer: {
    backgroundColor: "plum",
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  aboutScreenHeading: {
    fontSize: 25,
    fontWeight: "900",
  },
});
