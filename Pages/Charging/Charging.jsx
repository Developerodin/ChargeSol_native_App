import React from 'react'
import {  View,Image,Dimensions, StyleSheet } from 'react-native'
import MainMeter from "../CarImages/ChargingMeterMain.png";
import ChargeLogo from "../CarImages/ChargeLogo.png";
import ChargingMeterO from "../CarImages/ChargingMeterO.png";
import ChargingMeterB from "../CarImages/ChargingMeterB.png";
import TimeLogo from "../CarImages/TimeLogo.png";
import UnitLogo from "../CarImages/UnitLogo.png";
import { Block,Button,Text } from 'galio-framework';
import { useNavigation } from '@react-navigation/native';
const{width,height}= Dimensions
export const Charging = () => {
  const navigation = useNavigation();
  const handelStopCharging=()=>{
    navigation.navigate("Charging Complete")
  }
  return (
    <View style={styles.container}>
    <Block center style={{marginTop:60}}>
      <Image source={MainMeter}/>
      <Block style={{flexDirection:"row",alignItems:"center"}}>
        <Image source={ChargeLogo}/>
        <Text style={{marginLeft:10,fontSize:23,fontWeight:"bold"}}>20%</Text>
      </Block>
    </Block>

    <Block style={[styles.Space_Around,{marginTop:30}]}>
       <Block>
       <Image source={ChargingMeterO}/>
       <Block center style={{flexDirection:"row",alignItems:"center"}}>
        <Image source={TimeLogo}/>
        <Text style={{marginLeft:10,fontSize:13,fontWeight:"bold"}}>15 min</Text>
      </Block>
        <Block center>
          <Text>Time Elapsed</Text>
        </Block>
       </Block>

       <Block>
       <Image source={ChargingMeterB}/>
       <Block center style={{flexDirection:"row",alignItems:"center"}}>
        <Image source={UnitLogo}/>
        <Text style={{marginLeft:10,fontSize:13,fontWeight:"bold"}}>6 kW</Text>
      </Block>
        <Block center>
          <Text>Charge Units</Text>
        </Block>
       </Block>

    </Block>



    <Block style={{marginTop:150}}>
   
            <Button color="#1B998B" style={[styles.button, styles.shadow]} onPress={handelStopCharging} >STOP CHARGING</Button>
        
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