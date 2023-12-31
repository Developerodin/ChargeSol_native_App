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
import { useCallback, useEffect, useState } from "react";
import { PermissionsAndroid } from 'react-native';
import { DirectionsScreen } from "./Components/DireactionScreen";
import { Welcome } from "./Pages/Onboarding/Welcome/Welcome";
import { AppSlides } from "./Pages/Onboarding/AppDeltailsSlides/AppSlides";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppProvider, useAppContext } from "./Context/AppContext";
import { LoginModel } from "./Components/LoginModel/LoginModel";

import * as SplashScreen from 'expo-splash-screen';
import { ChargerDetail } from "./Pages/ChargerDetail/ChargerDeatil";
import { Charging } from "./Pages/Charging/Charging";
import { ChargingComplete } from "./Pages/Charging/ChargingComplete";
import { PaymentSuccessfull } from "./Pages/Payment/PaymentSuccessfull";
import { Receipt } from "./Pages/Payment/Receipt";
import { Search } from "./Pages/Search/Search";
import { SelectVehicle } from "./Pages/SelectVehicle/SelectVehicle";
import { MapProvider } from "./Context/MapContext";
import { Recharge } from "./Pages/Wallet/Recharge";
import { Offers } from "./Pages/Wallet/Offers";
import { History } from "./Pages/Wallet/History";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TripSearch } from "./Pages/Trips/TripSearch";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = ({navigation}) => {
  const {isLoggedIn,setModalVisible,selectedTabs,setSelectedTabs} =useAppContext();

  const handleTabPress = async (e,tabName) => {
    console.log("tab pressed: " + tabName)
    if (tabName !== 'Home' && !isLoggedIn) {
      e.preventDefault();
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
      tabBarStyle: { backgroundColor: '#2E2A4F',color:"#fff",position:'absolute',bottom:0,paddingTop:2,paddingBottom:3},
    }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (

          
            <Ionicons name="home" color={color} size={size}  />
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
            <FontAwesome name="bookmark" size={size} color={color} />
          ),
         
        }}
        listeners={{
          tabPress: (e) => {
            handleTabPress(e,'Saved');
          },
        }}
       
      />

      <Tab.Screen
        name="Profile"
        component={Profile }
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
            
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
        name="Trips"
        component={Trips }
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
        component={ Wallet}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-wallet" size={size} color={color} />
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
// SplashScreen.preventAutoHideAsync();
export default function App() {
  const [Auth, setAuth]=useState(null);
  const [isAppFirstLaunched, setIsAppFirstLaunched] =useState(null);
  const [appIsReady, setAppIsReady] = useState(false);



  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        // await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync()
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(()=>{
    const checkAuthAndFirstLaunch = async () => {
       try {
         // Check authentication status
         const authStatus = await AsyncStorage.getItem('Auth') || null;
         setAuth(authStatus === 'true');
 
         // Check if app is launched for the first time
         const appData = await AsyncStorage.getItem('isAppFirstLaunched') || null;
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
 
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);
 
  if (!appIsReady) {
    return <Welcome/>;
  }
 
  
  return (
    <AppProvider>
      <MapProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
<NavigationContainer onLayout={onLayoutRootView}>
      {
       isAppFirstLaunched !== null && Auth !== null &&
         <Stack.Navigator initialRouteName={isAppFirstLaunched ? 'AppSlides' : Auth ? 'Tabs' : 'Login'}>
        {/* // <Stack.Navigator initialRouteName={'AppSlides'}> */}
        {/* <Stack.Screen name="Home" component={Home}
        options={{
          headerShown: false,
        }}
        /> */}
        
        <Stack.Screen name="AppSlides" component={AppSlides}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          
        />
         <Stack.Screen
          name="Plan A Trip"
          component={TripSearch}
          
        />
        <Stack.Screen name="Recharge" component={Recharge} />
        <Stack.Screen name="Offers" component={Offers} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Select Vehicle" component={SelectVehicle} />
       <Stack.Screen name="Charger Detail" component={ChargerDetail} />
       <Stack.Screen name="Charging" component={Charging} />
       <Stack.Screen name="Charging Complete" component={ChargingComplete} />
       <Stack.Screen name="Payment Successfull" component={PaymentSuccessfull} />
       <Stack.Screen name="Receipt" component={Receipt} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Directions" component={DirectionsScreen} />
      </Stack.Navigator>
      }
     
    </NavigationContainer>
    </GestureHandlerRootView>
    </MapProvider>
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
