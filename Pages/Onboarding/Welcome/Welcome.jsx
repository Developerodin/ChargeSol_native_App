import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View ,Dimensions} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import BG from "../../CarImages/WelocmeScreen/bgImg.png"
import Ionicons from "@expo/vector-icons/Ionicons";
import { Block } from 'galio-framework';
import { Feather } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'
const { width,height } = Dimensions.get('screen');
export const Welcome = ({navigation}) => {
  const handelBegin=()=>{
    navigation.navigate("AppSlides")
  }
  useEffect(()=>{

    
    
  },[])
  return (
    <View style={styles.container}>
      
        <Image style={styles.Image} source={BG}></Image>
        <Block center style={styles.Text_Container}>
          <Text style={{fontWeight: 600,fontSize:32,color:"#FFF",letterSpacing:3}}>
          WELCOME
          </Text>
          <Text style={{fontWeight: 600,fontSize:16,color:"#FFF",marginTop:10,letterSpacing:2}}>To the ChargeSol</Text>
          <Text style={{fontWeight: 600,fontSize:18,color:"#FFF",letterSpacing:2,lineHeight:30,marginTop:60}}>
          We aim to provide an integrated platform that builds a vast ChargeSol
          network to provide access to numerous E-Mobility partners.
          </Text>

<View  style={{flexDirection:"row",justifyContent:"left",alignItems:"center",marginTop:100,padding:5}}>
<Text  style={{fontWeight: 600,fontSize:16,color:"#FFF",letterSpacing:3}}>LET'S BEGIN </Text>
<Feather name="arrow-right-circle" size={24} color="#FFF" />
</View>
          
        </Block>
        <StatusBar  hidden={true} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width:width,
    height:height
  },
  Text_Container:{
    flex: 0.9,
    justifyContent:"center",
    alignItems:"left",
    padding:30
  },
  Image: {
    ...StyleSheet.absoluteFillObject,
    height:height,
    width : width
},

  });