import React from 'react'
import { ImageBackground, View,Image,Dimensions, StyleSheet, ScrollView } from 'react-native'
import { Block,Button,Text } from 'galio-framework';
import { useNavigation } from '@react-navigation/native';
import receiptbg1 from "../CarImages/receiptbg1.png";
import receiptbg2 from "../CarImages/receiptbg2.png";
import paymnetImg from "../CarImages/paymnetimg.png";
const{width,height}= Dimensions;
export const Receipt = () => {
  const navigation = useNavigation();
  const handelContinue=()=>{
    navigation.reset({
        index: 0,
        routes: [{ name: 'Tabs' }],
      });
  }
  return (
    <ScrollView style={styles.container}>
      <Block style={{marginTop:30}}>
      <Text style={{color:"grey",fontSize:16,fontWeight:"bold"}}>12:07 11/03/2023</Text>
      </Block>

      <Block center style={{marginTop:30}}>
        <Text style={{fontWeight:"bold",fontSize:18,color:"#F26522"}} >ZEV Point Charging Station </Text>

        <Text style={{fontWeight:"bold",fontSize:14,color:"#F26522",marginTop:10}}>Hotel Royal Orchid , Durgapura </Text>
      </Block>
        
         <Block style={{marginTop:10,height:630}}>
        
         <ImageBackground source={receiptbg1} resizeMode="cover" style={[styles.image]} >
          <Block style={{marginTop:30}}>
            <Block style={[styles.Space_Between,{marginTop:5}]}>
                <Text style={styles.text}>Receipt code</Text>
                <Text style={styles.text}>#123494</Text>
            </Block>
            <Block style={[styles.Space_Between,{marginTop:15}]}>
                <Text style={styles.text}>Charger Name</Text>
                <Text style={styles.text}>ZEV Point Charging St</Text>
            </Block>
            <Block style={[styles.Space_Between,{marginTop:15}]}>
                <Text style={styles.text}>Connector</Text>
                <Text style={styles.text}>AC</Text>
            </Block>
           
          </Block>
          <Block style={{marginTop:30,borderTopWidth:1,borderColor:"grey"}}>
            <Block style={[styles.Space_Between,{marginTop:30}]}>
                <Text style={styles.text}>Units</Text>
                <Text style={styles.text}>18.05</Text>
            </Block>
            <Block style={[styles.Space_Between,{marginTop:15}]}>
                <Text style={styles.text}>Start Time</Text>
                <Text style={styles.text}>11/03/2023 11.06 am</Text>
            </Block>
            <Block style={[styles.Space_Between,{marginTop:15}]}>
                <Text style={styles.text}>Stop Time</Text>
                <Text style={styles.text}>11/03/2023 12.06 pm</Text>
            </Block>
           
          </Block>
    </ImageBackground>
    <ImageBackground source={receiptbg2} resizeMode="cover" style={[styles.image,{marginTop:-12}]} >
    <Block style={{marginTop:0,borderTopWidth:1,borderColor:"grey"}}>
            <Block style={[styles.Space_Between,{marginTop:30}]}>
                <Text style={styles.text}>Cost</Text>
                <Text style={styles.text}>₹ 451.05</Text>
            </Block>
            <Block style={[styles.Space_Between,{marginTop:15}]}>
                <Text style={styles.text}>CGST</Text>
                <Text style={styles.text}>₹ 40.59</Text>
            </Block>
            <Block style={[styles.Space_Between,{marginTop:15}]}>
                <Text style={styles.text}>SGST</Text>
                <Text style={styles.text}>₹ 40.59</Text>
            </Block>

            <Block style={[styles.Space_Between,{marginTop:15}]}>
                <Text style={styles.text}>Units</Text>
                <Text style={styles.text}>18.05 Kw</Text>
            </Block>
           
          </Block>
          <Block style={{marginTop:20}}>
   
   <Button color="#1B998B" style={[styles.button, styles.shadow]} onPress={handelContinue} >CONTINUE</Button>

</Block>
    </ImageBackground>
         </Block>
         

        
    </ScrollView>
    
  )
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    padding:10
    
  },
  image: {
    flex: 0.7,
    width:width,
    padding:20
   
  },
  text:{
    fontSize:13,
    color:"grey",
    fontWeight:"bold"

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