import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import { useSelector } from "react-redux";
import { Card, Avatar } from "react-native-paper";

export const DashboardScreen = () => {
  const usersData = useSelector((state) => state.Users.usersData);
  // console.log("This is Users Data : ", usersData);

  const renderItemOne = ({ item }) => {
    // console.log("This is first name : ", item.first_name);
    return (
      <View key={item.id}>
        <Avatar.Image
          style={{ margin: 5 }}
          size={100}
          source={{ uri: item.avatar }}
        />
      </View>
    );
  };

  const renderCardItemTwo = ({ item }) => {
    return (
      <Card style={styles.card} key={item.id}>
        <View style={styles.cardContainer}>
          <Avatar.Image size={50} source={{ uri: item.avatar }} />
          <View style={styles.textContainer}>
            <Text style={styles.firstName}>{item.first_name}</Text>
            <Text style={styles.email}>{item.email}</Text>
          </View>
        </View>
      </Card>
    );
  };

  return (
    <SafeAreaView style={styles.dashboardPageContainer}>
      {/* <ScrollView style={styles.container}> */}
      {/* <ScrollView> */}
      <Text style={styles.horizontalRowHeading}>This is Horizontal Scroll</Text>
      <View style={styles.firstFlatList}>
        <FlatList
          data={usersData}
          renderItem={renderItemOne}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.secondFlatList}>
        <FlatList
          data={usersData}
          renderItem={renderCardItemTwo}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.thirdFlatList}>
        <FlatList
          data={usersData}
          renderItem={renderItemOne}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />

        <FlatList
          data={usersData}
          renderItem={renderItemOne}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />

        <FlatList
          data={usersData}
          renderItem={renderItemOne}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.fourthFlatList}>
        <FlatList
          data={usersData}
          renderItem={renderCardItemTwo}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </View>
      {/* </ScrollView> */}
      <StatusBar auto="auto" />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dashboardPageContainer: {
    backgroundColor: "plum",
    flex: 1,
  },
  horizontalRowHeading: {
    textAlign: "center",
    fontWeight: "900",
    fontSize: 20,
    margin: "3%",
  },
  card: {
    margin: 10,
    width: 250,
    height: 150,
  },
  cardContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "3%",
  },
  textContainer: {
    marginTop: "5%",
    alignItems: "center",
  },
  email: {
    // fontSize: 17,
    // fontWeight: "600",
  },
  firstName: {
    fontSize: 17,
    fontWeight: "600",
  },
  firstFlatList: {
    height: "16%",
  },
  secondFlatList: {
    height: "25%",
  },
  thirdFlatList: {
    height: "25%",
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  fourthFlatList: {
    height: "25%",
  },
});
