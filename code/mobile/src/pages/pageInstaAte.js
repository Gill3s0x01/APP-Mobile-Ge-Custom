import React, { Component } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';


function PageInstaAte({ navigation }){
  

  return <WebView style={{ flex: 1 }} source={{ uri: 'https://www.instagram.com/gecustomatelie/' }} />;
}

export default PageInstaAte;