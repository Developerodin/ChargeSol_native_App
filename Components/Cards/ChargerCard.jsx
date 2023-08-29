import { Block, Button, Card, Text,theme } from 'galio-framework'
import React from 'react'
import { StyleSheet,Dimensions, Image,TouchableOpacity } from 'react-native'
import { materialTheme } from '../../constants/Theme';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;
export const ChargerCard = (props) => {
  const navigation = useNavigation();

    
    const {ChargerData,SICON,TIocn,AC, DC,Star}=props;

    const handelChargerCardCLick=()=>{
      console.log("charger Card click")
      navigation.navigate("ChargerDetail")
    }
  return (
    
       <TouchableOpacity  onPress={handelChargerCardCLick}   style={[styles.container,styles.Space_Between]} >
        
        <Block>
          <Block>
            <Text style={{fontWeight:600}}>{ChargerData.title}</Text>
            <Text style={{marginTop:10,fontWeight:400}}>{ChargerData.Place}</Text>
          </Block>
          <Block style={[{marginTop:10,flexDirection:"row"}]}>
          <Block  style={[{backgroundColor:"green",width:22,height:22,borderRadius:5},styles.Center]}>
            <Text style={{color:"#FFF"}}>A</Text>
            </Block>
            <Text style={{color:"green",marginLeft:5,fontWeight:"bold"}}>{ChargerData.Status}</Text>
          </Block>
        </Block>
        <Block>
      
          <Block>
            <Block style={{flexDirection:"row"}}>
                <Image source={Star} />
            <Text style={{marginLeft:5,fontWeight:600}}>{ChargerData.Rating} ({ChargerData.Reviews} Reviews)</Text>
            </Block>
          
          <Text style={{marginTop:10,fontWeight:400}}>{ChargerData.travelTime} min ({ChargerData.Distance})</Text>
          </Block>
          <Block style={[{marginTop:10},styles.Space_Between]}>
            <Block  style={[{backgroundColor:"#2E2A4F",width:22,height:22,borderRadius:5},styles.Center]}>
            <Image source={SICON}  />
            </Block>
            <Block  style={[{backgroundColor:"#1072BA",width:22,height:22,borderRadius:5},styles.Center]}>
            <Image source={TIocn}  />
            </Block>
            <Block  style={[{backgroundColor:"#F1F1F1",width:22,height:22,borderRadius:5},styles.Center]}>
            <Image  source={AC}  />
            </Block>
            <Block  style={[{backgroundColor:"#F1F1F1",width:22,height:22,borderRadius:5},styles.Center]}>
            <Image source={DC}  />
            </Block>

            
          </Block>
        </Block>
       
       </TouchableOpacity >
            
            
           
         
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
    
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
  });