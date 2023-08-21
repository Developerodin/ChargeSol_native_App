import React from 'react'
import { Text, View,Image, TouchableOpacity, StyleSheet } from 'react-native'

export const Profile = () => {
  return (
    <View style={[styles.container, styles.border]}>
      <View style={[ styles.border]}>
      
      <View style={styles.Space_Around}>
          <View style={{ width: 106, height: 106 }}>
            <Image source={require('./CarImages/profilepic.png')} style={{ width:106, height:106,borderRadius:100 }} />
            <TouchableOpacity style={{ position: 'absolute', bottom: 1, right: 6 }}>
              <Image source={require('./CarImages/editgreen.png')} />
            </TouchableOpacity>
          </View>

          
          <View >
            {/* User Info */}
            <View style={styles.Space_Between}>
              <Text style={{ fontSize: 20, color: '#4E5053' }}>Akshay</Text>
              <Image  source={require('./CarImages/editgray.png')} />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
              <Image source={require('./CarImages/At_symbol.png')} />
              <Text style={{ fontSize: 14, color: '#B9B9B9', marginLeft: 6 }}>ronakvaya@gmail.com</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
              <Image source={require('./CarImages/phone.png')} />
              <Text style={{ fontSize: 14, color: '#B9B9B9', marginLeft: 6 }}>+91 9090909090</Text>
            </View>
          </View>
        
       
      </View>
     
      </View>
     
        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
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
    
  }
  });