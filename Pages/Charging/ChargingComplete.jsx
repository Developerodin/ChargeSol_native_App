import React from 'react'
import {  View,Image,Dimensions, StyleSheet } from 'react-native'
import { Block,Button,Text } from 'galio-framework';
import { useNavigation } from '@react-navigation/native';
import MainMeter from "../CarImages/ChargingMeterMain.png";
import ChargingMeterO from "../CarImages/ChargingMeterO.png";
import ChargingMeterB from "../CarImages/ChargingMeterB.png";
import TimeLogo from "../CarImages/TimeLogo.png";
import UnitLogo from "../CarImages/UnitLogo.png";
import ChargeLogo from "../CarImages/ChargeLogo.png";
const{width,height}= Dimensions
export const ChargingComplete = () => {
  const navigation = useNavigation();

  const handelPayNow=()=>{
    navigation.navigate("Payment Successfull")
  }
  
  return (
    <View style={styles.container}>
       <Block center style={{marginTop:60}}>
      <Image source={MainMeter}/>
      <Block style={{flexDirection:"row",alignItems:"center"}}>
        <Image source={ChargeLogo}/>
        <Text style={{marginLeft:10,fontSize:23,fontWeight:"bold"}}>100%</Text>
      </Block>
    </Block>

    <Block style={[styles.Space_Around,{marginTop:50}]}>
       <Block center>
       <Text style={{fontSize:16,fontWeight:500}}>Charge Time</Text>
       <Block center style={{flexDirection:"row",alignItems:"center",marginTop:10}}>
        <Image source={TimeLogo}/>
        <Text style={{marginLeft:10,fontSize:23,fontWeight:"bold"}}>58 min</Text>
      </Block>
       
       </Block>

       <Block center>
       <Text style={{fontSize:16,fontWeight:500}}>Charge Units</Text>
       <Block center style={{flexDirection:"row",alignItems:"center",marginTop:10}}>
        <Image source={UnitLogo}/>
        <Text style={{marginLeft:10,fontSize:23,fontWeight:"bold"}}>32.5 kW</Text>
      </Block>
       
       </Block>

    </Block>

    <Block style={{borderTopWidth:0.5,marginTop:50}}>

      <Block style={{marginTop:10,padding:30}}>
        <Text style={{fontSize:25,fontWeight:"bold"}}>₹ 658</Text>
        <Text style={{fontSize:16,fontWeight:500,marginTop:10}}>Payment Method</Text>
        <Text style={{fontSize:19,fontWeight:500,marginTop:10}}>Wallet</Text>
      </Block>
    </Block>

   
    <Block style={{marginTop:20}}>
   
   <Button color="#1B998B" style={[styles.button, styles.shadow]} onPress={handelPayNow} >PAY NOW</Button>

</Block>
   
    </View>
   
  )
}

const styles=StyleSheet.create({
  container: {
    flex: 1
    
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