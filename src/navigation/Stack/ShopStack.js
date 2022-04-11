import React from 'react';
import {Image, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../../views/HomeScreen';
import {TouchableOpacity} from 'react-native';
import RecordScreen from '../../views/RecordScreen';
import calendarScreen from '../../views/CalendarScreen';
import galleryScreen from '../../views/GalleryScreen';
import inboxScreen from '../../views/InboxScreen';
import CoachingScreen from '../../views/CoachingScreen';
import SettingScreen from '../../views/SettingScreen';
import ShopScreen from '../../views/ShopScreen';
import ShopName from '../../views/shop/ShopName';
const Stack = createStackNavigator();

const ShopStack = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'left',
      headerTitleStyle: {
        color: 'black',
        fontFamily: 'sans-serif-medium',

        textAlign: 'center',
        fontSize: 25,
        //    paddingTop:30
        top: 20,
      },
      headerLeft: () => (
        <Ionicons
          name="chevron-back"
          size={25}
          backgroundColor="#fff"
          color="black"
          style={{top: 22, paddingHorizontal: 16}}
        />
      ),
      headerStyle: {
        elevation: 0,
      },
      headerRight: () => <View style={{marginRight: 10}} />,
    }}>
    <Stack.Screen
      name="Shop"
      component={ShopScreen}
      options={{
        title: 'Shop',
        textAlign: 'center',
      }}
    />

    <Stack.Screen
      name="ShopName"
      component={ShopName}
      options={{
        name: 'ShopName ',
        headerTitle: 'Shop Name',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          top: 20,
          fontSize: 27,
          paddingHorizontal: '15%',
          width: '110%',
        },
        headerLeft: () => (
          <TouchableOpacity>
            <Ionicons
              name="chevron-back"
              size={25}
              backgroundColor="#fff"
              color="black"
              style={{top: 20, paddingHorizontal: 16}}
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
        ),
        headerRight: () => <View style={{paddingTop: 40, marginRight: 20}} />,
      }}
    />
  </Stack.Navigator>

  //
);

export default ShopStack;
