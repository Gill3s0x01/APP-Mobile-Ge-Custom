import React, { Component } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';


function PageCom({ navigation }){
  

  return <WebView style={{ flex: 1 }} source={{ uri: 'https://www.gecustomdesign.com' }} />;
}

export default PageCom;