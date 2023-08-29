import { Block, Button, Card, Text,theme } from 'galio-framework'
import React from 'react'
import { StyleSheet,Dimensions, Image } from 'react-native'
import { materialTheme } from '../../constants/Theme';
const { width } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;
export const BorderCard = (props) => {
    
    const {Icon,Title,Subtitle}=props;
  return (
    
       <Block style={[styles.container,styles.Space_Between,styles.CardBorder]}>
        
        
         
        
            <Text style={{fontSize:16,fontWeight:900,color:"#878787"}}>{Title}</Text>
            <Text style={{fontSize:14,fontWeight:600,color:"#878787",marginTop:5}}>{Subtitle}</Text>
        
         
       
       </Block>
            
            
           
         
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
      width:"100%",
      
      borderRadius:5,
      backgroundColor:"#FFFF",
      elevation:5,
      marginTop:20,
      padding:15
    },
    Border:{
      borderWidth:1,
      borderColor:"red"
    },
    CardBorder:{
        borderLeftWidth: 6,
        borderLeftColor: "#F26522",
    },
    Space_Between:{
   
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:"center"
        
      }
  });