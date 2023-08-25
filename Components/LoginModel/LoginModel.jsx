import React, {useRef, useState} from 'react';
import {Alert, Modal, StyleSheet, Pressable, View,Dimensions} from 'react-native';
import { useNavigation  } from "@react-navigation/native";

import { useAppContext } from '../../Context/AppContext';

import { AntDesign } from '@expo/vector-icons'; 
import {  Block, Text, Input, theme,Button} from 'galio-framework';
import { NavigationActions } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PhoneInput from "react-native-phone-number-input";
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import OtpInput from '../Otp/OtpInputs';
import { LinearGradient } from 'expo-linear-gradient';
const { width,height} = Dimensions.get('screen');
export const LoginModel = () => {
  const navigation = useNavigation();
    const {modalVisible, setModalVisible,isLoggedIn, setIsLoggedIn} = useAppContext();

   const  handelModelClose=()=>{
      console.log("Model CLick")
          setModalVisible(!modalVisible);
          navigation.navigate("Home")
    }

    const phoneInput = useRef(null);
    const initalValues={
      number: '',
      otp: '',
      errorMessage: '',
    }
      const [formData, setFormData] = useState(initalValues);
      const [otp, setOtp] = useState('');
      const [mobileNumber, setmobileNumber] = useState();
      const [formattedValue, setFormattedValue] = useState("");
      const [errorMessage, setErrorMessage] = useState("")
        const handleLogin = async() => {
          if (formData.number === '9090909090' && otp === '1234') {
            // localStorage.setItem("Auth",true)
            try {
              await AsyncStorage.setItem('Auth','true');
              console.log("Login==>",formData,otp)
            setFormData(initalValues);
            setIsLoggedIn(true);
            setModalVisible(false);
            navigation.navigate('Tabs');
            } catch (e) {
              // saving error
              console.log("Error saving Auth:",e)
            }
            
          } else {
            console.log("Login err==>",formData,formattedValue)
            setFormData({ ...formData, errorMessage: 'Invalid username or password' });
          }
        };
        const handelSignup=()=>{
          setFormData(initalValues);
          navigation.navigate('SignUp');
        }
      
        const handleInputChange = (field, value) => {
          setFormData({ ...formData, [field]: value });
        };
  
        const handleOtpComplete = (otp) => {
          console.log('OTP entered:', otp);
          setOtp(otp);
          // You can perform any actions with the completed OTP here
        };
  
        const setMobileNumber=()=>{
          console.log("true")
          if(formData.number.length >= 10){
            setmobileNumber(true);
            setErrorMessage("")
          }
          else{
            setErrorMessage("Enter A Valid Mobile Number")
            setTimeout(()=>{
              setErrorMessage("")
            },2000)
            
          }
          
        }
  
        const handeOtpBack=()=>{
          setmobileNumber(false);
        }
        const handleSkip = () => {
          console.log("Handel SKip")
          navigation.navigate('Tabs'); // Navigate to Tabs and specify the Home tab
        };
  
    return (
  
    

    
      <Modal
       
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          handelModelClose()
        }}>
        <View style={[styles.centeredView]}>
          <View style={styles.modalView}>
         <Block right style={{width:width,marginTop:-20}}>
       
              <AntDesign style={{marginRight:10}} onPress={() => handelModelClose()} name="closecircleo" size={34} color="#2DA194" />
         
         </Block>
          <Text style={styles.modalText}>Login / Signup</Text>
           

            {!mobileNumber ? 
      (
        <Block style={{marginTop:30,width:width}}>
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
      handleInputChange('number', value)
     }}
     onChangeFormattedText={(text) => {
       setFormattedValue(text);
     }}
     containerStyle={styles2.inputContainer}
     textInputStyle={styles2.inputText}
     textContainerStyle={{backgroundColor: '#fff'}}
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
      <Button  onPress={setMobileNumber} color="#2DA194" style={{ width:width-100,marginTop:25 }} >Get OTP</Button>
      {formData.errorMessage ? <Text style={styles2.error}>{formData.errorMessage}</Text> : null}
      {errorMessage ? <Text style={styles2.error}>{errorMessage}</Text> : null}
      </Block>
      
      </Block>
      )
      :
      (
        <Block  style={{marginTop:30,width:width}}>
        <Block center style={[{width:"50%"},styles2.AlignCenter]}>
        <Ionicons onPress={handeOtpBack} name="arrow-back" size={24} style={{marginRight:5}} color="black" />
        <Text style={{fontSize:20,fontWeight:"bold"}}>Enter OTP</Text>
        
        </Block>
       
     
     <View style={{justifyContent:"center",zIndex:10,marginTop:20}}>
        <OtpInput length={4} onComplete={handleOtpComplete} />
      </View>
        <Block center style={styles.AlignCenter}>
        <Button  onPress={handleLogin} color="#2DA194" style={{ width:width-100,marginTop:25,zIndex:10 }} >
          Log In
        </Button>
        {/* <Button  onPress={setMobileNumber} color="#2DA194" style={{ width:"85%",marginTop:25 }} >Get OTP</Button> */}
        {formData.errorMessage ? <Text style={styles.error}>{formData.errorMessage}</Text> : null}
        </Block>
        
        </Block>
      )
}
          </View>
        </View>
      </Modal>
     
  )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
     marginBottom:-50
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderTopLeftRadius:35,
      borderTopRightRadius: 35,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width:width,
      height:height-400
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginTop: 15,
      marginBottom: 15,
      textAlign: 'center',
      fontSize:45,
      fontWeight:"bold",
      color:"#2DA194"
    },
  });

  const styles2 = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    AlignCenter:{
      flexDirection: 'row',
      justifyContent:"center",
      alignItems:"center"
    },
    Space_Around:{
      flexDirection: 'row',
      justifyContent:'space-around',
      alignItems:"center"
      
    },
    Space_Between:{
     
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems:"center"
      
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      width: '100%',
      height: 40,
      borderColor:"grey",
      borderBottomWidth:0.5,
      marginBottom: 20,
      paddingHorizontal: 10,
     
    },
    error: {
      color: 'red',
      marginTop: 10,
    },
    borderView: {
        borderWidth: 1,
        borderColor: 'red',
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
      },
      bottomBlock:{
       position: 'absolute',
       bottom:0,
       width:"100%"
      },
      textContainer: {
        position: 'absolute',
        bottom: 40, // Adjust as needed
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
  });