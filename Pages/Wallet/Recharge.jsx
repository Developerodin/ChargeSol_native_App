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
export const Recharge = () => {
  return (
    <View style={styles.container}>
    <Text>Recharge</Text>
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