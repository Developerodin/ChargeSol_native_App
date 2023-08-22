import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./Pages/Home/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile } from "./Pages/Profile/Profile";
import { Login } from "./Pages/Onboarding/Login/Login";
import { SignUp } from "./Pages/Onboarding/SignUp/SignUp";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Saved } from "./Pages/Saved/Saved";
import { Trips } from "./Pages/Trips/Trips";
import { Wallet } from "./Pages/Wallet/Wallet";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { useEffect } from "react";
import { PermissionsAndroid } from 'react-native';
import { DirectionsScreen } from "./Components/DireactionScreen";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#1b998b',
      tabBarInactiveTintColor :'#fff',
      tabBarLabelStyle:{color:"#fff"},
      tabBarStyle: { backgroundColor: '#2E2A4F',color:"#fff",position: 'absolute',bottom:0,paddingTop:2,paddingBottom:3},
    }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (

            <Ionicons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bookmark-o" size={size} color={color} />
          ),
         
        }}
      />

      <Tab.Screen
        name="Trips"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="line-graph" size={size} color={color} />
          ),
          
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-wallet-outline" size={size} color={color} />
          ),
         
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {

  async function requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'Your app needs access to your location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission granted');
      } else {
        console.log('Location permission denied');
      }
    } catch (error) {
      console.warn(error);
    }
  }

  useEffect(()=>{
    // requestLocationPermission();
  })
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* <Stack.Screen name="Home" component={Home}
        options={{
          headerShown: false,
        }}
        /> */}
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Directions" component={DirectionsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
