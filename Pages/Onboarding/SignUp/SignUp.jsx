import React, { useRef, useState } from 'react'
import { View, TextInput, StyleSheet, Image, ScrollView,Dimensions } from 'react-native'
import bg from "../Images/LoginBG.png"
import {  Block, Text, Input, theme,Button} from 'galio-framework';
import PhoneInput from "react-native-phone-number-input";
import { Base_Url } from '../../../Base_Urls/BaseUrl';
import axios from 'axios';
const { width,height} = Dimensions.get('screen');
export const SignUp = ({navigation}) => {

    const initalValues=
        {
            name: '',
            password: '',
            confirm_password: '',
            
          }
    
    const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);
  const [formData, setFormData] = useState(initalValues);
  const [Loading,setLoading] = useState(false);

  const handelSignup=async()=>{
    setLoading(true)
    const checkValid = phoneInput.current?.isValidNumber(value);
    
    setValid(checkValid ? checkValid : false);
    console.log("handelSignup",value,formData);
    if(!checkValid || formData.password !== formData.confirm_password){
      setShowMessage(true);
      setLoading(false)
      return ;             
    }
    setShowMessage(false);
    try{
      
      const res = await axios.post(`${Base_Url.App}customers/signup`, 
      {
        name:formData.name,
        email: "",
        phone_number:value ,
        password:formData.password,
        cpoId:"64afa5e0720c21517f1b1844",
      }
      
      )
      console.log("In try")

      console.log("res cpo add ==>",res.data.data)
      if(res.data){
        setFormData(initalValues);
        setFormattedValue("");
        setValue("")
        setValid(false);
        setShowMessage(false);
        setLoading(false)
        navigation.navigate('Login');
      }
  }
  catch(err){
     console.log("error in user adding",err)
     setLoading(false);
  }
    
   
              
  }

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  return (
    <Block  style={styles.container}>
      
      <Block style={{padding:15,marginTop:30}}>

      <PhoneInput
     
        ref={phoneInput}
        defaultValue={value}
        defaultCode="IN"
        layout="first"
        onChangeText={(text) => {
          setValue(text);
        }}
        onChangeFormattedText={(text) => {
          setFormattedValue(text);
        }}
        
        autoFocus
        containerStyle={styles.inputContainer}
        textInputStyle={styles.inputText}
        textContainerStyle={{backgroundColor: '#fff'}}
          />
         

         <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={formData.name}
        onChangeText={(value) => handleInputChange('name', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={formData.password}
        onChangeText={(value) => handleInputChange('password', value)}
        maxLength={4}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={formData.confirm_password}
        onChangeText={(value) => handleInputChange('confirm_password', value)}
        maxLength={4}
      />
      <Block style={styles.AlignCenter}>
      <Text style={{color:"grey",fontSize:10,marginBottom:20}}>By tapping on 'Sign Up' , you agree to the Terms of Use and Privacy Policy</Text>
      
      {showMessage && (
            <View style={styles.message}>
              <Text style={{ color: 'red' }}>Invalid fields. Try Again!</Text>
            </View>
          )}
      <Button  onPress={handelSignup} loading={Loading} color="#2DA194" style={{ width:"85%" }} >Sign Up</Button>
      
      </Block>
      
      </Block>
      
      
     



    </Block>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      minHeight:height
    },
    AlignCenter:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    inputContainer: {
        width: '100%',
        borderColor: 'grey',
        borderBottomWidth: 0.5,
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