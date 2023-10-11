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
import { MyMap } from "../../Components/Maps/MyMap";
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

const { width, height } = Dimensions;


export const Home = ({ navigation }) => {
 
  const {
    selectedMarker,
    setSelectedMarker,
    isMarkerModalVisible,
    setMarkerModalVisible,
    isLoggedIn,
  } = useAppContext();

  const {goToUserLocation} = useMapContext()
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
  const handelAutoChargerEnabelFilter=()=>{
    console.log("Auto Charger")
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
            Title={"TATA MOTORS"}
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
            <Fontisto onPress={()=>handelFilterModelOpen()} name="equalizer" size={20} color="white" />
            
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

      
     <Block style={{flexDirection:"row",justifyContent:"flex-end",padding:10,position:"absolute",bottom:180,width:"100%"}}>
     <Block
           
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
            <FontAwesome onPress={()=>goToUserLocation()} name="location-arrow" size={20} color="white"/>
        
            
          </Block>
     </Block>


      <Modal
        propagateSwipe
        
        // animationType="slide"
        // transparent={true}
        isVisible={filterModel}
        onSwipeComplete={() => setFilterModel(false)}
        backdropOpacity={0.3}
        onBackdropPress={()=>setFilterModel(false)}
       
        swipeDirection={["down"]}
        style={styles.viewModelCenter}
      >
        <View style={{flex:0.7,backgroundColor:"#FFF",borderTopRightRadius:30,borderTopLeftRadius:30,padding:10}}>
          <Block center style={{marginTop:-22}}>
          <AntDesign name="minus" size={50} color="grey" />
          </Block>
          <Block style={styles.Space_Between}>
            <Text style={{fontSize:17,fontWeight:"bold"}}>Filter</Text>

            <TouchableOpacity>
              <Text style={{color:"#1B9A8B"}}>Clear All</Text>
            </TouchableOpacity>
          </Block>


        <ScrollView horiztonal>
          <TouchableOpacity activeOpacity={1}>
         
        <Block style={{marginTop:30}}>
            <Block>
              <Text style={{fontSize:16,fontWeight:500}}>My Vehicles</Text>
            </Block>

            <Block style={{marginTop:10}}>
            <CarComanyCard
            Icon={tatalogo}
            Title={"TATA MOTORS"}
            Color={"#fff"}
            bgColor="#1B9A8B"
          />
            </Block>
          </Block>

          <Block style={{marginTop:20}}>
            <Block>
              <Text style={{fontSize:14,fontWeight:500}}>Connectors</Text>
            </Block>

            <Block style={{flexDirection:"row",marginTop:10}}>
              <Block style={{margin:10}}>
                <Block center>
                  <FilterCard  Img={Type2}/>
                  <Text style={{marginTop:10}}>Type-2</Text>
                </Block>
                
              </Block>

              <Block style={{margin:10}}>
                <Block center>
                  <FilterCard  Img={WallCr}/>
                  <Text style={{marginTop:10}}>Wall</Text>
                </Block>
                
              </Block>

              <Block style={{margin:10}}>
                <Block center>
                  <FilterCard  Img={CCS2}/>
                  <Text style={{marginTop:10}}>CCS-2</Text>
                </Block>
                
              </Block>
              
            </Block>
          </Block>

          <Block style={{borderTopWidth:0.2,marginTop:20,borderColor:"gray"}}>
            <Block style={{marginTop:10}}>
            <Text style={{fontSize:14,fontWeight:500}}>Status</Text>
            <Block style={{flexDirection:"row",marginTop:10}}>
              <Block style={{margin:10}}>
              <FilterCard title="Active"/>
              </Block>
           
              <Block style={{margin:10}}>
              <FilterCard title="Inactive"/>
              </Block>
            </Block>
            </Block>
            
          </Block>

          <Block style={{borderTopWidth:0.2,marginTop:20,borderColor:"gray"}}>
            <Block style={{marginTop:10}}>
            <Text style={{fontSize:14,fontWeight:500}}>Charger Type</Text>
            <Block style={{flexDirection:"row",marginTop:10}}>
              <Block style={{margin:10}}>
              <FilterCard title="AC"/>
              </Block>
           
              <Block style={{margin:10}}>
              <FilterCard title="DC"/>
              </Block>
            </Block>
            </Block>
            
          </Block>

          <Block style={{marginTop:20,borderTopWidth:0.5,borderColor:"gray"}}>
            <Text style={{fontSize:14,fontWeight:500,marginTop:10}}>Open Hours</Text>

            <Block style={{flexDirection:"row",marginTop:10}}>
             <Block style={{margin:10}}>
             <FilterCard title="Open now"/>
             </Block>

             <Block style={{margin:10}}>
             
              <FilterCard title="Open 24/7"/>
             </Block>
            </Block>
          </Block>

          <Block style={[{marginTop:10,borderTopWidth:0.5,borderColor:"gray"}]}>
            <Block style={[styles.Space_Between,{marginTop:10,marginBottom:10}]}>
            <Text style={{fontSize:14,fontWeight:500}}>Autocharge Enabled</Text>
               <Switch 
               trackColor={{ false: '#F1F1F1', true: '#1B9A8B' }}
             ios_backgroundColor="#1B9A8B" 
             onChange={handelAutoChargerEnabelFilter}/>
            </Block>
               
          </Block>

          <Block style={{marginTop:10,borderTopWidth:0.5,borderColor:"gray"}}>
            <Text style={{fontSize:14,fontWeight:500,marginTop:10}}>Amenities</Text>

            <Block style={[{marginTop:10,flexDirection:"row"}]}>
              <Block style={{margin:10}}>
              <FilterCard title="Restroom"/>
              
              </Block>
              <Block style={{margin:10}}>
              <FilterCard title="Cafe"/>
              
              </Block>
              <Block style={{margin:10}}>
              <FilterCard title="Store"/>
              
              </Block>
            </Block>
          </Block>

          <Block style={{marginTop:20,borderTopWidth:0.5,borderColor:"gray"}}>
            <Text style={{fontSize:14,fontWeight:500,marginTop:10}}>Ratings</Text>
            <Block style={{marginTop:10}}>
              <Block style={[styles.Space_Between,{padding:5}]}>
                <Text>Rating 4.0+</Text>
              
                <Radio label="" color="black" 
              radioOuterStyle={{ width: 15, height: 15, borderRadius: 7.5, borderWidth: 1 }} // Set the size and shape of the outer circle
              radioInnerStyle={{ width: 9, height: 9, borderRadius: 4.5,backgroundColor: "#1B9A8B" }} 
               />
              </Block>
            </Block>
            <Block style={{marginTop:5}}>
              <Block style={[styles.Space_Between,{padding:5}]}>
                <Text>Rating 3.5+</Text>
              
                <Radio label="" color="black" 
              radioOuterStyle={{ width: 15, height: 15, borderRadius: 7.5, borderWidth: 1 }} // Set the size and shape of the outer circle
              radioInnerStyle={{ width: 9, height: 9, borderRadius: 4.5,backgroundColor: "#1B9A8B" }} 
               />
              </Block>
            </Block>
            <Block style={{marginTop:5}}>
              <Block style={[styles.Space_Between,{padding:5}]}>
                <Text>Rating 3.0+</Text>
              
            
              <Radio label="" color="black" 
              radioOuterStyle={{ width: 15, height: 15, borderRadius: 7.5, borderWidth: 1 }} // Set the size and shape of the outer circle
              radioInnerStyle={{ width: 9, height: 9, borderRadius: 4.5 ,backgroundColor: "#1B9A8B"}} 
               />
             
                
              </Block>
            </Block>
          </Block>
          </TouchableOpacity>
        </ScrollView>
         
         <Block  style={styles.Center}>
          <Button color="#1B9A8B" onPress={()=>setFilterModel(false)} style={{width:"100%"}}>Apply</Button>
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
