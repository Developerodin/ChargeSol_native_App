import React, { useRef, useState } from 'react'
import { View, TextInput, StyleSheet, Image, ScrollView,Dimensions } from 'react-native'
import bg from "../Images/LoginBG.png"
import {  Block, Text, Input, theme,Button} from 'galio-framework';
import PhoneInput from "react-native-phone-number-input";
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

  const handelSignup=()=>{
    
    const checkValid = phoneInput.current?.isValidNumber(value);
              setShowMessage(true);
              setValid(checkValid ? checkValid : false);

              console.log("handelSignup",formattedValue,formData);
              setFormData(initalValues);
              setFormattedValue("");
              setValue("")
              setValid(false);
              setShowMessage(false);

              navigation.navigate('Login');
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
          {showMessage && (
            <View style={styles.message}>
              <Text>Valid : {valid ? "true" : "false"}</Text>
            </View>
          )}

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
        
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={formData.confirm_password}
        onChangeText={(value) => handleInputChange('confirm_password', value)}
        
      />
      <Block style={styles.AlignCenter}>
      <Text style={{color:"grey",fontSize:10,marginBottom:20}}>By tapping on 'Sign Up' , you agree to the Terms of Use and Privacy Policy</Text>
      <Button  onPress={handelSignup} color="#2DA194" style={{ width:"85%" }} >Sign Up</Button>
      
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