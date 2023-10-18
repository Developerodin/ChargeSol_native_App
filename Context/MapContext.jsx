import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import Icon from "./Icons/IconM.png"
import { Base_Url } from '../Base_Urls/BaseUrl';
import axios from 'axios';
const MapContext = createContext();

export const MapProvider = ({ children }) => {
  
  const InitialChargerData=[
 
    {StaionID:"46",lat:26.9525,lng:75.7105,title:"Test",icon:Icon,Rating:"3.5",Status:"Available",Place:"Jaipur",Distance:"5 km",Reviews:"22",travelTime:"42"},
  ]

  const [chargerData,setChargerData] = useState([])
  const [AppToken,setApptoken] = useState("")
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
const ChargerId= "6527e3ef503da286dc698676"

const fetchChargerData = async () => {
  const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImV4YW1wbGVVc2VyIiwiaWF0IjoxNjk3MTc3MDg1fQ.OCowu7BYJBPZFSjDbIJrdfJnGwEYwD-Ue_dFsF5myS8"
  try {
    const response = await axios.get(`${Base_Url.App}chargers/${ChargerId}`, {
      headers: { Authorization: `${token}` },
    });
    // Assuming the response data is an array of objects with the required properties
    
    const data = response.data;
    const ChargerData=data.data.charger;
    // console.log("response chargers by id==>", data);
    if(data && data.status === 'success'){
         const formattedData = {
          StaionID:"46",
          lat:ChargerData.Latitude,
          lng:ChargerData.Longitude,
          title:ChargerData.ChargerName,
          icon:Icon,
          Rating:"3.5",
          Status:ChargerData.functional,
          Place:`${ChargerData.street}, ${ChargerData.city}`,
          Distance:"5 km",
          Reviews:"22",
          travelTime:"42",
          Details:ChargerData.status ? ChargerData.status : {}
         }
   ;

   console.log("Formated Data Charge",formattedData )
   const Data = [];
   Data.push(formattedData)
   setChargerData(Data);
    // setRows(formattedData);
    // setFilterRows(formattedData);
    // setDcChargers(ChargersDcData);
    // setAcChargers(ChargersAcData)
    }
    else{
      // setRows([]);
    }
    
  } catch (error) {
    console.error("Error fetching data:", error);
    // setRows([]);
  }
};


useEffect(()=>{
  AsyncStorage.getItem('Token_App')
  .then(token => {
    if (token !== null) {
      // Token is available, you can use it
      console.log('Token App:', token);
      setApptoken(token)
    } else {
      // Token not found
      console.log('Token not found in AsyncStorage');
    }
  })
  .catch(error => {
    console.error('Error retrieving token:', error);
  });
},[])

useEffect(()=>{
  const fetchDataInterval = setInterval(() => {
    fetchChargerData(); // Call your fetchChargerData function here
  }, 30000); // 30 seconds in milliseconds

  // Return a cleanup function to clear the interval when the component unmounts
  return () => {
    clearInterval(fetchDataInterval);
  };
  
},[])

  return (
    <MapContext.Provider value={{TripsCords,setTripsCords,TripMapRef,setTripMapRef,chargerData,setChargerData,UserLocation, setUserLocation,MapRef,setMapRef,goToUserLocation,AnimationGoToPoint}}>
      {children}
    </MapContext.Provider>
  );
};

export const useMapContext = () => {
  return useContext(MapContext);
};