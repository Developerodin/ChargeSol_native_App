import React from 'react'
import {  View,Image,Dimensions, StyleSheet } from 'react-native'
import { Block,Button,Text } from 'galio-framework';
import { useNavigation } from '@react-navigation/native';
import paymnetImg from "../CarImages/paymnetimg.png";
const{width,height}= Dimensions;
export const PaymentSuccessfull = () => {
  const navigation = useNavigation();
  const handelReceipt=()=>{
     navigation.navigate("Receipt")
  }
  return (
    <View style={styles.container}>
      <Block style={{marginTop:30}}>
      <Text>#12349 bill has been paid</Text>
      </Block>
        

         <Block center style={{marginTop:60}}>
          <Image source={paymnetImg} />
         </Block>

         <Block center style={{marginTop:60}}>
           <Text style={{fontWeight:"bold",fontSize:19,color:"grey"}}>Thank you for uisng ou rservices !</Text>
        
          <Text style={{fontWeight:500,fontSize:14,color:"grey",marginTop:20}}>Your happiness is our pleasure</Text>
         </Block>

         <Block style={{marginTop:100}}>
   
   <Button color="#1B998B" style={[styles.button, styles.shadow]} onPress={handelReceipt} >RECEIPT</Button>

</Block>
    </View>
    
  )
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    padding:10
    
  },
  Subcontainer: {
    padding:10,
    
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    backgroundColor:"#FFF",
    marginTop:-20,
    height:height
    
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
    
    width: width,
  },
})