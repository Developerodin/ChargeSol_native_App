import React from 'react'
import { Image,  View,Dimensions, StyleSheet, ScrollView } from 'react-native'
import Ci from '../CarImages/ChargerStationImg.png'
import tatalogo from "../CarImages/Tata.png"
import { Block,theme,Text, Slider } from 'galio-framework'
import { CarComanyCard } from '../../Components/Cards/CarComanyCard'
import { CarCard } from '../../Components/Cards/CarCard'
import { BorderCard } from '../../Components/Cards/BorderCard'
import { ChargerInfoCard } from '../../Components/Cards/ChargerInfoCard'
import Tick from '../CarImages/GreenTick.png'
import ChargingLogo from '../CarImages/GreenCharging.png'
import Cross from '../CarImages/RedCross.png'
import DirectionIcon from '../CarImages/direactionIcon.png'
import LocationIcon from '../CarImages/LocationIcon.png'
import CopyOrangeIcon from '../CarImages/CopyOrangeIcon.png'
import RestRoom from '../CarImages/logoMW.png'
import Restaurant from '../CarImages/resturentLogo.png'
import Start5 from '../CarImages/Star5.png'
import Start4 from '../CarImages/Star4.png'
import Start3 from '../CarImages/Star3.png'
import Start2 from '../CarImages/Star2.png'
import Start1 from '../CarImages/Star1.png'
import { AddressCards } from '../../Components/Cards/AddressCards'
import { Button } from 'galio-framework'
import { useNavigation } from '@react-navigation/native'
const {width,height}=Dimensions
export const ChargerDetail = () => {
  const navigation = useNavigation();
  const handelChargeNow=()=>{
    navigation.navigate("Charging")
  }
  return (
    <View style={styles.container}>
      <Block >
      <Image source={Ci}  style={{width:width}}></Image>
      </Block>
      
      <ScrollView style={styles.Subcontainer}>
        <Block style={{flexDirection:"row"}}>
           <Text style={{fontSize:11,borderRadius:7,backgroundColor:"#37CE86",color:"#FFFF",width:19.71,height:19.71,textAlign:"center",fontWeight:600}}>A</Text>
            <Text style={{fontSize:14,color:"#37CE86",fontWeight:600,marginLeft:8}}> Available</Text>
        </Block>

        <Block style={[{marginTop:20}]}>
        <CarComanyCard Icon={tatalogo} Title={"TATA Power"} Color={"#fff"} bgColor="#1B9A8B"/>
      
        <BorderCard Title="DC | 60kW" Subtitle="₹ 16/kwh"/>


       <Block style={styles.Space_Between}>
       <ChargerInfoCard Img={Tick} Status="Available"  StatusColor="#37CE86"  Text1="Connector 1" Text2="(CCS-2)" bgColor="#FFFF"/>
      
       <ChargerInfoCard Img={ChargingLogo} Status="Charging"  StatusColor="#37CE86"  Text1="Connector 2" Text2="(CCS-2)" bgColor="#EFEFEF"/>
       </Block>
       
       <BorderCard Title="AC | 7.4kW" Subtitle="₹ 8/kwh"/>

       
       <Block >
       <ChargerInfoCard Img={Cross} Status="Disconnected"  StatusColor="#EC5E6F"  Text1="Connector 1" Text2="(Type-2)" bgColor="#EFEFEF" />
      

       </Block>

       <Block style={{marginTop:20}}>
        <AddressCards Title="ZEVpoint Charging Station" SubTitle="Hotel Royal Orchid, Shreeji Nagar,Vasundhara Colony, Durgapura, Jaipur,Rajasthan" 
        SubText1="Copy Location" SubText2="Get Direction" Icon1={LocationIcon} Icon2={CopyOrangeIcon} Icon3={DirectionIcon} />
       </Block>


       <Block style={[styles.Space_Between,{marginTop:30}]}>
        <Block style={styles.Space_Between}>
          <Block center style={{marginRight:10}} >
          <Image source={RestRoom}></Image>
            <Text center>Rest Room</Text>
          </Block>

          <Block center>
          <Image source={Restaurant}></Image>
            <Text>Restaurant</Text>
          </Block>
            
        </Block>

        <Block center>
         <Block style={{height:21}}>

         </Block>
            <Text>View More</Text>
        </Block>
       </Block>

       <Block style={[styles.Space_Between,{marginTop:30}]}>
        <Text style={{fontSize:14,fontWeight:600}}> Customer Reviews</Text>
        <Text>see all</Text>
       </Block>

       <Block style={{marginTop:10}}>
        <Block style={styles.Space_Between}>
          <Block center style={{flexDirection:"row"}}>
           <Text style={{fontSize:32,color:"#F26522",fontWeight:800}}>4.7</Text> 
           <Text style={{marginTop:10}}>out of 5</Text> 
          </Block>
          <Block>
            <Text>10 reviews</Text>
          </Block>
        </Block>


        <Block style={{marginTop:10}}>
          <Block style={{flexDirection:"row"}}>
            <Image source={Start5}></Image>
             
          </Block>
        </Block>
       </Block>

       <View style={{marginBottom:30,marginTop:30}}>
            <Button color="#1B998B" style={[styles.button, styles.shadow]} onPress={handelChargeNow} >CHARGE NOW</Button>
          </View>

       {/* <Block style={{marginBottom:30}}>

       </Block> */}

        </Block>
     
      
      </ScrollView>
        
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
    flex: 1
    
  },
  Subcontainer: {
    padding:10,
    
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    backgroundColor:"#FFF",
    marginTop:-20,
    height:height
    
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
    
    width: width,
  },
})