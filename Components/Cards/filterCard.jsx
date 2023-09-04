
import React, { useState } from 'react'
import { StyleSheet,View,Text,Image, TouchableOpacity} from 'react-native'

export const FilterCard = (props) => {
    const {title,Img}=props
    const [selectedCard,setSelectedCard]= useState(false)
    const handelSelect=()=>{
      setSelectedCard(!selectedCard)
    }
  return (
    <TouchableOpacity onPress={handelSelect} style={[styles.container,{backgroundColor:`${selectedCard ? "#1B9A8B" : "#F1F1F1"}`}]}>
        {Img && <Image style={{height:30,width:30, backgroundColor: 'transparent'}} source={Img} />}
       {title && <Text  style={[{color:`${selectedCard ? "#fff" : "black"}`}]}>{title}</Text>} 
    </TouchableOpacity>
  )
}

const styles= StyleSheet.create({
container:{
    padding:10,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:5
}
})