import React, { Component } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';


function PageElo7Ate({ navigation }){
  

  return <WebView style={{ flex: 1 }} source={{ uri: 'https://www.elo7.com.br/gecustomatelie' }} />;
}

export default PageElo7Ate;