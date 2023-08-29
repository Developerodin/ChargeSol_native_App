import { Block,Text } from 'galio-framework'
import React from 'react'
import { Image, StyleSheet } from 'react-native'

export const ChargerInfoCard = (props) => {
    const{Img,Status,Text1,Text2,StatusColor,bgColor} =props
  return (
    <Block style={[{backgroundColor:`${bgColor}`},styles.container]}>
      <Block center style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
        <Image source={Img}></Image>
        <Text style={{color:`${StatusColor}`,marginLeft:10,fontWeight:"bold",fontSize:16}}>{Status}</Text>
      </Block>
      <Block style={{marginTop:10}}>
        <Block center>
        <Text style={{fontWeight:500,fontSize:15}}>{Text1}</Text>
        <Text>{Text2}</Text>
        </Block>
       
      </Block>
    </Block>
  )
}

const styles = StyleSheet.create({
    container: {
     
      width:159,
      borderRadius:15,
      backgroundColor:"#FFFF",
      elevation:6,
      marginTop:20,
      padding:15
    },
    Center:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center'
      }
})