import { Block,theme,Button ,Text, Input} from 'galio-framework';
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, View,Dimensions, TouchableOpacity,Share  } from 'react-native'
import walletcard from '../CarImages/walletcard.png'
import { SamllCards } from '../../Components/Cards/SamllCards';
import StarIcon from '../CarImages/StarIcon.png'
import Exchange from '../CarImages/Exchange.png'
import Transfer from '../CarImages/Transfer.png'
import referImg from '../CarImages/referImg.png'
import copyicon from '../CarImages/copyicon.png'
import Oval1 from '../CarImages/WelocmeScreen/Oval1.png'
import Oval2 from '../CarImages/WelocmeScreen/Oval2.png'
import dp from '../CarImages/profilepic.png'
import { LoginModel } from '../../Components/LoginModel/LoginModel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppContext } from '../../Context/AppContext';
import { useNavigation } from '@react-navigation/native';
import Modal from "react-native-modal";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
const { width } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;
import { AntDesign } from '@expo/vector-icons'; 
export const Wallet = () => {
  const navigaiton = useNavigation()
  const {isLoggedIn,selectedTabs,modalVisible} = useAppContext();
  const [RechargeModel, setRechargeModel] = useState(false);
  const [amount, setAmount] = useState('');
  const [userDetails,setUserDetails] = useState(null);
const handelHisotryClick=()=>{
  navigaiton.navigate("History")
}
const handelRechargeClick=()=>{
  setRechargeModel(true)
}

const handelOffersClick=()=>{
  navigaiton.navigate("Offers")
}

const handleInputChange = (text) => {
  setAmount(text);
};

const handelProceedToPay=()=>{
  setRechargeModel(false)
  setAmount('');
}

const handleShare = async () => {
  try {
    const result = await Share.share({
      message: "Hey there ! I've been using the Charge Sol for electric car charging, and it's been great. I thought you might like it too. If you sign up using my referral code, we both get 50 rupee credits in our wallets. Here's my referral code: [ICX59908]. Give it a try and start saving on your electric car charging! Cheers, Akshay",
    });
    if (result.action === Share.sharedAction) {
      // Share was successful
      console.log('Shared successfully');
    } else if (result.action === Share.dismissedAction) {
      // Share was dismissed/cancelled
      console.log('Share dismissed');
    }
  } catch (error) {
    console.error('Error sharing:', error.message);
  }
};

useEffect(()=>{
  
  AsyncStorage.getItem('userDetails')
.then(userDetailsString => {
  if (userDetailsString) {
    // Parse the JSON string back to an object
    const userDetails = JSON.parse(userDetailsString);
    console.log('User details retrieved: ', userDetails);
    setUserDetails(userDetails);
  } else {
    console.log('User details not found in AsyncStorage');
  }
})
.catch(error => {
  console.error('Error retrieving user details: ', error);
});
},[])
  return (

    <View style={[styles.container]}>
 
       <ScrollView style={[styles.container]}>
         
         <Block style={{flexDirection:"row",alignItems:"center"}}>
          <Block>
            <Image style={{width:60,height:60,borderRadius:50}} source={dp} />
          </Block>

          <Block style={{marginLeft:30}}>
            <Text style={{fontSize:14}}>Hi, {userDetails !== null && userDetails.name } !</Text>
            <Text style={{color:"grey",fontSize:12,marginTop:10}}>welcome,back</Text>
            
          </Block>
         </Block>



       <Block center style={{marginTop:20}}>
          <Block style={{width:340,height:179,backgroundColor:"#0e3379",borderRadius:15}}>
            <Block style={{marginTop:30,marginLeft:30}}>
              <Text style={{fontSize:18,color:"#fff"}}>Wallet</Text>
              <Text style={{fontSize:24,color:"#fff",marginTop:3,fontWeight:"bold"}}>₹ 12,000</Text>
            </Block>

            <Block  style={{marginTop:20,marginLeft:30,width:250}}>
              
              <Block style={styles.Space_Between}>
                <Block>
                <Text style={{color:"#fff",fontSize:12}}>Phone Number</Text>
                <Text style={{fontSize:14,color:"#fff",marginTop:5}}>+91 {userDetails !== null && userDetails.phone_number }</Text>
                </Block>
                
                <Block>
                <Text style={{color:"#fff",fontSize:12}}>Member Since</Text>
                <Text style={{fontSize:14,color:"#fff",marginTop:5}}>03/23</Text>
                </Block>
              </Block>
            </Block>
          <Image source={Oval2} style={styles.oval2} />
            <Image source={Oval1} style={styles.oval1} />
          </Block>
       </Block>

       <Block style={[{marginTop:20,marginLeft:5}]}>
     
       <Text style={{fontSize:19,fontWeight:700,color:"#4E5053"}}>Functions</Text>
     
       </Block>

       <Block style={[{marginTop:10,padding:5},styles.Space_Between]}>

        <TouchableOpacity activeOpacity={0.9} onPress={handelRechargeClick} >
        <SamllCards Icon={Transfer} text1="" text2="RECHARGE" Color="#F26522" Color2="#727376" />
        </TouchableOpacity>
      
        <TouchableOpacity activeOpacity={0.9} onPress={handelOffersClick}>
       <SamllCards Icon={StarIcon} text1="" text2="OFFERS" Color="#37CE86" Color2="#727376" />
       </TouchableOpacity>

       <TouchableOpacity activeOpacity={0.9} onPress={handelHisotryClick}>
       <SamllCards Icon={Exchange} text1="" text2="HISTORY" Color="#F26522" Color2="#727376" />
       </TouchableOpacity>
     
     </Block>
     <Block style={[{backgroundColor:"#FEF8F6",height:126,marginTop:30,borderRadius:10,zIndex:10,marginBottom:-10},styles.Space_Around]}>
         <Block left>
           <Text style={{fontSize:30,fontWeight:500,color:"#4E5053"}}>Refer and earn</Text>
           <Text style={{fontSize:25,fontWeight:500,color:"#4E5053"}}>₹300 cashback</Text>
           <Text style={{fontSize:12,fontWeight:500,color:"#4E5053"}}>Cashback will be credited in your app wallet</Text>
         </Block>

         <Block>
           <Image source={referImg}></Image>
         </Block>
      </Block>

      <Block center >
      <TouchableOpacity activeOpacity={0.8} onPress={handleShare}>
            <Block center style={[{width:width - (theme.SIZES.BASE * 8),backgroundColor:"#F26522",height:60,borderRadius:10},styles.Center]}>
             <Text style={{color:"#FFFF",fontWeight:700,fontSize:20, marginRight:10}}>ICXXXX</Text>
             
             <Image style={[{width:20,height:26}]} source={copyicon}/>
          
            </Block>
            </TouchableOpacity>
      </Block>
       
       
      <Block style={[{marginTop:30,marginBottom:60,backgroundColor:"#FFFF",padding:10,height:300,overFlow:"auto"}]}>
       <Block style={[styles.Space_Between]}>
       <Text>Recent transactions</Text>
       {/* <Text>More</Text> */}
       </Block>
       <ScrollView
       contentContainerStyle={{ flexGrow: 1 }}
       showsVerticalScrollIndicator={false}
       nestedScrollEnabled
       >

       <Block>
         
         <Block style={[styles.Space_Between,{marginTop:20}]}>
             <Block>
               <Text style={{fontSize:14,fontWeight:500,color:"#727376"}}>Wallet Top up</Text>
               <Text style={{fontSize:14,fontWeight:500,color:"#B9B9B9"}}>Master Card</Text>
             </Block>
             <Block>
             <Text style={{fontSize:14,fontWeight:500,color:"#727376"}}>+ ₹ 1,000</Text>
               <Text style={{fontSize:14,fontWeight:500,color:"#B9B9B9"}}>09/09/2023</Text>
             </Block>
         </Block>

         <Block style={[styles.Space_Between,{marginTop:20}]}>
             <Block>
               <Text style={{fontSize:14,fontWeight:500,color:"#727376"}}>Wallet Top up</Text>
               <Text style={{fontSize:14,fontWeight:500,color:"#B9B9B9"}}>Master Card</Text>
             </Block>
             <Block>
             <Text style={{fontSize:14,fontWeight:500,color:"#727376"}}>+ ₹ 1,000</Text>
               <Text style={{fontSize:14,fontWeight:500,color:"#B9B9B9"}}>09/09/2023</Text>
             </Block>
         </Block>

         <Block style={[styles.Space_Between,{marginTop:20}]}>
             <Block>
               <Text style={{fontSize:14,fontWeight:500,color:"#727376"}}>Wallet Top up</Text>
               <Text style={{fontSize:14,fontWeight:500,color:"#B9B9B9"}}>Master Card</Text>
             </Block>
             <Block>
             <Text style={{fontSize:14,fontWeight:500,color:"#727376"}}>+ ₹ 1,000</Text>
               <Text style={{fontSize:14,fontWeight:500,color:"#B9B9B9"}}>09/09/2023</Text>
             </Block>
         </Block>

         <Block style={[styles.Space_Between,{marginTop:20}]}>
             <Block>
               <Text style={{fontSize:14,fontWeight:500,color:"#727376"}}>Wallet Top up</Text>
               <Text style={{fontSize:14,fontWeight:500,color:"#B9B9B9"}}>Master Card</Text>
             </Block>
             <Block>
             <Text style={{fontSize:14,fontWeight:500,color:"#727376"}}>+ ₹ 1,000</Text>
               <Text style={{fontSize:14,fontWeight:500,color:"#B9B9B9"}}>09/09/2023</Text>
             </Block>
         </Block>

       </Block>
       </ScrollView>

       
       
      </Block>
   </ScrollView>
   
       
   <Modal
        propagateSwipe
        
        // animationType="slide"
        // transparent={true}
        isVisible={RechargeModel}
        onSwipeComplete={() => setRechargeModel(false)}
        backdropOpacity={0.3}
        onBackdropPress={()=>setRechargeModel(false)}
       
        swipeDirection={["down"]}
        style={styles.viewModelCenter}
      >
        <View style={{flex:0.55,backgroundColor:"#FFFF",borderTopRightRadius:30,borderTopLeftRadius:30,padding:10}}>
          <Block center style={{marginTop:-22}}>
          <AntDesign name="minus" size={50} color="grey" />
          </Block>
          <Block style={styles.Space_Between}>
            <Block style={{flexDirection:"row",alignItems:"center"}}>
            <Text style={{fontSize:20,fontWeight:"bold"}}>Credits</Text>
            <Block  style={{width:30,height:30,flexDirection:"row", justifyContent:"center",alignItems:"center",marginLeft:5,borderRadius:20,backgroundColor:"#F1F1F1"}}>
            <FontAwesome name="rupee"  size={17} color="black" />
            </Block>
           
            </Block>
            
            <Block style={styles.Center}>
              <Text style={{color:"grey",fontSize:13}}> 1 credit = 1 INR</Text>
            </Block>
           
          </Block>


        <ScrollView horiztonal>
          <TouchableOpacity activeOpacity={1}>
        

      <Block style={[{marginTop:30}]}>
        <Block>
          <Text style={{fontSize:20,marginLeft:4}}>Amount</Text>
        </Block>

        <Block style={{marginTop:5}}>
          <Input
          style={{ height: 60 }}
          placeholder='Enter Amount'
          value={amount}
          onChangeText={(e)=>handleInputChange(e)}
          />
        </Block>
      </Block>


      <Block style={[styles.Space_Around,{marginTop:20}]}>
        <TouchableOpacity activeOpacity={0.9} onPress={()=>handleInputChange('300')}>
        <Block  style={{width:80,height:50,borderWidth:0.5,flexDirection:"row", justifyContent:"center",alignItems:"center",marginLeft:5,borderRadius:13,borderColor:"grey"}}>
      <Text style={{fontWeight:"bold",color:"grey",fontSize:18}}>+300</Text>
            </Block>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.9} onPress={()=>handleInputChange('500')}>
        <Block  style={{width:80,height:50,borderWidth:0.5,flexDirection:"row", justifyContent:"center",alignItems:"center",marginLeft:5,borderRadius:13,borderColor:"grey"}}>
      <Text style={{fontWeight:"bold",color:"grey",fontSize:18}}>+500</Text>
            </Block>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.9} onPress={()=>handleInputChange('1000')}>
        <Block  style={{width:80,height:50,borderWidth:0.5,flexDirection:"row", justifyContent:"center",alignItems:"center",marginLeft:5,borderRadius:13,borderColor:"grey"}}>
      <Text style={{fontWeight:"bold",color:"grey",fontSize:18}}>+1000</Text>
            </Block>
        </TouchableOpacity>
      

          
          

      </Block>

      
      
          </TouchableOpacity>
        </ScrollView>
        <Block style={styles.Space_Between}>
          <Block>
            <Text style={{fontSize:18,letterSpacing: 2}}>Total Price</Text>
          </Block>

          <Block>
            <Text style={{fontSize:18,letterSpacing: 2}}>{amount === '' ? " ₹ 0" : `₹ ${amount}.00`} </Text>
          </Block>
        </Block>
         
         <Block  style={styles.Center}>
          <Button color="#1B9A8B" onPress={handelProceedToPay}  style={{width:"100%"}}>Proceed to Pay</Button>
         </Block>
        </View>
      </Modal>
     
    
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    backgroundColor:"#fff"
  },
  viewModelCenter: {
  
    justifyContent:'flex-end',
    margin: 0,
  },
  oval2: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 133, // Adjust the size as needed
    height:103, // Adjust the size as needed
  },
  oval1: {
    position: 'absolute',
    bottom: -80,
    right: 0,
    width: 184, // Adjust the size as needed
    height:210, // Adjust the size as needed
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