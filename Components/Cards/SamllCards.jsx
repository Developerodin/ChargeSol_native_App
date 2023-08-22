import { Block, Button, Card, Text,theme } from 'galio-framework'
import React from 'react'
import { StyleSheet,Dimensions, Image } from 'react-native'
import { materialTheme } from '../../constants/Theme';
const { width } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;
export const SamllCards = (props) => {
    
    const {Icon,text1,text2,Color,Color2}=props;
  return (
    
       <Block style={[styles.container]}>
         <Block style={{marginTop:8}}> 
            <Image source={Icon} style={{}} ></Image>
         </Block>
         <Block style={{ marginTop: text1 === "" ? 15 : 8 }}>
            {
               text1 !== ""  &&<Text  style={{fontSize:18,fontWeight: "bold",color:`${Color}`}}>{text1}</Text>
            }
        
            <Text style={{fontSize:12,fontWeight: "bold",color:`${Color2}`}}>{text2}</Text>
         </Block>
       </Block>
            
            
           
         
  )
}

const styles = StyleSheet.create({
    container: {
      width:97,
      height:97,
      borderRadius:10,
      padding:5,
      backgroundColor:"#FFFF",
      elevation:3
    },
    Border:{
      borderWidth:1,
      borderColor:"red"
    }
  });