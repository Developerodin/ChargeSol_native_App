import React, { useRef, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import bg from "../Images/LoginBG.png";
import { Block, Text, Input, theme, Button } from "galio-framework";
import { NavigationActions } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PhoneInput from "react-native-phone-number-input";
import OtpInput from "../../../Components/Otp/OtpInputs";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useAppContext } from "../../../Context/AppContext";
import { Base_Url } from "../../../Base_Urls/BaseUrl";
import axios from "axios";
const { width, height } = Dimensions.get("screen");
export const Login = ({ navigation }) => {
  const phoneInput = useRef(null);
  const initalValues = {
    number: "",
    otp: "",
    errorMessage: "",
  };
  const { modalVisible, setModalVisible, isLoggedIn, setIsLoggedIn } =
    useAppContext();
  const [formData, setFormData] = useState(initalValues);
  const [otp, setOtp] = useState("");
  const [mobileNumber, setmobileNumber] = useState();
  const [formattedValue, setFormattedValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [Loading,setLoading] = useState(false);
  const handleLogin = async () => {
    setLoading(true)
    try {
      const res = await axios.post(`${Base_Url.App}customers/signin`, {
        phone_number: formData.number,
        password: otp,
      });
      console.log("In try");

      console.log("res user login ==>", res.data);
      const Data = res.data;
      const userData = res.data.data;
      if (Data.status === "success") {
        // localStorage.setItem("Auth",true)
        try {
          await AsyncStorage.setItem("Auth", "true");
          const userDetailsString = JSON.stringify(userData.user);
          AsyncStorage.setItem("userDetails", userDetailsString)
            .then(() => {
              console.log("User details saved successfully");
            })
            .catch((error) => {
              console.error("Error saving user details: ", error);
            });

          AsyncStorage.setItem("Token_App", Data.token)
            .then(() => {
              console.log("Token_App saved successfully");
            })
            .catch((error) => {
              console.error("Error saving Token_App: ", error);
            });
            AsyncStorage.setItem("PlugEasy_Token", Data.plugeasytoken)
            .then(() => {
              console.log("Token_App saved successfully");
            })
            .catch((error) => {
              console.error("Error saving Token_App: ", error);
            });
            AsyncStorage.setItem("Time", Data.Time)
            setLoading(false)
          console.log("Login==>", formData, otp);
          setIsLoggedIn(true);
          setFormData(initalValues);
          navigation.navigate('Tabs');
        } catch (e) {
          // saving error
          console.log("Error saving Auth:", e);
        }
      } else {
        setLoading(false)
        console.log("Login err==>", formData, formattedValue);
        setFormData({
          ...formData,
          errorMessage: "Invalid username or password",
        });
      }
    } catch (err) {
      console.log("error in login user ", err);
      setFormData({
        ...formData,
        errorMessage: "Invalid username or password",
      });
      setLoading(false)
    }
  };

  const handelSignup = () => {
    setFormData(initalValues);
    navigation.navigate("SignUp");
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleOtpComplete = (otp) => {
    console.log("OTP entered:", otp);
    setOtp(otp);
    // You can perform any actions with the completed OTP here
  };

  const setMobileNumber = () => {
    console.log("true");
    if (formData.number.length >= 10) {
      setmobileNumber(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Enter A Valid Mobile Number");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  };

  const handeOtpBack = () => {
    setmobileNumber(false);
  };

  const handleSkip = () => {
    console.log("Handel SKip");
    navigation.reset({
      index: 0,
      routes: [{ name: "Tabs" }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Block right style={[{ marginTop: 20 }]}>
        <Block style={styles.AlignCenter}>
          <Text
            onPress={handleSkip}
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginRight: 3,
              color: "#2DA194",
            }}
          >
            SKIP
          </Text>
          <MaterialCommunityIcons
            onPress={handleSkip}
            name="skip-forward-outline"
            style={{ marginRight: 10, color: "#2DA194" }}
            size={24}
            color="black"
          />
        </Block>
      </Block>
      {!mobileNumber ? (
        <Block style={{ padding: 15, marginTop: 10 }}>
          {/* <TextInput
        style={styles.input}
        placeholder="Username"
        value={formData.username}
        onChangeText={(value) => handleInputChange('username', value)}
      /> */}

          <PhoneInput
            ref={phoneInput}
            defaultValue={formData.number}
            defaultCode="IN"
            layout="first"
            onChangeText={(value) => {
              handleInputChange("number", value);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            autoFocus
            containerStyle={styles.inputContainer}
            textInputStyle={styles.inputText}
            textContainerStyle={{ backgroundColor: "#fff" }}
          />
          {/* <TextInput
        style={styles.input}
        placeholder="OTP"
        secureTextEntry
        value={formData.otp}
        onChangeText={(value) => handleInputChange('otp', value)}
      /> */}

          {/* <View style={{justifyContent:"center",zIndex:10,marginTop:20}}>
      <OtpInput length={4} onComplete={handleOtpComplete} />
    </View> */}
          <Block center>
            {/* <Button  onPress={handleLogin} color="#2DA194" style={{ width:"85%",marginTop:25 }} >Get OTP</Button> */}
            <Button
              onPress={setMobileNumber}
              color="#2DA194"
              style={{ width: width - 100, marginTop: 25 }}
            >
              Get OTP
            </Button>
            {formData.errorMessage ? (
              <Text style={styles.error}>{formData.errorMessage}</Text>
            ) : null}
            {errorMessage ? (
              <Text style={styles.error}>{errorMessage}</Text>
            ) : null}
          </Block>
        </Block>
      ) : (
        <Block style={{ padding: 15, marginTop: 30 }}>
          <Block center style={[{ width: "50%" }, styles.AlignCenter]}>
            <Ionicons
              onPress={handeOtpBack}
              name="arrow-back"
              size={24}
              style={{ marginRight: 5 }}
              color="black"
            />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Enter OTP</Text>
          </Block>

          <View style={{ justifyContent: "center", zIndex: 10, marginTop: 20 }}>
            <OtpInput length={4} onComplete={handleOtpComplete} />
          </View>
          <Block center>
            <Button
              onPress={handleLogin}
              color="#2DA194"
              style={{ width: width - 100, marginTop: 25, zIndex: 10 }}
              loading={Loading}
            >
              Login
            </Button>
            {/* <Button  onPress={setMobileNumber} color="#2DA194" style={{ width:"85%",marginTop:25 }} >Get OTP</Button> */}

            {formData.errorMessage ? (
              <Text style={styles.error}>{formData.errorMessage}</Text>
            ) : null}
          </Block>
        </Block>
      )}

      {/* <KeyboardAvoidingView
        behavior="position"
        contentContainerStyle={{ flex:1 }}
       
      > */}
      <Block style={styles.bottomBlock}>
        <Image source={bg} style={{ width: "100%" }} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Don't have an account?</Text>
          <Text style={styles.text} onPress={handelSignup}>
            {" "}
            Sign up{" "}
          </Text>
        </View>
      </Block>
      {/* </KeyboardAvoidingView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    minHeight: height,
  },
  AlignCenter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  Space_Around: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  Space_Between: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "grey",
    borderBottomWidth: 0.5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
  borderView: {
    borderWidth: 1,
    borderColor: "red",
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomBlock: {
    position: "absolute",
    bottom: 80,
    width: width,
  },
  textContainer: {
    position: "absolute",
    bottom: 40, // Adjust as needed
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
