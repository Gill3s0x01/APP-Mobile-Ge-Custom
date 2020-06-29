import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';
import Routes from './src/routes';
import { Lobster_400Regular, useFonts } from '@expo-google-fonts/lobster';
import { Yellowtail_400Regular } from '@expo-google-fonts/yellowtail';
import { Ubuntu_400Regular } from '@expo-google-fonts/ubuntu';


export default function App() {

  const [fontsLoaded] = useFonts({
    Lobster_400Regular,
    Yellowtail_400Regular,
    Ubuntu_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }



  return (
    <>
      <StatusBar barStyle = "light-content" backgroundColor = '#ffccff'/>
      <Routes />
    </>
  );
}