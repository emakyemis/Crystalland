import React,{Component} from 'react';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import DrawerContainer from "./DrawerContainer";
import Home from './screens/Home';
import Profile from './screens/Profile';
import ParaYukle from './screens/ParaYukle';
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';

const getTabBarIcon = icon => ({ tintColor }) => (
  <MaterialIcons name={icon} size={26} style={{ color: tintColor }} />
);

const ParaYukleScreens = createStackNavigator(
  {
    ParaYukle,
  },
  {
    
    navigationOptions: {
      tabBarIcon: getTabBarIcon('money'),
    },
  },
);

const ProfileScreens = createStackNavigator(
  {
    Profile,
  },
  {
    navigationOptions: {
      tabBarIcon: getTabBarIcon('person'),
    },
  },
);

const HomeScreens = createStackNavigator(
  {
    Home,
  },
  {
    navigationOptions: {
      tabBarIcon: getTabBarIcon('home'),
    },
  },
);

const TabNavigator = createBottomTabNavigator(
  {
    Profile: ProfileScreens,
    Home: HomeScreens,
    ParaYukle: ParaYukleScreens,

  },
  {
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        backgroundColor: '#fff',
      },
      showLabel: false,
      showIcon: true,
      activeTintColor: '#b03060',
      inactiveTintColor: '#000',
    },
  },
);
const DrawerStack = createDrawerNavigator(
  {
    Tab: TabNavigator
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'Tab',
    drawerWidth: 250,
    contentComponent: DrawerContainer
  }
);
const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});


export default class MainAppContainer extends Component {
  constructor(props) {

    super(props);

    this.state = {

      role: '',
    }

    this.arrayholder = [];
    this.navigation = props.navigation;

  }

  render() {
      return (<AppContainer />);
  }
}


const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Loading: {
        screen: LoginScreen,
        navigationOptions: {
          headerShown: false,
        },
      },
      App: DrawerStack,TabNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Loading',
    },
    
  )
);
