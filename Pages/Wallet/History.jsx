import { Block,theme,Button ,Text} from 'galio-framework';
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, View,Dimensions, TouchableOpacity } from 'react-native'
import walletcard from '../CarImages/walletcard.png'
import { SamllCards } from '../../Components/Cards/SamllCards';
import StarIcon from '../CarImages/StarIcon.png'
import Exchange from '../CarImages/Exchange.png'
import Transfer from '../CarImages/Transfer.png'
import referImg from '../CarImages/referImg.png'
import copyicon from '../CarImages/copyicon.png'
const { width } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;

export const History = () => {

    const initialData = [
        {
          title: "Wallet Top up",
          subTitle: "Master Card",
          date: "09/09/2023",
          amount: "1,000",
        },
        {
          title: "Charging Session",
          subTitle: "Visa Card",
          date: "09/08/2023",
          amount: "500",
        },
        {
          title: "Charging Session",
          subTitle: "Amex Card",
          date: "09/07/2023",
          amount: "250",
        },
        {
          title: "Wallet Top up",
          subTitle: "Discover Card",
          date: "09/06/2023",
          amount: "150",
        },
        {
          title: "Wallet Top up",
          subTitle: "Master Card",
          date: "09/05/2023",
          amount: "60",
        },
        {
          title: "Charging Session",
          subTitle: "Visa Card",
          date: "09/04/2023",
          amount: "75",
        },
        {
          title: "Charging Session",
          subTitle: "Amex Card",
          date: "09/03/2023",
          amount: "120",
        },
        {
          title: "Wallet Top up",
          subTitle: "Master Card",
          date: "09/02/2023",
          amount: "25",
        },
        {
          title: "Wallet Top up",
          subTitle: "Visa Card",
          date: "09/01/2023",
          amount: "350",
        },
        {
          title: "Charging Session",
          subTitle: "Discover Card",
          date: "08/31/2023",
          amount: "200",
        },
        {
          title: "Charging Session",
          subTitle: "Master Card",
          date: "08/30/2023",
          amount: "80",
        },
        {
          title: "Wallet Top up",
          subTitle: "Amex Card",
          date: "08/29/2023",
          amount: "300",
        },
        {
          title: "Charging Session",
          subTitle: "Visa Card",
          date: "08/28/2023",
          amount: "40",
        },
        {
          title: "Wallet Top up",
          subTitle: "Discover Card",
          date: "08/27/2023",
          amount: "180",
        },
        {
          title: "Charging Session",
          subTitle: "Master Card",
          date: "08/26/2023",
          amount: "150",
        },
        // Add more payment history objects as needed
      ];
  return (
    <View style={styles.container}>
        <ScrollView
       contentContainerStyle={{ flexGrow: 1 }}
       showsVerticalScrollIndicator={false}
       nestedScrollEnabled
       >
      <Block>
      <Block style={[{marginTop:30,marginBottom:100,backgroundColor:"#FFFF",padding:10,overFlow:"auto"}]}>
       <Block  style={[styles.Center]}>
       <Text  style={{fontSize:18,fontWeight:"bold"}}>All Transactions</Text>
       {/* <Text>More</Text> */}
       </Block>
       

       <Block>
         
         {
            initialData.map((el,index)=>{
                return(
                    <Block key={index} style={[styles.Space_Between,{marginTop:20}]}>
             <Block>
               <Text style={{fontSize:14,fontWeight:500,color:"#727376"}}>{el.title}</Text>
               <Text style={{fontSize:14,fontWeight:500,color:"#B9B9B9"}}>{el.subTitle}</Text>
             </Block>
             <Block>
             <Text style={{fontSize:14,fontWeight:500,color:"#727376"}}>+ ₹ {el.amount}</Text>
               <Text style={{fontSize:14,fontWeight:500,color:"#B9B9B9"}}>{el.date}</Text>
             </Block>
         </Block>
                )
            })
         }
         

 


       </Block>
      

       
       
      </Block>
      </Block>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:10,
      backgroundColor:"#fff"
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