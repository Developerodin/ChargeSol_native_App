import React, { useEffect, useRef, useState } from 'react'
import { Image,  View,Dimensions, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import Ci from '../CarImages/ChargerStationImg.png'
import tatalogo from "../CarImages/Tata.png"
import { Block,theme,Text } from 'galio-framework'
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
import Modal from "react-native-modal";
import { AntDesign } from '@expo/vector-icons'; 
import { FilterCard } from '../../Components/Cards/filterCard'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import axios from 'axios'
import { Base_Url } from '../../Base_Urls/BaseUrl'
import Slider from '@react-native-community/slider';
import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
const {width,height}=Dimensions
export const ChargerDetail = () => {
  const [ChargeNowButtonShow,setChargeNowButtonShow] = useState(true)
  const [selectedCard, setSelectedCard] = useState(null);
  const [lastClickTime, setLastClickTime] = useState(0);
  const [PriceModel, setPriceModel] = useState(false);
  const [ModelselectedCard, setModelSelectedCard] = useState('Time');
  const [StartChargingresponse, setStartChargingresponse] = useState(null);
  
  const [ongoingChargingTransactions, setongoingChargingTransactions] = useState([]);
  const [ChargertransactionDetail, setChargertransactionDetail] = useState(null);
  const [sliderValue, setSliderValue] = useState(0);
  const [modeOfCharging, setModeOfCharging] = useState("time")
  const navigation = useNavigation();
  const cpId = 'CP123';
  const userId ='+919694998693';
  const connector_id = '1';
  const companyId = '651536095ad1d151264fc5b6'; // Replace with your actual CompanyID
  const transactionId = 13910;

  const [PluEasyToken,setPluEasyToken] = useState("")
  const [loading,setLoading] = useState(false)
  const showToast = (text1) => {
    ToastAndroid.show(text1, ToastAndroid.SHORT);
  };

  const onSliderValueChange = (value) => {
    setSliderValue(value);
  };

  const StartCharging =async()=>{
    setLoading(true)
    const header ={
      Authorization:PluEasyToken,
      CompanyId : companyId
    }
    try {
      const response = await axios.post(
        `${Base_Url.Charger}remote-start-transaction`,
        {
          cpId: cpId,
          userId:userId,
          idTag: '123080001149',
          connector_id: connector_id,
          mode:modeOfCharging,
          value: sliderValue,
        },
        {
          headers : header
        }
      );
      console.log("Charger Data ===>",response.data )
      setStartChargingresponse(response.data);
      setLoading(false)
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      setLoading(false)
    }
  }
  const handelChargeStart=()=>{
    StartCharging().then((res)=>{
      console.log("res",res)

      if(res.payload.status === "Accepted"){
         navigation.navigate("Charging")
      }
      else{
            showToast(res.msg)
            // navigation.navigate("Charging")
      }
      
    })

    
  }
  const handelChargeNow=()=>{
    handelsetPriceModelOpen()
    
  }

  const handelsetPriceModelOpen = () => {
    setPriceModel(true);
  };

  const handelConnectorSelect=(index)=>{
    const now = Date.now();
    if (now - lastClickTime < 300) {
      setSelectedCard(null);
      setChargeNowButtonShow(true)
    } else {
      // Handle single click (select)
      setSelectedCard(index);
      setChargeNowButtonShow(false);
    }
    setLastClickTime(now);
    
    
  }

  const fetchOngoingChargingTransactions = async () => {
    const header ={
      Authorization:PluEasyToken,
      CompanyId : companyId
    }
    try {
      const response = await axios.get(
        `https://api.plugeasy.in/api/ev/ongoing?cpid=${cpId}`,
        {
          headers : header
        }
      );
      setongoingChargingTransactions(response.data);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const  getTransactionChargingDetails = async () => {
    const header ={
      Authorization:PluEasyToken,
      CompanyId : companyId
    }
    try {
      const response = await axios.get(
        `https://api.plugeasy.in/api/ev/gen_transaction/${transactionId}?CompanyID=${companyId}`,
        {
          headers : header
        }
      );
      setChargertransactionDetail(response.data);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(()=>{
    AsyncStorage.getItem('PlugEasy_Token')
    .then(token => {
      if (token !== null) {
        // Token is available, you can use it
        console.log('Token:', token);
        setPluEasyToken(token)
      } else {
        // Token not found
        console.log('Token not found in AsyncStorage');
      }
    })
    .catch(error => {
      console.error('Error retrieving token:', error);
    });
  },[])


  return (
    <View style={styles.container}>
      
      <Block >
      <Image source={Ci}  style={{width:width}}></Image>
      </Block>
      
      <ScrollView style={styles.Subcontainer}>
        <Block style={{flexDirection:"row"}}>
           <Text style={{fontSize:11,borderRadius:7,backgroundColor:"#37CE86",color:"#FFFF",width:19.71,height:19.71,textAlign:"center",fontWeight:600}}>A</Text>
            <Text style={{fontSize:14,color:"#37CE86",fontWeight:600,marginLeft:8}}>Available</Text>
        </Block>

        <Block style={[{marginTop:20}]}>
        <CarComanyCard Icon={tatalogo} Title={"TATA Power"} Color={"#fff"} bgColor="#1B9A8B"/>
      
        <BorderCard Title="AC | 32kW" Subtitle="₹ 10/unit"/>


       <Block style={styles.Space_Between}>
        <TouchableOpacity activeOpacity={0.9} onPress={()=>handelConnectorSelect(0)}>
        <ChargerInfoCard Img={Tick} Status="Available"  StatusColor="#37CE86"  Text1="Connector 1" Text2="(CCS-2)" bgColor="#FFFF" border={selectedCard === 0 ? "#37CE86" : "#EFEFEF"}/>
        </TouchableOpacity>
      
        {/* <TouchableOpacity activeOpacity={0.9} onPress={()=>handelConnectorSelect(1)}>
       <ChargerInfoCard Img={ChargingLogo} Status="Charging"  StatusColor="#37CE86"  Text1="Connector 2" Text2="(CCS-2)" bgColor="#EFEFEF"  border={selectedCard === 1 ? "#37CE86" : "#FFFF"}/>
       </TouchableOpacity> */}
       </Block>
       
       <BorderCard Title="AC | 7.4kW" Subtitle="₹ 8/kwh"/>

       
       <Block >
       <ChargerInfoCard Img={Cross} Status="Disconnected"  StatusColor="#EC5E6F"  Text1="Connector 1" Text2="(Type-2)" bgColor="#EFEFEF" border="#EFEFEF" />
      

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
            <Button  disabled={ChargeNowButtonShow} color={ChargeNowButtonShow ? "crimson" : "#1B998B"} style={[styles.button, styles.shadow]} onPress={handelChargeNow} >CHARGE NOW</Button>
          </View>

       {/* <Block style={{marginBottom:30}}>

       </Block> */}

        </Block>
     
        <Modal
        propagateSwipe
        
        // animationType="slide"
        // transparent={true}
        isVisible={PriceModel}
        onSwipeComplete={() => setPriceModel(false)}
        backdropOpacity={0.3}
        onBackdropPress={()=>setPriceModel(false)}
       
        swipeDirection={["down"]}
        style={styles.viewModelCenter}
      >
        <View style={{flex:0.7,backgroundColor:"#FFFF",borderTopRightRadius:30,borderTopLeftRadius:30,padding:10}}>
          <Block center style={{marginTop:-22}}>
          <AntDesign name="minus" size={50} color="grey" />
          </Block>
          <Block style={styles.Space_Between}>
            <Text style={{fontSize:17,fontWeight:500}}>Plug In and Press Start</Text>

           
          </Block>


        <ScrollView horiztonal>
          <TouchableOpacity activeOpacity={1}>
          <Block style={[{ height: 60, backgroundColor: "#F1F1f1", marginTop: 30, padding: 10, flexDirection: "row",borderRadius:20 },styles.Space_Between]}>
        <TouchableOpacity activeOpacity={0.9}
          style={[styles.Center, { padding: 10, borderRadius: 15, backgroundColor: ModelselectedCard === 'Time' ? "#1B9A8B" : "#F1F1F1" }]}
          onPress={() => setModelSelectedCard('Time')}
        >
          <Text center style={{ fontSize: 16, fontWeight: "bold", color: ModelselectedCard === 'Time' ? "#fff" : "#000" }}>Time</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.9}
          style={[styles.Center, { padding: 10, borderRadius: 15, backgroundColor: ModelselectedCard === 'Units' ? "#1B9A8B" : "#F1F1F1" }]}
          onPress={() => setModelSelectedCard('Units')}
        >
          <Text center style={{ fontSize: 16, fontWeight: "bold", color: ModelselectedCard === 'Units' ? "#fff" : "#000" }}>Units</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.9}
          style={[styles.Center, { padding: 10, borderRadius: 15, backgroundColor: ModelselectedCard === 'Percentage' ? "#1B9A8B" : "#F1F1F1" }]}
          onPress={() => setModelSelectedCard('Percentage')}
        >
          <Text center style={{ fontSize: 16, fontWeight: "bold", color: ModelselectedCard === 'Percentage' ? "#fff" : "#000" }}>Percentage</Text>
        </TouchableOpacity>
      </Block>

      <Block style={[{marginTop:30}]}>
        <Block>
          <Text style={{fontSize:16}}>How much time do you want to charge ?</Text>
        </Block>

        <View style={{ marginTop: 20 }}>
      <View>
      <Slider
        style={{ width:"100%", height: 40 }}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#1B9A8B"
        maximumTrackTintColor="#000000"
        onValueChange={onSliderValueChange}
      />
      </View>

      <View style={styles.Space_Between}>
        <Text style={{ fontSize: 16 }}>0</Text>
        <Text style={{ fontSize: 16 }}>{sliderValue.toFixed(0)} {ModelselectedCard === "Time" ? "min" : ModelselectedCard === "Units" ? "unit" : "%" }</Text>
      </View>
    </View>
      </Block>

      <Block style={{marginTop:30}}>

        <Block style={[styles.Space_Between]}>
          <Block style={{flexDirection:"row",alignItems:"center"}}>
          <MaterialCommunityIcons name="offer" size={24} color="black" />
            <Text style={{fontSize:13,marginLeft:10}}>Apply Coupon</Text>
          </Block>

          <Block style={{flexDirection:"row",alignItems:"center"}}>
            <Text style={{fontSize:13,color:"crimson"}}>View Offers</Text>
          </Block>
        </Block>

      </Block>

      <Block style={[{marginTop:30},styles.Space_Between]}>
        <Block>
          <Text style={{fontSize:18}}>Estimated Price</Text>
        </Block>

        <Block>
          <Text style={{fontSize:18}}>₹ {sliderValue.toFixed(0) * 10}.00</Text>
        </Block>
      </Block>
      
          </TouchableOpacity>
        </ScrollView>
         
         <Block  style={styles.Center}>
          <Button color="#1B9A8B" onPress={handelChargeStart} loading={loading}  style={{width:"100%"}}>Charge Now</Button>
         </Block>
        </View>
      </Modal>
      
      </ScrollView>
        
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
    flex: 1
    
  },
  viewModelCenter: {
  
    justifyContent:'flex-end',
    margin: 0,
  },
  modelSelectedCard:{
    
    padding:10,
    borderRadius:15,
    backgroundColor:"#1B9A8B",
    
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