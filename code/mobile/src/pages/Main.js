import React from 'react';
import { Feather } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import logoImg from '../assets/logo.png';
import style from './style';

function Main({ navigation }) {
  return <ScrollView style={ScrollView}>
    <View style = {style.container}> 
    
      <View style = {style.header}>
        <Image source= {logoImg} />

      </View>

      <Text style= {style.title}>Seja Bem Vinda(o)!!</Text>

      <Text style={style.TextDescription}>Escolha abaixo, a opção que deseja acessar:
      </Text>

      <View style={style.action}>
        <TouchableOpacity 
          style={style.ButtonAccess} 
          onPress={() => {navigation.navigate('PageInstaDes', {perfil_instagram: 'gecustomdesign'});
        }} >
          <Feather name="instagram" size={30} color='#ff00cc' />
          <Text style={style.buttonText}>Ge Custom Design</Text>
        </TouchableOpacity>
      </View>
      <Text style={style.TextExplanation}>Instagram / Materiais para artesanato
      </Text>

      <View style={style.action}>
        <TouchableOpacity 
          style={style.ButtonAccess} 
          onPress={() => {navigation.navigate('PageInstaAte', {perfil_instagram: 'gecustomatelie'});
        }} >
          <Feather name="instagram" size={30} color='#ff00cc' />
          <Text style={style.buttonText}>Ge Custom Atelie</Text>
        </TouchableOpacity>
      </View>
      <Text style={style.TextExplanation}>Instagram / Laços e acessórios 
      </Text>

      <View style={style.action}>
        <TouchableOpacity 
          style={style.ButtonAccess} 
          onPress={() => {navigation.navigate('PageElo7Des', {perfil_elo7: 'gecustomdesign'});
        }} >
          <Feather name="shopping-cart" size={30} color='#ff00cc' />
          <Text style={style.buttonText}>Elo7 Ge C. Design</Text>
        </TouchableOpacity>
      </View>
      <Text style={style.TextExplanation}>Loja Elo7 / Materiais para artesanato
      </Text>

      <View style={style.action}>
        <TouchableOpacity 
          style={style.ButtonAccess} 
          onPress={() => {navigation.navigate('PageElo7Ate', {perfil_elo7: 'gecustomatelie'});
        }} >
          <Feather name="shopping-cart" size={30} color='#ff00cc' />
          <Text style={style.buttonText}>Elo7 Ge C. Atelie</Text>
        </TouchableOpacity>
      </View>
      <Text style={style.TextExplanation}>Loja Elo7 / Laços e acessórios
      </Text>

      <View style={style.action}>
        <TouchableOpacity 
          style={style.ButtonAccess} 
          onPress={() => {navigation.navigate('PageCom', {site_ecommerce: 'gecustomdesign'});
        }} >
          <Feather name="shopping-bag" size={30} color='#ff00cc' />
          <Text style={style.buttonText}>Site/E-commerce</Text>
        </TouchableOpacity>
      </View>
      <Text style={style.TextExplanation}>Site Ge Custom Design / Atelie
      </Text>

      <View style={style.action}>
        <TouchableOpacity 
          style={style.ButtonAccess} 
          onPress={() => {{Linking.openURL('https://api.whatsapp.com/send?phone=5511997031148&text=Ola, tudo bem?')}}} 
        >
          <Feather name="message-circle" size={30} color='#ff00cc' />
          <Text style={style.buttonText}>Whatssapp</Text>
        </TouchableOpacity>
      </View>  
      <Text style={style.TextExplanation}>Link direto de nosso Whatsapp
      </Text> 

      <View style={style.actionDev}>
        <TouchableOpacity 
          style={style.ButtonDev} 
          onPress={() => {{Linking.openURL('https://lorison-gilles.netlify.app/')}}} 
        >
          <Text style={style.buttonTextDev}>Developer Lorison Gilles</Text>
        </TouchableOpacity>
      </View>  

    </View>
    <Text style={style.copyright}>Copyright © 2020 - Todos os direitos reservados - Ge Custom
      </Text> 
  </ScrollView>
}

export default Main;