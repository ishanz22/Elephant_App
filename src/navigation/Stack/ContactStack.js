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

const Stack = createStackNavigator();

const ContactStack = ({navigation}) => (
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
      name="Contact"
      component={CoachingScreen}
      options={{
        title: 'Contact',
        textAlign: 'center',
      }}
    />
  </Stack.Navigator>

  //
);

export default ContactStack;
