import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
// import { MyDrawer } from "./components/Routing";
import { Authenticator } from "./components/Authentication";
import store from "./components/Redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Authenticator />
      </NavigationContainer>
    </Provider>
  );
}
