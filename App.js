import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,Alert,Modal  } from "react-native";
import { NavigationContainer,useFocusEffect,useNavigation  } from "@react-navigation/native";
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
import { useEffect, useState } from "react";
import { PermissionsAndroid } from 'react-native';
import { DirectionsScreen } from "./Components/DireactionScreen";
import { Welcome } from "./Pages/Onboarding/Welcome/Welcome";
import { AppSlides } from "./Pages/Onboarding/AppDeltailsSlides/AppSlides";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppProvider, useAppContext } from "./Context/AppContext";
import { LoginModel } from "./Components/LoginModel/LoginModel";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = ({navigation}) => {
  const {isLoggedIn,setModalVisible,selectedTabs,setSelectedTabs} =useAppContext();

  const handleTabPress = async (e,tabName) => {
    
    if (tabName !== 'Home' && !isLoggedIn) {
      // e.preventDefault();
      setSelectedTabs(tabName);
      setModalVisible(true);
    } else {
      
      setModalVisible(false);
      setSelectedTabs(tabName);
    }
  }
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
        listeners={{
          tabPress: (e) => {
            // e.preventDefault();
            handleTabPress(e,'Home');
          },
        }}
     
      />

      <Tab.Screen
        name="Saved"
        component={ Saved }
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bookmark-o" size={size} color={color} />
          ),
         
        }}
        listeners={{
          tabPress: (e) => {
            handleTabPress(e,'Saved');
          },
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
        listeners={{
          tabPress: (e) => {
            // e.preventDefault();
            handleTabPress(e,'Trips');
          },
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

        listeners={{
          tabPress: (e) => {
            // e.preventDefault();
            handleTabPress(e,'Wallet');
          },
        }}
        

       
       
      />
      
    </Tab.Navigator>

 
    
  );
};

export default function App() {
  const [Auth, setAuth]=useState(null);
  const [isAppFirstLaunched, setIsAppFirstLaunched] =useState(null);
 

  useEffect(()=>{
   const checkAuthAndFirstLaunch = async () => {
      try {
        // Check authentication status
        const authStatus = await AsyncStorage.getItem('Auth');
        setAuth(authStatus === 'true');

        // Check if app is launched for the first time
        const appData = await AsyncStorage.getItem('isAppFirstLaunched');
        if (appData === null) {
          setIsAppFirstLaunched(true);
          await AsyncStorage.setItem('isAppFirstLaunched', 'false');
        } else {
          setIsAppFirstLaunched(false);
        }
      } catch (err) {
        console.log('Error while checking Auth and First Launch:', err);
      }
    };

    checkAuthAndFirstLaunch();
  },[])
  
  return (
    <AppProvider>
<NavigationContainer>
      {
       isAppFirstLaunched !== null && Auth !== null &&  <Stack.Navigator initialRouteName={isAppFirstLaunched ? 'Welcome' : Auth ? 'Tabs' : 'Login'}>
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
        <Stack.Screen name="Welcome" component={Welcome} 
         options={{
          headerShown: false,
        }}
        />
        <Stack.Screen name="AppSlides" component={AppSlides}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Directions" component={DirectionsScreen} />
      </Stack.Navigator>
      }
     
    </NavigationContainer>
    </AppProvider>
    
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
