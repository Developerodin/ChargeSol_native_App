import React from 'react'
import { Button, StyleSheet,Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen !</Text>
      <Button
        title="Go to Profile Screen"
        onPress={() => navigation.navigate('Profile')}
      />
      <StatusBar style="auto" />
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      color:"black"
    },
  });