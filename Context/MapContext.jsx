import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import Icon from "./Icons/IconM.png"
const MapContext = createContext();

export const MapProvider = ({ children }) => {
  
  const InitialChargerData=[
 
    {StaionID:"46",lat:26.9525,lng:75.7105,title:"Test",icon:Icon,Rating:"3.5",Status:"Available",Place:"Jaipur",Distance:"5 km",Reviews:"22",travelTime:"42"},
  ]

  const [chargerData,setChargerData] = useState(InitialChargerData)
  
  const [UserLocation, setUserLocation] = useState(null);
  const [MapRef,setMapRef] = useState(null)
  const [TripMapRef,setTripMapRef] = useState(null)

  initalTripData={
    StartPoint:{
      latitude:20.5937,
      longitude:78.9629,
    },
    DestinationPoint:{
      latitude:28.7041,
      longitude:77.1025,
    }
  }
  const [TripsCords,setTripsCords] = useState(initalTripData)
  const goToUserLocation = () => {
    if (UserLocation && MapRef.current) {
      MapRef.current.animateCamera({
        center: UserLocation,
        pitch: 45, // Tilt angle
        heading: 0, // Heading angle
        altitude: 1000, // Altitude
        zoom: 15, // Zoom level
      }, { duration: 1000 }); // Animation duration in milliseconds
    }
  };

  const AnimationGoToPoint=(lat,lng)=>{
   
    if (MapRef.current) {
      MapRef.current.animateCamera(
        {
          center: {
            latitude:lat,
            longitude:lng,
            latitudeDelta: 0.25,
            longitudeDelta: 0.25,
          },
          pitch: 45, // Tilt angle
          heading: 0, // Heading angle
          altitude: 1000, // Altitude
          zoom: 15, // Zoom level
        },
        { duration: 1000 } // Animation duration in milliseconds
      );
    }
  
}

  return (
    <MapContext.Provider value={{TripsCords,setTripsCords,TripMapRef,setTripMapRef,chargerData,setChargerData,UserLocation, setUserLocation,MapRef,setMapRef,goToUserLocation,AnimationGoToPoint}}>
      {children}
    </MapContext.Provider>
  );
};

export const useMapContext = () => {
  return useContext(MapContext);
};