import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
} from "react-native";

export const TodosScreen = () => {
  return (
    <SafeAreaView style={styles.todosPageContainer}>
      <View style={styles.container}>
        <Text style={styles.todosScreenHeading}>This is Todos Screen</Text>
      </View>
      <StatusBar auto="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  todosPageContainer: {
    backgroundColor: "plum",
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  todosScreenHeading: {
    fontSize: 25,
    fontWeight: "900",
  },
});
