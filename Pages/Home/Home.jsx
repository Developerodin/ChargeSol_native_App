import React, { useEffect } from 'react'
import { Button, Image, StyleSheet,Text, View } from 'react-native'

import { StatusBar } from 'expo-status-bar';
import MapView, { Marker } from 'react-native-maps';
import Icon from "./Icons/IconM.png"
import { MyMap } from '../../Components/Maps/MyMap';
import { LoginModel } from '../../Components/LoginModel/LoginModel';

const InitialChargerData=[
  {StaionID:"48",lat:26.833408,lng:75.7141464,title:"Highway King Neemrana",icon:Icon,Rating:"4.5",Status:"Available",Place:"Neemrana",Distance:"10 km",Reviews:"23",travelTime:"18"},
  {StaionID:"25",lat:26.8416388,lng:75.7189965,title:"Highway King Kotputli",icon:Icon,Rating:"5",Status:"Available",Place:"Kotputli",Distance:"11 km",Reviews:"40",travelTime:"25"},
  {StaionID:"20",lat:26.8521512,lng:75.7141464,title:"Highway King Ridhi Sidhi",icon:Icon,Rating:"3.5",Status:"Available",Place:"Ridhi Sidhi",Distance:"90 km",Reviews:"20",travelTime:"59"},
  {StaionID:"21",lat:26.8648938,lng:75.7217989,title:"Highway King Gopalpura",icon:Icon,Rating:"2.5",Status:"Available",Place:"Gopalpura",Distance:"20 km",Reviews:"10",travelTime:"34"},
  {StaionID:"46",lat:26.8248938,lng:75.7217989,title:"Highway King Bhankrota",icon:Icon,Rating:"3.5",Status:"Available",Place:"Bhankrota",Distance:"5 km",Reviews:"22",travelTime:"42"},
  {StaionID:"41",lat:26.8148938,lng:75.7117989,title:"Highway King Bagru",icon:Icon,Rating:"1.5",Status:"Available",Place:"Bagru",Distance:"14 km",Reviews:"27",travelTime:"44"},
  {StaionID:"54",lat:28.5355,lng:77.3910,title:"Highway King Noida",icon:Icon,Rating:"1.5",Status:"Available",Place:"Noida",Distance:"94 km",Reviews:"27",travelTime:"44"},
  {StaionID:"64",lat:29.0588,lng:76.0856,title:"Highway King Haryana",icon:Icon,Rating:"1.5",Status:"Available",Place:"Haryana",Distance:"94 km",Reviews:"27",travelTime:"44"},
]
const customMarkers = [
  {
    id: 1,
    coordinate: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    title: 'Marker 1',
    icon: Icon
  },
  {
    id: 2,
    coordinate: {
      latitude: 37.77845,
      longitude: -122.4224,
    },
    title: 'Marker 2',
  },
  // Add more custom markers as needed
];

export const Home = ({ navigation }) => {
  useEffect(()=>{
console.log("In Home ")
  },[])
  return (
    <View style={styles.container}>
      {/* <Text style={{borderWidth:1,borderColor:"red",zIndex:10,marginTop:30}}>Home Screen</Text> */}
      <MyMap navigation={navigation}/>
      <StatusBar style="auto" />
      {/* <LoginModel /> */}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
  });