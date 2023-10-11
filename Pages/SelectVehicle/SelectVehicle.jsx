import React, { useEffect, useState } from 'react'
import {  View,Image, TouchableOpacity, StyleSheet, ScrollView,Dimensions } from 'react-native'
import { Block,theme,Button ,Text} from 'galio-framework';
import img1 from "../CarImages/img1.png";
import img2 from "../CarImages/TataXpres-TEV.png";
import img3 from "../CarImages/TataTigorEv.png";
import img4 from "../CarImages/TataTigoEv.png";
import img5 from "../CarImages/MgZ5EV.png";
import { CarCard } from '../../Components/Cards/CarCard';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../../Context/AppContext';
const { width } = Dimensions.get('screen');
export const SelectVehicle = () => {
  const {setAddVehicleData} = useAppContext();
    const navigation= useNavigation()
   const handelVehicleSelect=(newData)=>{
    setAddVehicleData(prev => [...prev, newData]);
    navigation.goBack()

   }
    const data = [
        {
          name: "Tata Nexon EV",
          subtitle: "Mileage range 315 km",
          img: img1,
          CompanyName: "TATA",
        },
        {
          name: "Tata Xpres-T EV",
          subtitle: "Mileage range 295 km",
          img: img2,
          CompanyName: "TATA",
        },
        {
          name: "Tata Tigor EV",
          subtitle: "Mileage range 295 km",
          img: img3,
          CompanyName: "TATA",
        },
        {
          name: "Tata Tiago EV",
          subtitle: "Mileage range 315 km",
          img: img4,
          CompanyName: "TATA",
        },
        {
          name: "MG Z5 EV",
          subtitle: "Mileage range 315 km",
          img: img5,
          CompanyName: "MG",
        },
      ];


  return (
   <View style={styles.container}>
     <ScrollView>
        <Block style={{marginTop:20,marginBottom:30}}>

      
        {
            data.map((el,index)=>{
                return(
                    <TouchableOpacity key={index} onPress={()=>handelVehicleSelect(el)}>
                           <Block  style={[styles2.container,styles2.Space_Between,styles2.CardBorder]}>
        
        
         
        <Block style={{flexDirection:"row"}}>
        {/* <Block style={[styles.CardBorder]}>
           <Text style={{backgroundColor:"#F26522",color:"#F26522"}}>s</Text>
       </Block> */}
       <Image source={el.img}  ></Image>
       </Block>

       <Block>
           <Text style={{fontSize:16,fontWeight:900,color:"#878787"}}>{el.name}</Text>
           <Text style={{fontSize:14,fontWeight:600,color:"#878787",marginTop:5}}>{el.subtitle}</Text>
       </Block>
        
      
      </Block>
                    </TouchableOpacity>
                 
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

    const styles2 = StyleSheet.create({
        container: {
            flexDirection:"row",
          width:"100%",
          height:120,
          borderRadius:5,
          backgroundColor:"#FFFF",
          elevation:3,
          marginTop:20,
          padding:15
        },
        Border:{
          borderWidth:1,
          borderColor:"red"
        },
        CardBorder:{
            borderLeftWidth: 6,
            borderLeftColor: "#F26522",
        },
        Space_Between:{
       
            flexDirection: 'row',
            justifyContent:'space-between',
            alignItems:"center"
            
          }
      });