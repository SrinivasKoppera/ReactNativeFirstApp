import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { LoginScreen } from "../Screens/Login";
import { HomeScreen } from "../Screens/Home";
import { AboutScreen } from "../Screens/About";
import { DashboardScreen } from "../Screens/Dashboard";
import { MapsScreen } from "../Screens/Maps";
import { TodosScreen } from "../Screens/Todos";
import { PersonDetailsScreen } from "../Screens/PersonDetails";
import { TermsAndConditionScreen } from "../Screens/TermsAndCondition";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SignUpScreen } from "../Screens/SignUp";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { logOutAction } from "../Redux/Actions/LoginAction";
import AntiDesign from "react-native-vector-icons/AntDesign";
import { useDispatch } from "react-redux";

const HomeStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const SignUpStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export const HomeModul = ({ navigation }) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home",
          headerLeft: () => {
            return (
              <MaterialCommunityIcons
                name="menu"
                size={30}
                style={{ marginRight: 100 }}
                onPress={() => navigation.toggleDrawer()}
              />
            );
          },
        }}
      />
      <HomeStack.Screen
        name="Details"
        component={PersonDetailsScreen}
        options={{
          title: "Details",
        }}
      />
    </HomeStack.Navigator>
  );
};

export const LoginModul = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </LoginStack.Navigator>
  );
};

export const SignUpModul = () => {
  return (
    <SignUpStack.Navigator>
      <SignUpStack.Screen
        name="Signup"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
    </SignUpStack.Navigator>
  );
};

export const BottomModul = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "HOME") {
            iconName = "home";
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === "DASHBOARD") {
            iconName = "view-dashboard";
          } else if (route.name === "TODOS") {
            iconName = "format-list-numbered";
          } else if (route.name === "MAPS") {
            iconName = "map-marker";
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
          // You can return any component that you like here!
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="HOME" component={HomeModul} />
      <Tab.Screen name="DASHBOARD" component={DashboardScreen} />
      <Tab.Screen name="TODOS" component={TodosScreen} />
      <Tab.Screen name="MAPS" component={MapsScreen} />
    </Tab.Navigator>
  );
};

function CustomDrawerContent(props) {
  const dispatch = useDispatch();

  const onPressSignOut = () => {
    console.log("This is Logout Button");
    dispatch(logOutAction());
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="LogOut"
        onPress={() => onPressSignOut()}
        labelStyle={{ fontWeight: "bold", marginLeft: -20 }}
        style={{ marginTop: "165%" }}
        icon={({ color }) => (
          <AntiDesign color={color} size={20} name="logout" />
        )}
      />
    </DrawerContentScrollView>
  );
}

export const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={CustomDrawerContent}
    >
      <Drawer.Screen name="Main" component={BottomModul} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Terms" component={TermsAndConditionScreen} />
    </Drawer.Navigator>
  );
};
