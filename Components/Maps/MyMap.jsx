import React, { useEffect, useState } from 'react'
import { Button, Image, StyleSheet,Text, View } from 'react-native'
import {  Block, Input, theme} from 'galio-framework';
import { StatusBar } from 'expo-status-bar';

import Icon from "./Icons/IconM.png"
import Car from "./Icons/CarLocationIcon.png"
import Geolocation from 'react-native-geolocation-service';
import MapView, { Marker,Polyline,PROVIDER_GOOGLE } from 'react-native-maps';
import { Dimensions } from "react-native";
import * as Location from 'expo-location';
const InitialChargerData=[
 
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

export const MyMap = ({navigation}) => {

  const [UserLocation, setUserLocation] = useState(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);

  async function getCurrentLocation() {
    // let { status } = await Location.requestForegroundPermissionsAsync();
    
    // if (status !== 'granted') {
    //   console.log('Location permission denied');
    //   return;
    // }
  
    try {
      let location = await Location.getCurrentPositionAsync({});
      console.log('Current location:', location);
      const { latitude, longitude } = location.coords;
      setUserLocation({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      
    } catch (error) {
      console.error('Error getting current location:', error);
    }
  }

  const handleMarkerPress = (marker) => {
    if (UserLocation && marker) {
      navigation.navigate('Directions', {
        startLocation: UserLocation,
        endLocation: {
            latitude: marker.lat,
            longitude: marker.lng,
            latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
      });
    }
  };
  
  // useEffect(() => {
  //   (async () => {
      
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied');
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     setLocation(location);
  //     console.log("UserLocation==>",location);
  //     const { latitude, longitude } = location.coords;
  //     setUserLocation({
  //       latitude,
  //       longitude,
  //       latitudeDelta: 0.0922,
  //       longitudeDelta: 0.0421,
  //     });
  //   })();
  // }, []);

  // let text = 'Waiting..';
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location);
  // }
  return (
      // "apiKey": "AIzaSyBKPYoMWGdRfZsZlYwwFC00xx0LAr8snyo"
      
    <MapView style={styles.map} initialRegion={{
      latitude:20.5937,
      longitude:78.9629,
      latitudeDelta:25,
      longitudeDelta:25,
    }}  provider={PROVIDER_GOOGLE}  >
      {/* <MapView style={styles.map}/> */}
    {/* {UserLocation && (
      <Marker
        coordinate={UserLocation}
        title="You are here"
        description="This is your current location"
      >
        <Image source={Car} style={{ width: 23, height: 36 }} />
      </Marker>
    )}  */}
    {InitialChargerData.map((marker) => (
      <Marker
        key={marker.StaionID}
        coordinate={{
          latitude: marker.lat,
          longitude: marker.lng,
        }}
        title={marker.title}
        // onPress={() => handleMarkerPress(marker)}
      >
        <Image source={marker.icon} style={{ width: 25, height: 35 }} />
      </Marker>
    ))}
     {selectedMarker && (
      <Polyline
        coordinates={[
          {
            latitude: UserLocation.latitude,
            longitude: UserLocation.longitude,
          },
          {
            latitude: selectedMarker.lat,
            longitude: selectedMarker.lng,
          },
        ]}
        strokeWidth={2}
        strokeColor="blue"
      />
    )}
  </MapView>

  )
}


const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    height: Dimensions.get("window").height,
},
  });