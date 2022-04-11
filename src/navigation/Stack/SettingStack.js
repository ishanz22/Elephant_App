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
import CalenderSettings from '../../views/settings/CalenderSettings';
import RecordingSettings from '../../views/settings/RecordingSettings';
import StorageSettings from '../../views/settings/StorageSettings';
import MessageSettings from '../../views/settings/MessageSettings';
import AccountSettings from '../../views/settings/AccountSettings';
import HelpSettings from '../../views/settings/HelpSettings';
import SecuritySettings from '../../views/settings/SecuritySettings';
const Stack = createStackNavigator();

const SettingStack = ({navigation}) => (
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
      name="Home"
      component={SettingScreen}
      options={{
        title: 'Settings',
        textAlign: 'center',
      }}
    />

    <Stack.Screen
      name="CalenderSettings"
      component={CalenderSettings}
      options={{
        name: 'CalenderSettings ',
        headerTitle: 'Calender Setting',
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

    <Stack.Screen
      name="RecordingSettings"
      component={RecordingSettings}
      options={{
        name: 'RecordingSettings ',
        headerTitle: 'Recording Setting',
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

    <Stack.Screen
      name="MessageSettings"
      component={MessageSettings}
      options={{
        name: 'MessageSettings ',
        headerTitle: 'Message Setting',
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

    <Stack.Screen
      name="AccountSettings"
      component={AccountSettings}
      options={{
        name: 'AccountSettings ',
        headerTitle: 'Account Setting',
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

    <Stack.Screen
      name="StorageSettings"
      component={StorageSettings}
      options={{
        name: 'StorageSettings ',
        headerTitle: 'Storage Setting',
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

    <Stack.Screen
      name="HelpSettings"
      component={HelpSettings}
      options={{
        name: 'HelpSettings ',
        headerTitle: 'Help Setting',
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

    <Stack.Screen
      name="SecuritySettings"
      component={SecuritySettings}
      options={{
        name: 'SecuritySettings ',
        headerTitle: 'Security Settings ',
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

export default SettingStack;
