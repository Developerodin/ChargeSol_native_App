import React, { useEffect, useState } from 'react'
import {  View,Image,Dimensions, StyleSheet } from 'react-native'
import MainMeter from "../CarImages/ChargingMeterMain.png";
import ChargeLogo from "../CarImages/ChargeLogo.png";
import ChargingMeterO from "../CarImages/ChargingMeterO.png";
import ChargingMeterB from "../CarImages/ChargingMeterB.png";
import TimeLogo from "../CarImages/TimeLogo.png";
import UnitLogo from "../CarImages/UnitLogo.png";
import { Block,Button,Text } from 'galio-framework';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Base_Url } from '../../Base_Urls/BaseUrl';
import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const{width,height}= Dimensions
export const Charging = () => {
  const cpId = 'CP1231';
  const userId ='+919694998693';
  const connector_id = '1';
  const companyId = '651536095ad1d151264fc5b6';
  const transactionId = 13910;
  const navigation = useNavigation();
  const payload= {
    "transaction": [
      {
        "_id": "648fd58df5edc51e631673f4",
        "transactionId": 13910,
        "start": {
          "_id": "648fd59b872b902c86abab8c",
          "at": "2023-06-19T04:11:57Z",
          "value": 0,
          "unit": "Wh"
        },
        "basicDetails": {
          "_id": "648fd59b872b902c86abab8d",
          "status": "ongoing",
          "chargePointId": "PE1234",
          "chargingStationId": "624eb64e4c1aea497d545110",
          "connectorId": 1,
          "idTag": "",
          "userId": "653265653221",
          "mode": null,
          "value": null,
          "company": "gen"
        },
        "ongoing": {
          "_id": "648fd59b872b902c86abab8e",
          "at": "2023-06-19T04:11:57Z",
          "value": 12,
          "context": "Sample.Periodic",
          "unit": "Wh",
          "connector_id": 1,
          "remainingTime": 0
        },
        "id": "648fd58df5edc51e631673f4"
      }
    ]
  }
  const [stopChargingResponse, setstopChargingResponse] = useState(null);
  const [ongoingChargingTransactions, setongoingChargingTransactions] = useState(payload);
  const [PluEasyToken,setPluEasyToken] = useState("")
  
  const showToast = (text1) => {
    ToastAndroid.show(text1, ToastAndroid.SHORT);
  };

  const fetchOngoingChargingTransactions = async () => {
    const header ={
      Authorization:PluEasyToken,
      CompanyId : companyId
    }
    try {
      const response = await axios.get(
        `https://api.plugeasy.in/api/ev/ongoing?cpid=${cpId}`,
        {
          headers : header
        }
      );
        const Data = response.data
      if(Data.success === true){
        setongoingChargingTransactions(Data.payload);
      }

      
      return response.data;
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const stopCharging = async () => {
    const header ={
      Authorization:PluEasyToken,
      CompanyId : companyId
    }
    try {
      const response = await axios.post(
        `${Base_Url.Charger}remote-stop-transaction`,
        {
          cpId: cpId, // Replace with the actual charge point ID
          transactionId:transactionId, // Replace with the actual transaction ID
        },
        {
          headers : header
        }
      );
    
      setstopChargingResponse(response.data);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handelStopCharging=()=>{
    stopCharging().then((res)=>{
      console.log("res ===>",res)

      if(res.payload.status === "Accepted"){
        navigation.navigate("Charging Complete")
      }
      else{
            showToast(res.payload.status)
            // navigation.navigate("Charging Complete")
      }
    })
    
  }

  useEffect(()=>{
    AsyncStorage.getItem('PlugEasy_Token')
    .then(token => {
      if (token !== null) {
        // Token is available, you can use it
        console.log('Token:', token);
        setPluEasyToken(token)
      } else {
        // Token not found
        console.log('Token not found in AsyncStorage');
      }
    })
    .catch(error => {
      console.error('Error retrieving token:', error);
    });
 
    fetchOngoingChargingTransactions()
    
  },[])
 

  
  return (
    <View style={styles.container}>
    <Block center style={{marginTop:60}}>
      <Image source={MainMeter}/>
      <Block style={{flexDirection:"row",alignItems:"center"}}>
        <Image source={ChargeLogo}/>
        <Text style={{marginLeft:10,fontSize:23,fontWeight:"bold"}}>0 %</Text>
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