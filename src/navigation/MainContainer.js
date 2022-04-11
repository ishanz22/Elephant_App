import React from 'react';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import CreateBottomTabNavigator from '@react-navigation/bottom-tabs/src/navigators/createBottomTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import CoachingScreen from '../views/CoachingScreen';
import SettingScreen from '../views/SettingScreen';
import ShopScreen from '../views/ShopScreen';
import HomeStack from './Stack/HomeStack';
import KeyworkSearchScreen from '../views/KeyworkSearchScreen';
import InboxScreen from '../views/InboxScreen';
import SettingStack from './Stack/SettingStack';
import ShopStack from './Stack/ShopStack';
import ContactStack from './Stack/ContactStack';
import KeyworkStack from './Stack/KeyworkStack';
const Tab = CreateBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#767676"
      barStyle={{
        borderBottomWidth: 0,
        backgroundColor: 'white',

        // width:320
      }}
      tabBarOptions={{
        style: {
          backgroundColor: 'white',
          elevation: 50,
          shadowColor: '#52006A',
          height: 62,
          paddingTop: 7,
          paddingBottom: 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',

          tabBarIcon: ({color}) => (
            <Icon name="home-outline" color={'#767676'} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingStack}
        options={{
          // tabBarLabel: 'Notifications',

          tabBarIcon: ({color}) => (
            <Icon name="settings-outline" color={'#767676'} size={22} />
          ),
        }}
      />

      <Tab.Screen
        name="Shop"
        component={ShopStack}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="cart-outline" color={'#767676'} size={22} />
          ),
        }}
      />

      <Tab.Screen
        name="Contacts"
        component={ContactStack}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="person-outline" color={'#767676'} size={22} />
          ),
        }}
      />

      <Tab.Screen
        name="Keywork"
        component={KeyworkStack}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="md-documents-outline" color={'#767676'} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;
