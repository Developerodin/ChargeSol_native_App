import { Block, Input } from 'galio-framework'
import React, { useState } from 'react'
import { StyleSheet, Text, View,Dimensions, SafeAreaView, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { StatusBar } from "expo-status-bar";
import { useNavigation } from '@react-navigation/native';
import { useMapContext } from '../../Context/MapContext';
import { useAppContext } from '../../Context/AppContext';
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
const { width, height } = Dimensions;
export const Search = () => {
    const navigation = useNavigation()
    const {goToUserLocation,AnimationGoToPoint,chargerData} = useMapContext()
    const { setSelectedMarker, setMarkerModalVisible} = useAppContext()
    const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    // Filter the chargerData based on the search query
    const filteredResults = chargerData.filter((station) =>
      station.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

   const handelBackButton=()=>{
         navigation.goBack()
    }

    const handelChargerClick=(marker)=>{
      setSelectedMarker(marker)
      setMarkerModalVisible(true)
      navigation.goBack();
      AnimationGoToPoint(marker.lat,marker.lng)
    
    }

    const handelCurrentLoction=()=>{
      navigation.goBack();
      goToUserLocation()
    }
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Block style={{backgroundColor:"#FFF"}}>

        <Block style={{marginTop:0,padding:5}}>
            {/* <Block  style={{width:"10%",alignItems:"center",padding:5}}>
            <Ionicons onPress={handelBackButton} name="arrow-back-outline" style={{marginTop:15}} size={27} color="black" />
            </Block> */}

            <Block style={{padding:5}} >
            <Input
            placeholder="Search location ..."
            left
            icon="search1"
            family="antdesign"
            iconSize={19}
            iconColor="grey"
            style={{borderWidth:0,}}
            onChangeText={(text) => {
              setSearchQuery(text);
              handleSearch(text);
            }}
          />
          <Block style={{borderTopWidth:0.5,borderColor:"grey"}}>

          </Block>
          <TouchableOpacity activeOpacity={0.8} onPress={handelCurrentLoction} >
          <Block style={[styles.Space_Between,{marginTop:15}]}>

           
<Block style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
<MaterialIcons style={{marginLeft:12}}  name="my-location" size={24} color="grey" />

<Text style={{marginLeft:10}}>Current Location</Text>


</Block>



<Block>
<MaterialIcons  name="arrow-forward-ios" size={20} color="grey" />
</Block>

           </Block>
         </TouchableOpacity>
          
         
            </Block>
       
        </Block>

        </Block>

        {searchQuery.length > 0 && (
          <Block style={{ backgroundColor: '#FFF', marginTop: 10 ,padding:10}}>
          {/* Display search results */}
          {searchResults.length > 0 ? (
          searchResults.map((result) => (
            <TouchableOpacity
              key={result.StaionID}
              onPress={() => {
                handelChargerClick(result)
              }}
  
            >
              <Block style={[styles.Space_Between,{borderBottomWidth:0.5,borderColor:"grey"}]}>
  
                <Block center style={{flexDirection:"row",marginBottom:10,marginTop:10}}>
                <Entypo style={{marginRight:5}} name="location-pin" size={25} color="grey" />
                <Block>
                <Text style={{fontSize:16}}>{result.title}</Text>
                <Text style={{fontSize:12,color:"grey",marginTop:5}}>{result.Place}</Text>
                
                </Block>
                
                </Block>
  
                <Block>
                <MaterialIcons  name="arrow-forward-ios" size={20} color="grey" />
                </Block>
              
              </Block>
            
              
             
            </TouchableOpacity>
          ))
          )
          :
          <Block center>
            <Text style={{fontSize:20,fontWeight:"bold",color:"grey"}}>No Chargers Available !</Text>
            </Block>

            }
        </Block>
        ) }
        
        
        
       
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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