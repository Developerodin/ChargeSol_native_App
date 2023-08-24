import { Block,theme,Button ,Text} from 'galio-framework';
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, View,Dimensions } from 'react-native'
import walletcard from '../CarImages/walletcard.png'
import { SamllCards } from '../../Components/Cards/SamllCards';
import StarIcon from '../CarImages/StarIcon.png'
import Exchange from '../CarImages/Exchange.png'
import Transfer from '../CarImages/Transfer.png'
import referImg from '../CarImages/referImg.png'
import copyicon from '../CarImages/copyicon.png'
import { LoginModel } from '../../Components/LoginModel/LoginModel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppContext } from '../../Context/AppContext';
const { width } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;
export const Wallet = () => {
  const {isLoggedIn,selectedTabs,modalVisible} = useAppContext();
  
  return (

    <View style={[styles.container]}>
   
        <ScrollView style={[styles.container]}>
        <Block>
        <Image  source={walletcard}/>
        </Block>

        <Block style={[{marginTop:30,marginLeft:5}]}>
      
        <Text style={{fontSize:19,fontWeight:700,color:"#4E5053"}}>Functions</Text>
      
        </Block>

        <Block style={[{marginTop:10,padding:5},styles.Space_Between]}>
        <SamllCards Icon={Transfer} text1="" text2="RECHARGE" Color="#F26522" Color2="#727376" />
        <SamllCards Icon={StarIcon} text1="" text2="OFFERS" Color="#37CE86" Color2="#727376" />
        <SamllCards Icon={Exchange} text1="" text2="HISTORY" Color="#F26522" Color2="#727376" />
       
      
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
             <Block center style={[{width:width - (theme.SIZES.BASE * 8),backgroundColor:"#F26522",height:60,borderRadius:10},styles.Center]}>
              <Text style={{color:"#FFFF",fontWeight:700,fontSize:20, marginRight:10}}>ICXXXX</Text>
              
              <Image style={[{width:20,height:26}]} source={copyicon}/>
           
             </Block>
             
       </Block>
        
        
       <Block style={[{marginTop:30,marginBottom:100,backgroundColor:"#FFFF",padding:10,height:300,overFlow:"auto"}]}>
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
     
    {!isLoggedIn && modalVisible && selectedTabs==="Wallet" && <LoginModel />} 
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