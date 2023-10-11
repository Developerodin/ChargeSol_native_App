import { Block, Button, Card, Text,theme } from 'galio-framework'
import React from 'react'
import { StyleSheet,Dimensions, Image,TouchableOpacity, View } from 'react-native'
import { materialTheme } from '../../constants/Theme';
const { width } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;
import { Swipeable } from 'react-native-gesture-handler';
import { useAppContext } from '../../Context/AppContext';
export const CarCard = (props) => {
  const {addVehicleData,setAddVehicleData} = useAppContext();
    const {Icon,Title,Subtitle}=props;

    const handleDelete = (nameToDelete) => {
      // Filter out the item with the matching name
      const updatedData = addVehicleData.filter((item) => item.name !== nameToDelete);
      setAddVehicleData(updatedData);
    };

    const renderRightActions = () => {
      return (
        <TouchableOpacity  style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}} >
          <Button onPress={()=>handleDelete(Title)} color="crimson" style={[styles.button, styles.shadow]} >Delete</Button>
        </TouchableOpacity>
      );
    };

  return (
    <Swipeable renderRightActions={renderRightActions}>
       <View style={[styles.container,styles.Space_Between,styles.CardBorder]}>
        
        
         
         <Block style={{flexDirection:"row"}}>
         {/* <Block style={[styles.CardBorder]}>
            <Text style={{backgroundColor:"#F26522",color:"#F26522"}}>s</Text>
        </Block> */}
        <Image source={Icon}  ></Image>
        </Block>

        <Block>
            <Text style={{fontSize:16,fontWeight:900,color:"#878787"}}>{Title}</Text>
            <Text style={{fontSize:14,fontWeight:600,color:"#878787",marginTop:5}}>{Subtitle}</Text>
        </Block>
         
       
       </View>
            
       </Swipeable>     
           
         
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
      width:"100%",
      height:90,
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