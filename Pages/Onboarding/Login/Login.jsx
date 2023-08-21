import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Image, ScrollView } from 'react-native'
import bg from "../Images/LoginBG.png"
import {  Block, Text, Input, theme,Button} from 'galio-framework';
import { NavigationActions } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
export const Login = ({navigation}) => {
  const initalValues={
    username: '',
    password: '',
    errorMessage: '',
  }
    const [formData, setFormData] = useState(initalValues);

      const handleLogin = () => {
        if (formData.username === 'admin' && formData.password === 'admin') {
          setFormData(initalValues);
          navigation.navigate('Tabs');
        } else {
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

  return (
     <Block  style={styles.container}>
      <StatusBar style="auto" />
      <Block style={{padding:15,marginTop:30}}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={formData.username}
        onChangeText={(value) => handleInputChange('username', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={formData.password}
        onChangeText={(value) => handleInputChange('password', value)}
      />
      <Block style={styles.AlignCenter}>
      <Button  onPress={handleLogin} color="#2DA194" style={{ width:"85%" }} >Login</Button>
      {formData.errorMessage ? <Text style={styles.error}>{formData.errorMessage}</Text> : null}
      </Block>
      
      </Block>
      
      
      <Block style={styles.bottomBlock}>
        <Image source={bg} style={{ width:"100%"}}  />
        <View style={styles.textContainer} >
        <Text style={styles.text}>Don't have an account?</Text>
        <Text style={styles.text} onPress={handelSignup}  > Sign up </Text>
      </View>
      </Block>



    </Block>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
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