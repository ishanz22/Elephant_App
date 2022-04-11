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
const Stack = createStackNavigator();

const HomeStack = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'left',
      headerTitleStyle: {
        color: '#2e64e5',
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 18,
      },
      headerLeft: () => (
        <Image
          style={{
            height: 20,
            width: 30,
            left: 20,
            top: 20,
          }}
        />
      ),
      headerStyle: {
        elevation: 0,
      },
      headerRight: () => <View style={{marginRight: 10}} />,
    }}>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: ' ',
      }}
    />

    <Stack.Screen
      name="record"
      component={RecordScreen}
      options={{
        name: 'record ',
        headerTitle: 'Record',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          top: 20,
          fontSize: 27,
          paddingHorizontal: '15%',
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
      name="calendar"
      component={calendarScreen}
      options={{
        name: 'calendar ',
        headerTitle: 'Calendar',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          top: 20,
          fontSize: 27,
          paddingHorizontal: '10%',
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
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
        headerRight: () => (
          <View style={{paddingTop: 40, paddingHorizontal: 16}} />
        ),
      }}
    />

    <Stack.Screen
      name="gallery"
      component={galleryScreen}
      options={{
        name: 'gallery ',
        headerTitle: 'Gallery',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          top: 20,
          fontSize: 27,

          paddingHorizontal: '15%',
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
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
      name="inbox"
      component={inboxScreen}
      options={{
        name: 'inbox ',
        headerTitle: 'Inbox',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          top: 20,
          fontSize: 27,

          paddingHorizontal: '20%',
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
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

export default HomeStack;
