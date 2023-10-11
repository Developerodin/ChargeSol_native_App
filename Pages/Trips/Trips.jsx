import React, { useEffect, useState } from "react";
import {
 
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from "react-native";

import { StatusBar } from "expo-status-bar";
import MapView, { Marker } from "react-native-maps";
import Icon from "./Icons/IconM.png";
import { TripsMap } from "../../Components/Maps/TripsMap";
import { LoginModel } from "../../Components/LoginModel/LoginModel";
import { Block, Input,Button, Switch } from "galio-framework";
import { CarComanyCard } from "../../Components/Cards/CarComanyCard";
import tatalogo from "../CarImages/Tata.png";
import Type2 from "../CarImages/type2.png";
import WallCr from "../CarImages/WallCr.png";
import CCS2 from "../CarImages/CCS-2.png";
import { Ionicons } from "@expo/vector-icons";
import HomeSwiper from "../../Components/HomeSwiper/HomeSwiper";
import { useAppContext } from "../../Context/AppContext";
import star from "../CarImages/images/starimage.png";
import Sicon from "../CarImages/images/sicon.png";
import TataIcon from "../CarImages/images/tataicon.png";
import AcIcon from "../CarImages/images/aciocn.png";
import DcIcon from "../CarImages/images/dcicon.png";
import Modal from "react-native-modal";
import { AntDesign } from '@expo/vector-icons'; 
import { FilterCard } from "../../Components/Cards/filterCard";
import { Radio } from 'galio-framework';
import { Fontisto } from '@expo/vector-icons'; 
import { useMapContext } from "../../Context/MapContext";
import { FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons'; 
const { width, height } = Dimensions;
export const Trips = () => {
  
  const navigation = useNavigation()
    const {goToUserLocation,AnimationGoToPoint,chargerData,TripsCords,setTripsCords} = useMapContext()
    const { setSelectedMarker, setMarkerModalVisible} = useAppContext()
    const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
 

  const handelTripSelect=()=>{
    navigation.navigate("Plan A Trip")
  }
  useEffect(()=>{
    
  },[])
  return (
    <View style={styles.container}>
         <TripsMap navigation={navigation} />
          
         {/* <Modal
        propagateSwipe
        
        // animationType="slide"
        // transparent={true}
        isVisible={true}
        // onSwipeComplete={() => setTripModel(false)}
        backdropOpacity={0.1}
        // onBackdropPress={()=>setTripModel(false)}
       
        swipeDirection={["down"]}
        style={styles.viewModelCenter}
      > */}
      {
        TripsCords === null && <View style={{flex:0.24,backgroundColor:"#FFFF",borderTopRightRadius:10,borderTopLeftRadius:10,padding:10,position:"absolute",bottom:50}}>
          
        <Block>
          <Text style={{fontWeight:500}}>Trip Planner</Text>
          <Text style={{fontSize:12,color:"grey",marginTop:5}}>Tackle your range anxiety with our hassle-free charging experience on your mext trip. </Text>
        </Block>


      <ScrollView horiztonal>
        <TouchableOpacity activeOpacity={1} onPress={handelTripSelect}>
         
        <Block style={{backgroundColor:"#FFF"}}>

<Block style={{marginTop:0,padding:0}}>

  <Block  >
    <Block style={{padding:0,flexDirection:"row",alignItems:"center"}}>
    <Ionicons name="locate" size={20} color="crimson" />
    <Text style={{borderWidth:0,padding:15,color:"grey"}}> Enter Start Point</Text>

    </Block>

<Block style={{borderTopWidth:0.5,borderColor:"grey"}}>

</Block>
<Block activeOpacity={0.8} style={{padding:0,flexDirection:"row",alignItems:"center"}} >
<Ionicons name="ios-location-sharp" size={24} color="#1b998b" />

<Text style={{borderWidth:0,padding:15,color:"grey"}}>Enter Destination</Text>
</Block>


  </Block>

</Block>

</Block>
    
        </TouchableOpacity>
      </ScrollView>
       
      
      </View>
      }
        
      {/* </Modal> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    minHeight:height,
  },
  viewModelCenter: {
  
    justifyContent:'flex-end',
    margin: 0,
   
  },
  centeredView: {
    flex: 0.25,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: -50,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: width,
    height: height - 400,
  },
  border: {
    borderWidth: 1,
    borderColor: "blue",
  },
  Center: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  Space_Around: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  Space_Between: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 2,
  },
  button: {
    width: width,
  },
});