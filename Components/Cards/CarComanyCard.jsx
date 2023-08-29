import { Block, Card,Text,theme} from 'galio-framework'
import React from 'react'
import { Dimensions, Image, StyleSheet } from 'react-native'
const {width,height} = Dimensions
export const CarComanyCard = (props) => {
    const {Icon,Title,Color,bgColor} = props
  return (
    <Block style={[styles.container,styles.Space_Around,{backgroundColor:`${bgColor}`}]}>
       <Block  style={{borderRadius:15,backgroundColor:"#FFFf",display:'flex',justifyContent:"center",width:24,height:24,alignItems:"center"}}>
       <Image style={{width:16,height:14}} source={Icon}></Image>
       </Block>
       
       <Text style={{color:`${Color}`,fontSize:14,fontWeight:600}}>{Title}</Text>
    </Block>
  )
}
const styles=StyleSheet.create({
    container: {
      width:"40%",
      padding:10,
      borderRadius:5,
      elevation:3,
      
     
    },
    Subcontainer: {
      padding:10,
      borderWidth:1,
      borderTopRightRadius:20,
      borderTopLeftRadius:20,
      backgroundColor:"#FFF",
      marginTop:-20
      
    },
    containerCarCard:{
      flexDirection:"row",
      width:"100%",
      height:70,
      borderRadius:5,
      backgroundColor:"#FFFF",
      elevation:3,
      marginTop:20,
      padding:15
    },
    CardBorder:{
      borderLeftWidth: 6,
      borderLeftColor: "#F26522",
  },
    border:{
      borderWidth:1,
      borderColor:"blue"
    },
    Center:{
      flexDirection:'row',
      justifyContent: 'center',
      alignItems:'center'
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
    shadow: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      shadowOpacity: 0.2,
      elevation: 2,
    },
    button: {
      marginBottom: theme.SIZES.BASE,
      width: width - (theme.SIZES.BASE * 2),
    },
  })