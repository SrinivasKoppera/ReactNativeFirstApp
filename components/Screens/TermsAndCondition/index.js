import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
} from "react-native";

export const TermsAndConditionScreen = () => {
  return (
    <SafeAreaView style={styles.termsandConditionPageContainer}>
      <View style={styles.container}>
        <Text style={styles.termsandConditionScreenHeading}>
          This is Terms and Condition Screen
        </Text>
      </View>
      <StatusBar auto="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  termsandConditionPageContainer: {
    backgroundColor: "plum",
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  termsandConditionScreenHeading: {
    fontSize: 25,
    fontWeight: "900",
  },
});
