import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import MapView, { Marker } from "react-native-maps";
import Icon from "./Icons/IconM.png";
import { MyMap } from "../../Components/Maps/MyMap";
import { LoginModel } from "../../Components/LoginModel/LoginModel";
import { Block, Input } from "galio-framework";
import { CarComanyCard } from "../../Components/Cards/CarComanyCard";
import tatalogo from "../CarImages/Tata.png";
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
const { width, height } = Dimensions;
const InitialChargerData = [
  {
    StaionID: "48",
    lat: 26.833408,
    lng: 75.7141464,
    title: "Highway King Neemrana",
    icon: Icon,
    Rating: "4.5",
    Status: "Available",
    Place: "Neemrana",
    Distance: "10 km",
    Reviews: "23",
    travelTime: "18",
  },
  {
    StaionID: "25",
    lat: 26.8416388,
    lng: 75.7189965,
    title: "Highway King Kotputli",
    icon: Icon,
    Rating: "5",
    Status: "Available",
    Place: "Kotputli",
    Distance: "11 km",
    Reviews: "40",
    travelTime: "25",
  },
  {
    StaionID: "20",
    lat: 26.8521512,
    lng: 75.7141464,
    title: "Highway King Ridhi Sidhi",
    icon: Icon,
    Rating: "3.5",
    Status: "Available",
    Place: "Ridhi Sidhi",
    Distance: "90 km",
    Reviews: "20",
    travelTime: "59",
  },
  {
    StaionID: "21",
    lat: 26.8648938,
    lng: 75.7217989,
    title: "Highway King Gopalpura",
    icon: Icon,
    Rating: "2.5",
    Status: "Available",
    Place: "Gopalpura",
    Distance: "20 km",
    Reviews: "10",
    travelTime: "34",
  },
  {
    StaionID: "46",
    lat: 26.8248938,
    lng: 75.7217989,
    title: "Highway King Bhankrota",
    icon: Icon,
    Rating: "3.5",
    Status: "Available",
    Place: "Bhankrota",
    Distance: "5 km",
    Reviews: "22",
    travelTime: "42",
  },
  {
    StaionID: "41",
    lat: 26.8148938,
    lng: 75.7117989,
    title: "Highway King Bagru",
    icon: Icon,
    Rating: "1.5",
    Status: "Available",
    Place: "Bagru",
    Distance: "14 km",
    Reviews: "27",
    travelTime: "44",
  },
  {
    StaionID: "54",
    lat: 28.5355,
    lng: 77.391,
    title: "Highway King Noida",
    icon: Icon,
    Rating: "1.5",
    Status: "Available",
    Place: "Noida",
    Distance: "94 km",
    Reviews: "27",
    travelTime: "44",
  },
  {
    StaionID: "64",
    lat: 29.0588,
    lng: 76.0856,
    title: "Highway King Haryana",
    icon: Icon,
    Rating: "1.5",
    Status: "Available",
    Place: "Haryana",
    Distance: "94 km",
    Reviews: "27",
    travelTime: "44",
  },
];
const customMarkers = [
  {
    id: 1,
    coordinate: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    title: "Marker 1",
    icon: Icon,
  },
  {
    id: 2,
    coordinate: {
      latitude: 37.77845,
      longitude: -122.4224,
    },
    title: "Marker 2",
  },
  // Add more custom markers as needed
];

export const Home = ({ navigation }) => {
  const {
    selectedMarker,
    setSelectedMarker,
    isMarkerModalVisible,
    setMarkerModalVisible,
    isLoggedIn,
  } = useAppContext();
  const [ChargerVisible, setChargerVisible] = useState(false);
  const [filterModel, setFilterModel] = useState(false);
  const handelChargerModelClose = () => {
    console.log("Model CLick");
    setChargerVisible(false);
  };

  const handelFilterModelOpen = () => {
    setFilterModel(true);
  };
  const handelSearchClick=()=>{
    navigation.navigate("Search")
  }

  useEffect(() => {
    console.log("In Home ");
  }, []);
  return (
    <View style={styles.container}>
      {/* <Text style={{borderWidth:1,borderColor:"red",zIndex:10,marginTop:30}}>Home Screen</Text> */}
      <MyMap navigation={navigation} />

      <Block style={{ marginTop: 50, padding: 10 }}>
        <Block style={styles.Space_Between}>
          <CarComanyCard
            Icon={tatalogo}
            Title={"TATA Power"}
            Color={"#fff"}
            bgColor="#1B9A8B"
          />

          <Block
            center
            style={[
              styles.Center,
              {
                backgroundColor: "#1B9A8B",
                width: 40,
                height: 40,
                borderRadius: 12,
              },
            ]}
          >
            <Ionicons onPress={handelFilterModelOpen} name="md-color-filter-outline" size={28} color="white" />
          </Block>
        </Block>
      </Block>

      <Block style={{ padding: 10 }}>
        <Block>
<TouchableOpacity onPress={handelSearchClick}>
        <Block  style={[styles.Space_Between,{backgroundColor:"#FFF",height:40,padding:9,borderRadius:12}]}>
          <Text style={{color:"grey"}}>Search location ...</Text>
          <Ionicons name="search" size={24} color="grey" />
        </Block>
        </TouchableOpacity>
        </Block>
      </Block>

      <StatusBar style="auto" />
      <LoginModel />

      {isLoggedIn && isMarkerModalVisible && (
        <Block
          style={{
            position: "absolute",
            bottom: 37,
            width: "100%",
            padding: 10,
          }}
        >
          <HomeSwiper
            SICON={Sicon}
            TIocn={TataIcon}
            AC={AcIcon}
            DC={DcIcon}
            Star={star}
          />
        </Block>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        isVisible={filterModel}
        onSwipeComplete={() => setFilterModel(false)}
        backdropOpacity={0.1}
        onBackdropPress={()=>setFilterModel(false)}
        swipeDirection={[ "down"]}
        style={styles.viewModelCenter}
      >
        <View style={{flex:0.7,backgroundColor:"#FFF",borderTopRightRadius:30,borderTopLeftRadius:30,padding:10}}>
          <Block center style={{marginTop:-22}}>
          <AntDesign name="minus" size={50} color="grey" />
          </Block>
          <Block style={styles.Space_Between}>
            <Text>Filter</Text>

            <TouchableOpacity>
              <Text>Clear All</Text>
            </TouchableOpacity>
          </Block>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    minHeight:height,
  },
  viewModelCenter: {

    justifyContent:'flex-end',
    margin: 0,
    minHeight:height,
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
