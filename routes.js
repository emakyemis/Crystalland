import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import Home from './screens/Home';
import Profile from './screens/Profile';
import ParaYukle from './screens/ParaYukle';

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

const HomeScreens = createStackNavigator(
  {
    Profile,
  },
  {
    navigationOptions: {
      tabBarIcon: getTabBarIcon('person'),
    },
  },
);

const ProfileScreens = createStackNavigator(
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
    //initialRouteName: 'Home',
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

export default createAppContainer(TabNavigator);
