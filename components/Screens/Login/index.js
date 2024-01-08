import { useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";
import { useDispatch } from "react-redux";
import { loginAction } from "../../Redux/Actions/LoginAction";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrorShow, setEmailErrorShow] = useState(false);
  const [passwordErrorShow, setPasswordErrorShow] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const handleOnPressLoginBtn = () => {
    if (email !== "" && password !== "") {
      const usersData = { email, password };
      dispatch(loginAction(usersData));
      setEmail("");
      setPassword("");
    }
    if (email === "") {
      setEmailErrorShow(true);
      setEmailErrorMessage("Please Enter Email");
    } else {
      setEmailErrorShow(false);
      setEmailErrorMessage("");
    }
    if (password === "") {
      setPasswordErrorShow(true);
      setPasswordErrorMessage("Please Enter Password");
    } else {
      setPasswordErrorShow(false);
      setPasswordErrorMessage("");
    }
  };

  const onchangeEmail = (text) => {
    setEmail(text);
    validateEmail(text);
  };

  const onchangePassword = (text) => {
    setPassword(text);
    validatePassword(text);
  };

  const validateEmail = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      setEmailErrorShow(true);
      setEmailErrorMessage("Email is not valid");
    } else {
      setEmailErrorShow(false);
      setEmailErrorMessage("");
    }
  };

  const validatePassword = (text) => {
    let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (reg.test(text) === false) {
      setPasswordErrorShow(true);
      setPasswordErrorMessage("Password is not valid");
    } else {
      setPasswordErrorShow(false);
      setPasswordErrorMessage("");
    }
  };

  const updatePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <ScrollView>
        <View style={styles.topContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageStyle}
              source={require("../../../assets/Images/Apple_Icon.jpg")}
            />
            <Text style={styles.loginHeadingStyle}>My First Application</Text>
          </View>
          <View style={styles.inputsContainer}>
            <TextInput
              value={email}
              style={styles.textInputStyle}
              placeholder={"Please Enter Email"}
              mode="outlined"
              label={"Email"}
              error={emailErrorShow}
              onChangeText={(text) => onchangeEmail(text)}
            />
            <HelperText
              style={styles.errorHelperText}
              type="error"
              visible={emailErrorShow}
            >
              {emailErrorMessage}
            </HelperText>
            <TextInput
              value={password}
              style={styles.textInputStyle}
              placeholder={"Please Enter Password"}
              mode="outlined"
              label={"Password"}
              secureTextEntry={passwordVisibility}
              right={
                <TextInput.Icon
                  icon={passwordVisibility ? "eye" : "eye-off"}
                  onPress={updatePasswordVisibility}
                />
              }
              error={passwordErrorShow}
              onChangeText={(text) => onchangePassword(text)}
            />
            <HelperText
              style={styles.errorHelperText}
              type="error"
              visible={passwordErrorShow}
            >
              {passwordErrorMessage}
            </HelperText>
            <Button
              style={styles.loginButtonStyle}
              mode="contained"
              // contentStyle={{ paddingHorizontal: 50 }}
              onPress={() => handleOnPressLoginBtn()}
            >
              <Text numberOfLines={1} ellipsizeMode="tail">
                Login..!
              </Text>
            </Button>
          </View>
        </View>
      </ScrollView>
      <StatusBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    backgroundColor: "#fff",
    flex: 1,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "8%",
  },
  imageStyle: {
    width: "70%",
    height: 200,
  },
  loginHeadingStyle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#e86c1a",
    marginTop: "5%",
  },
  inputsContainer: {
    marginTop: "6%",
  },
  textInputStyle: {
    marginRight: "5%",
    marginLeft: "5%",
    marginTop: "1%",
  },
  errorHelperText: {
    marginLeft: "2%",
  },
  loginButtonStyle: {
    height: "16%",
    margin: "5%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
