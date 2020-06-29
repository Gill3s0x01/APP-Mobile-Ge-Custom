import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff0f6',
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    fontFamily: 'Lobster_400Regular',
    fontSize: 25,
    marginTop: 18,
    marginBottom: 16,
    color: '#636363',
  },

  TextDescription: {
    fontFamily: 'Ubuntu_400Regular',
    fontSize: 15,
    lineHeight: 24,
    color: '#636363',
    
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexDirection: 'row',
    
    
    
  },

  action: {
    backgroundColor: '#ffccff',
    borderRadius: 30,
    height:60,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    flexDirection: 'row',
    
    
  },

  ButtonAccess: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:3,
  },

  buttonText: {
    fontFamily: 'Ubuntu_400Regular',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:4,
    fontSize: 16,
    marginLeft: 12,
    color: '#ff00cc',
    
  },

  TextExplanation: {
    fontFamily: 'Ubuntu_400Regular',
    fontSize: 14,
    marginTop: 4,
    color: '#636363',


  },

  copyright:{
    fontSize: 13,
    marginLeft: 25,
    color: '#636363',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    
  },

  buttonTextDev: {
    fontFamily: 'Ubuntu_400Regular',
    marginTop:20,
    fontSize: 16,
    color: '#4169e1',
  },




});