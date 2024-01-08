import { useEffect, useState } from "react";
import {
  View,
  FlatList,
  SafeAreaView,
  Text,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Avatar, Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { getUsersDetails } from "../../Redux/Actions/getUsersDataAction";
import { useDispatch, useSelector } from "react-redux";

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.Users.usersData);
  const isLoading = useSelector((state) => state.Users.isLoading);
  const errorMsg = useSelector((state) => state.Users.error);

  const navigation = useNavigation();
  // const [userData, setUsersData] = useState([]);
  // const [isRefresh, setIsRefresh] = useState(false);
  // let pageIndex = 1;

  const renderItem = (itemsData) => {
    return (
      <Card
        style={styles.card}
        key={itemsData.item.id}
        onPress={() => navigation.navigate("Details", itemsData.item.id)}
      >
        <View style={styles.cardContainer}>
          <Avatar.Image size={150} source={{ uri: itemsData.item.avatar }} />
          <View style={styles.textContainer}>
            <Text style={styles.firstName}>{itemsData.item.first_name}</Text>
            <Text style={styles.email}>{itemsData.item.email}</Text>
          </View>
        </View>
      </Card>
    );
  };

  const loadMoreUsers = () => {
    if (pageIndex === 2) {
      pageIndex = 1;
    } else {
      pageIndex += 1;
    }
    getUsersDetails();
  };

  const refreshUsersData = () => {
    pageIndex = 1;
    setUsersData([]);
    setIsRefresh(true);
    getUsersDetails();
  };

  // const separator = () => {
  //   return (
  //     <View style={{ height: 1, backgroundColor: "grey", marginLeft: "5%" }} />
  //   );
  // };

  useEffect(() => {
    dispatch(getUsersDetails());
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }
  if (errorMsg) {
    Alert.alert("Refresh Your App");
  }

  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <View style={styles.container}>
        <FlatList
          data={userData}
          renderItem={renderItem}
          // ItemSeparatorComponent={separator}
          // onEndReached={loadMoreUsers}
          // onEndReachedThreshold={0.5}
          // onRefresh={refreshUsersData}
          // refreshing={isRefresh}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeScreenContainer: {
    // flex: 1,
  },
  container: {
    // flex: 1,
    // marginTop: "8%",
  },
  card: {
    margin: "5%",
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
});
