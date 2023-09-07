import React, { useEffect, useState } from 'react'
import {  View,Image, TouchableOpacity, StyleSheet, ScrollView,Dimensions } from 'react-native'
import { SamllCards } from '../../Components/Cards/SamllCards';

import TotalKm from "../CarImages/TotalKm.png";
import Co2 from "../CarImages/Co2.png";
import wallet from "../CarImages/wallet.png";
import img4 from '../CarImages/TataTigoEv.png'
import img5 from '../CarImages/MgZ5EV.png'
import AddImg from '../CarImages/AddImg.png'
import profilePic from "../CarImages/profilepic.png"
import EditGreen from "../CarImages/editgreen.png"
import editgray from "../CarImages/editgray.png"
import Atsymbol from "../CarImages/At_symbol.png"
import phone from "../CarImages/phone.png"
import Emission from '../CarImages/Emission.png'
import ChargingSession from '../CarImages/ChargingSession.png'
import FrequentChargers from '../CarImages/FrequentChargers.png'
import SavedTrips from '../CarImages/SavedTrips.png'
import { CarCard } from '../../Components/Cards/CarCard';
import { Block,theme,Button ,Text} from 'galio-framework';
import { materialTheme } from '../../constants/Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginModel } from '../../Components/LoginModel/LoginModel';
import { useAppContext } from '../../Context/AppContext';
const { width } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;
export const Profile = ({navigation}) => {
  const {isLoggedIn,setIsLoggedIn,modalVisible,selectedTabs} = useAppContext();

  const data=[
    {name:"Tata Tiago EV",subtitle:"Mileage range 315 km",img:img4},
    {name:"MG Z5 EV",subtitle:"Mileage range 315 km",img:img5},
   
    
  ]
  const handleLogout = async () => {
    console.log("logout")
    try {
      await AsyncStorage.removeItem('Auth');
      setIsLoggedIn(false)
      // await AsyncStorage.removeItem('isAppFirstLaunched'); // Remove authentication status
      navigation.navigate('Login');
      // You can perform any other logout-related tasks here
    } catch (error) {
      console.error('Error clearing authentication status:', error);
    }
  };

  const handelAddVehicle=()=>{
      navigation.navigate("SelectVehicle")
  }
  return (
    <View style={[styles.container]}>
      
        <ScrollView style={[{flex:1}]}>
      
        <View >
        
        <View style={{flexDirection:"row"}}>
            <View style={{ width: 106, height: 106 }}>
              <Image source={profilePic} style={{ width:106, height:106,borderRadius:100 }} />
              <TouchableOpacity style={{ position: 'absolute', bottom: 1, right: 6 }}>
                <Image source={EditGreen} />
              </TouchableOpacity>
            </View>
  
            
            <View style={{marginLeft:25,marginTop:10}} >
              {/* User Info */}
              <View style={styles.Space_Between}>
                <Text style={{ fontSize: 20, color: '#4E5053' }}>Akshay</Text>
                <Image  source={editgray}/>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 12, alignItems: 'center' }}>
                <Image source={Atsymbol} />
                <Text style={{ fontSize: 14, color: '#B9B9B9', marginLeft: 6 }}>ronakvaya@gmail.com</Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 12, alignItems: 'center' }}>
                <Image source={phone} />
                <Text style={{ fontSize: 14, color: '#B9B9B9', marginLeft: 6 }}>+91 9090909090</Text>
              </View>
            </View>
          
         
        </View>
  
        <View style={[{marginTop:30},styles.Space_Between]}>
          <SamllCards Icon={TotalKm} text1="57" text2="Total Km" Color="#F26522" Color2="#F8941E" />
          <SamllCards Icon={Co2} text1="187" text2="kg Co Saved" Color="#37CE86" Color2="#37CE86" />
          <SamllCards Icon={wallet} text1="14" text2="Balance" Color="#F26522" Color2="#F8941E" />
         
        </View>
        </View>
  
        <View style={[{marginTop:30,marginLeft:5}]}>
          <Text style={{fontSize:17,fontWeight:700,color:"#4E5053"}}>My Vehicles</Text>
        </View>
  
        <View>
          {
            data.map((el , index)=>{
              return (
                 <CarCard key={index} Icon={el.img} Title={el.name} Subtitle={el.subtitle}/>
              )
            })
          }
  
  <TouchableOpacity onPress={handelAddVehicle}>

  
  <Block style={[styles.containerCarCard,styles.Space_Around,styles.CardBorder]}>
          
          
           
          <Block style={{flexDirection:"row"}}>
          {/* <Block style={[styles.CardBorder]}>
             <Text style={{backgroundColor:"#F26522",color:"#F26522"}}>s</Text>
         </Block> */}
         <Image source={AddImg} style={{width:36.25,height:36.25}} ></Image>
         </Block>
  
         <Block>
             <Text style={{fontSize:20,fontWeight:900,color:"#878787"}}>Add Vehicle</Text>
            
         </Block>
          
        
        </Block>
        </TouchableOpacity>
          </View>
  
          <View style={[{marginTop:30},styles.Space_Between]}>
          <SamllCards Icon={ChargingSession} text1="" text2="Charging Session" Color="#1B998B" Color2="#1B998B" />
          <SamllCards Icon={SavedTrips} text1="" text2="Saved Trips" Color="#1B998B" Color2="#1B998B" />
          <SamllCards Icon={FrequentChargers} text1="" text2="Frequent Chargers" Color="#1B998B" Color2="#1B998B" />
          
          </View>
  
          <View style={[{marginTop:30},styles.Space_Between]}>
          <SamllCards Icon={ChargingSession} text1="" text2="Charging Session" Color="#1B998B" Color2="#1B998B" />
          <SamllCards Icon={SavedTrips} text1="" text2="Saved Trips" Color="#1B998B" Color2="#1B998B" />
          <Block style={{width:97,height:97}}>
          
          </Block>
          
          </View>
  
          <View style={{marginBottom:60,marginTop:30}}>
            <Button color="#1B998B" style={[styles.button, styles.shadow]} onPress={handleLogout}>Log Out</Button>
          </View>
       
          
      </ScrollView>
     
        
      
      
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10
    
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
  });