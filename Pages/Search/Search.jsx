import { Block, Input } from 'galio-framework'
import React from 'react'
import { StyleSheet, Text, View,Dimensions, SafeAreaView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { StatusBar } from "expo-status-bar";
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions;
export const Search = () => {
    const navigation = useNavigation()

   const handelBackButton=()=>{
         navigation.goBack()
    }
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Block style={{backgroundColor:"#FFF"}}>

        <Block style={{marginTop:0,padding:5}}>
            {/* <Block  style={{width:"10%",alignItems:"center",padding:5}}>
            <Ionicons onPress={handelBackButton} name="arrow-back-outline" style={{marginTop:15}} size={27} color="black" />
            </Block> */}

            <Block style={{padding:5}} >
            <Input
            placeholder="Search location ..."
            left
            icon="search1"
            family="antdesign"
            iconSize={19}
            iconColor="grey"
            style={{borderWidth:0,}}
          />
          <Block style={{borderTopWidth:0.5,borderColor:"grey"}}>

          </Block>
          <Block style={[styles.Space_Between,{marginTop:15}]}>
            <Block style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
            <MaterialIcons style={{marginLeft:12}}  name="my-location" size={24} color="grey" />
            <Text style={{marginLeft:10}}>Current Location</Text>
            </Block>

            <Block>
            <MaterialIcons name="arrow-forward-ios" size={20} color="grey" />
            </Block>
         
          </Block>
            </Block>
       
        </Block>

        </Block>

        <Block style={{backgroundColor:"#FFF",marginTop:10}}>

        </Block>
        
       
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        minHeight:height,
        
      },
    viewModelCenter: {
  
      justifyContent:'flex-end',
      margin: 0,
      minHeight:height,
    },
    centeredView: {
      flex: 0.25,
      justifyContent: "flex-end",
      alignItems: "center",
      marginBottom: -50,
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderTopLeftRadius: 35,
      borderTopRightRadius: 35,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width: width,
      height: height - 400,
    },
    border: {
      borderWidth: 1,
      borderColor: "blue",
    },
    Center: {
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
    shadow: {
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      shadowOpacity: 0.2,
      elevation: 2,
    },
    button: {
      width: width,
    },
  });