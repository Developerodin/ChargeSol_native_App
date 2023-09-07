import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import Icon from "./Icons/IconM.png"
const MapContext = createContext();

export const MapProvider = ({ children }) => {
  
  const InitialChargerData=[
 
    {StaionID:"46",lat:26.8248938,lng:75.7217989,title:"Highway King Bhankrota",icon:Icon,Rating:"3.5",Status:"Available",Place:"Bhankrota",Distance:"5 km",Reviews:"22",travelTime:"42"},
    {StaionID:"41",lat:26.8148938,lng:75.7117989,title:"Highway King Bagru",icon:Icon,Rating:"1.5",Status:"Available",Place:"Bagru",Distance:"14 km",Reviews:"27",travelTime:"44"},
    {StaionID:"54",lat:28.5355,lng:77.3910,title:"Highway King Noida",icon:Icon,Rating:"1.5",Status:"Available",Place:"Noida",Distance:"94 km",Reviews:"27",travelTime:"44"},
    {StaionID:"64",lat:29.0588,lng:76.0856,title:"Highway King Haryana",icon:Icon,Rating:"1.5",Status:"Available",Place:"Haryana",Distance:"94 km",Reviews:"27",travelTime:"44"},
  ]

  const [chargerData,setChargerData] = useState(InitialChargerData)
  
  const [UserLocation, setUserLocation] = useState(null);
  const [MapRef,setMapRef] = useState(null)

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
    <MapContext.Provider value={{chargerData,setChargerData,UserLocation, setUserLocation,MapRef,setMapRef,goToUserLocation,AnimationGoToPoint}}>
      {children}
    </MapContext.Provider>
  );
};

export const useMapContext = () => {
  return useContext(MapContext);
};