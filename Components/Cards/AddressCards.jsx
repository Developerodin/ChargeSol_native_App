import { Block ,Text} from 'galio-framework'
import React from 'react'
import { Image, StyleSheet } from 'react-native'

export const AddressCards = (props) => {
    const {Title,SubTitle,Icon1,Icon2,Icon3,SubText1,SubText2} = props
  return (
    <Block style={styles.Subcontainer}>
     <Block style={{flexDirection:"row",alignItems:"center"}}>
     <Image style={{width:15 , height:15,marginRight:6}} source={Icon1}></Image>
        <Text style={{fontWeight:600,fontSize:16}}>{Title}</Text>
     </Block>

     <Block style={{marginTop:6}}>
        <Text style={{fontWeight:400,fontSize:15,lineHeight:15}}>{SubTitle}</Text>
     </Block>

     <Block style={[styles.Space_Between,{marginTop:15,borderTopWidth:0.5}]}>
        <Block style={[styles.Center,{marginTop:15}]}>
            <Image style={{width:15 , height:15,marginRight:3}} source={Icon2}></Image>
            
            <Text>{SubText1}</Text>
        </Block>

        <Block style={[styles.Center,{marginTop:15}]}>
        <Image style={{width:15 , height:15,marginRight:3}} source={Icon3}></Image>
            
            <Text>{SubText2}</Text>
        </Block>
     </Block>
    </Block>
  )
}

const styles=StyleSheet.create({
    Subcontainer: {
      padding:15,
      borderRadius:5,
      elevation:3
     
      
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
   
  })