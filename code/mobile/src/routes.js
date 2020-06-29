import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



import Main from './pages/Main';
import PageCom from './pages/pageCom';
import PageElo7Ate from './pages/pageElo7Ate';
import PageElo7Des from './pages/pageElo7Des';
import PageInstaAte from './pages/pageInstaAte';
import PageInstaDes from './pages/pageInstaDes';



const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'Ge Custom Design / Atelie'
      },
    },
    PageCom: {
      screen: PageCom,
      navigationOptions: {
        title: 'Site Oficial / E-commerce'
      },
    },
    PageElo7Ate: {
      screen: PageElo7Ate,
      navigationOptions: {
        title: 'Elo7 / Ge Custom Atelie'
      },
    },
    PageElo7Des: {
      screen: PageElo7Des,
      navigationOptions: {
        title: 'Elo7 / Ge Custom Design'
      },
    },
    PageInstaAte: {
      screen: PageInstaAte,
      navigationOptions: {
        title: 'Instagram / Ge Custom Atelie'
      },
    },
    PageInstaDes: {
      screen: PageInstaDes,
      navigationOptions: {
        title: 'Instagram / Ge Custom Desing'
      },
    }, 
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: '#ffccff',
      
      },
    },
  })
);

export default Routes;