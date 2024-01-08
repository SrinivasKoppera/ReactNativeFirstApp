import { useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
} from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";
import { useDispatch } from "react-redux";
import { loginAction } from "../../Redux/Actions/LoginAction";

export const SignUpScreen = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrorShow, setEmailErrorShow] = useState(false);
  const [passwordErrorShow, setPasswordErrorShow] = useState(false);
  const [userNameErrorShow, setUserNameErrorShow] = useState(false);
  const [phoneNumberErrorShow, setPhoneNumberErrorShow] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [userNameErrorMessage, setUserNameErrorMessage] = useState("");
  const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const handleOnPressLoginBtn = () => {
    if (
      email !== "" &&
      password !== "" &&
      userName !== "" &&
      phoneNumber !== ""
    ) {
      const usersData = { email, password };
      dispatch(loginAction(usersData));
      setEmail("");
      setPassword("");
    }
    if (userName === "") {
      setUserNameErrorShow(true);
      setUserNameErrorMessage("Please Enter Name");
    } else {
      setUserNameErrorShow(false);
      setUserNameErrorMessage("");
    }
    if (phoneNumber === "") {
      setPhoneNumberErrorShow(true);
      setPhoneNumberErrorMessage("Please Enter Phone Number");
    } else {
      setPhoneNumberErrorShow(false);
      setPhoneNumberErrorMessage("");
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

  const onchangeUsername = (text) => {
    setUserName(text);
    validateUsername(text);
  };

  const onchangePhonenumber = (text) => {
    setPhoneNumber(text);
    validatePhonenumber(text);
  };

  const onchangeEmail = (text) => {
    setEmail(text);
    validateEmail(text);
  };

  const onchangePassword = (text) => {
    setPassword(text);
    validatePassword(text);
  };

  const validateUsername = (text) => {
    if (text.length < 3) {
      setUserNameErrorShow(true);
      setUserNameErrorMessage("Name must be 3 words");
    } else {
      setUserNameErrorShow(false);
      setUserNameErrorMessage("");
    }
  };

  const validatePhonenumber = (text) => {
    if (text.length < 10 || text.length > 10) {
      setPhoneNumberErrorShow(true);
      setPhoneNumberErrorMessage("Please give valid Phonenumber");
    } else {
      setPhoneNumberErrorShow(false);
      setPhoneNumberErrorMessage("");
    }
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
      <KeyboardAvoidingView>
        <ScrollView>
          <View style={styles.topContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.imageStyle}
                source={require("../../../assets/Images/signup_Image.jpg")}
              />
              {/* <Text style={styles.loginHeadingStyle}>My First Application</Text> */}
            </View>
            <View style={styles.inputsContainer}>
              <TextInput
                value={userName}
                style={styles.textInputStyle}
                placeholder={"Please Enter Name"}
                mode="outlined"
                label={"Name"}
                error={userNameErrorShow}
                onChangeText={(text) => onchangeUsername(text)}
              />
              <HelperText
                style={styles.errorHelperText}
                type="error"
                visible={userNameErrorShow}
              >
                {userNameErrorMessage}
              </HelperText>
              <TextInput
                value={phoneNumber}
                style={styles.textInputStyle}
                placeholder={"Please Enter Phone Number"}
                mode="outlined"
                label={"Phone Number"}
                error={phoneNumberErrorShow}
                onChangeText={(text) => onchangePhonenumber(text)}
              />
              <HelperText
                style={styles.errorHelperText}
                type="error"
                visible={phoneNumberErrorShow}
              >
                {phoneNumberErrorMessage}
              </HelperText>
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
                  SignUp
                </Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <StatusBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    backgroundColor: "#fff",
    flex: 1,
  },
  topContainer: {
    // backgroundColor: "green",
    // flex: 1,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "12%",
  },
  imageStyle: {
    width: "70%",
    height: 180,
    borderRadius: 100,
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
    height: "10%",
    margin: "5%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
