import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import "@expo/metro-runtime";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Home from './screen/home';
import Header from './screen/header';
import Text from './screen/text';
import Button from './screen/button'
import Image from './screen/image';
import Card from './screen/card';

const Stack = createStackNavigator();

export const useFonts = async () => {
  await Font.loadAsync({
    'OpenSans-Regular': require('./assets/fonts/Open_Sans/OpenSans-Regular.ttf'),
    'OpenSans-Bold': require('./assets/fonts/Open_Sans/OpenSans-Bold.ttf'), 
    'OpenSans-Italic': require('./assets/fonts/Open_Sans/OpenSans-Italic.ttf'),   
  });
};

function Navigator() {
  return (
    <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="header" component={Header} />
      <Stack.Screen name="text" component={Text} />
      <Stack.Screen name="button" component={Button} />
      <Stack.Screen name="image" component={Image} />
      <Stack.Screen name="card" component={Card} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await useFonts();
      SplashScreen.hideAsync().catch(() => {   
      });
      setFontsLoaded(true); 
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}






