import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet,Dimensions, View, Image} from 'react-native'
import { Block,theme,Button ,Text} from 'galio-framework';
import { ChargerCard } from '../../Components/Cards/ChargerCard';
import star from "../CarImages/images/starimage.png"
import Sicon from "../CarImages/images/sicon.png"
import TataIcon from "../CarImages/images/tataicon.png"
import AcIcon from "../CarImages/images/aciocn.png"
import DcIcon from "../CarImages/images/dcicon.png"
import { LoginModel } from '../../Components/LoginModel/LoginModel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppContext } from '../../Context/AppContext';

const { width,height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;
const InitialChargerData=[
  {StaionID:"48",lat:26.833408,lng:75.7141464,title:"Highway King Neemrana",icon:"assets/icon/IconM.gif",Rating:"4.5",Status:"Available",Place:"Neemrana",Distance:"10 km",Reviews:"23",travelTime:"18"},
  {StaionID:"25",lat:26.8416388,lng:75.7189965,title:"Highway King Kotputli",icon:"assets/icon/IconS.png",Rating:"5",Status:"Available",Place:"Kotputli",Distance:"11 km",Reviews:"40",travelTime:"25"},
  {StaionID:"20",lat:26.8521512,lng:75.7141464,title:"Highway King Ridhi Sidhi",icon:"assets/icon/IconM.png",Rating:"3.5",Status:"Available",Place:"Ridhi Sidhi",Distance:"90 km",Reviews:"20",travelTime:"59"},
  {StaionID:"21",lat:26.8648938,lng:75.7217989,title:"Highway King Gopalpura",icon:"assets/icon/IconS.png",Rating:"2.5",Status:"Available",Place:"Gopalpura",Distance:"20 km",Reviews:"10",travelTime:"34"},
  {StaionID:"46",lat:26.8248938,lng:75.7217989,title:"Highway King Bhankrota",icon:"assets/icon/IconM.png",Rating:"3.5",Status:"Available",Place:"Bhankrota",Distance:"5 km",Reviews:"22",travelTime:"42"},
  {StaionID:"41",lat:26.8148938,lng:75.7117989,title:"Highway King Bagru",icon:"assets/icon/IconM.png",Rating:"1.5",Status:"Available",Place:"Bagru",Distance:"14 km",Reviews:"27",travelTime:"44"},
  {StaionID:"54",lat:28.5355,lng:77.3910,title:"Highway King Noida",icon:"assets/icon/IconM.png",Rating:"1.5",Status:"Available",Place:"Noida",Distance:"94 km",Reviews:"27",travelTime:"44"},
  {StaionID:"64",lat:29.0588,lng:76.0856,title:"Highway King Haryana",icon:"assets/icon/IconM.png",Rating:"1.5",Status:"Available",Place:"Haryana",Distance:"94 km",Reviews:"27",travelTime:"44"},
]
export const Saved = () => {
  const [Data,setData]= useState(InitialChargerData);
  const {isLoggedIn,modalVisible,selectedTabs} = useAppContext();
 
  return (
    <View style={[styles.container]}>
      
        <ScrollView style={[styles.container]}>
      <Block style={{marginBottom:90}}>
        {
          Data.map((el,index)=>{
             return (
              <ChargerCard key={index}  ChargerData={el} SICON={Sicon} TIocn={TataIcon} AC={AcIcon} DC={DcIcon} Star={star}/>
             )
          })
        }
        
      </Block>
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