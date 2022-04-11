import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeHome from '../views/WelcomeHome';
import LoginScreen from '../views/LoginScreen';
import HomeScreen from '../views/HomeScreen';
import WelcomeScreen from '../views/WelcomScreen';
import RegisterScreen from '../views/RegisterScreen';
import CoachingScreen from '../views/CoachingScreen';
import ShopScreen from '../views/ShopScreen';
import KeyworkSearchScreen from '../views/KeyworkSearchScreen';
import SettingScreen from '../views/SettingScreen';
import MainTabScreen from '../navigation/MainContainer';
import RecordScreen from '../views/RecordScreen';
import InboxScreen from '../views/InboxScreen';
import CalendarScreen from '../views/CalendarScreen';
import GalleryScreen from '../views/GalleryScreen';
import UploadScreen from '../views/UploadScreen';
import CalenderSettings from '../views/settings/CalenderSettings';
import RecordingSettings from '../views/settings/RecordingSettings';
import StorageSettings from '../views/settings/StorageSettings';
import MessageSettings from '../views/settings/MessageSettings';
import AccountSettings from '../views/settings/AccountSettings';
import HelpSettings from '../views/settings/HelpSettings';
import SecuritySettings from '../views/settings/SecuritySettings';
import ShopName from '../views/shop/ShopName';
const Stack = createStackNavigator();

const hide = {headerShown: false};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="welcome">
      <Stack.Screen name="welcome" component={WelcomeScreen} options={hide} />
      <Stack.Screen name="welcomeHome" component={WelcomeHome} options={hide} />
      <Stack.Screen name="home" component={HomeScreen} options={hide} />
      <Stack.Screen name="login" component={LoginScreen} options={hide} />
      <Stack.Screen name="register" component={RegisterScreen} options={hide} />
      <Stack.Screen
        name="MainTabScreen"
        component={MainTabScreen}
        options={hide}
      />

      <Stack.Screen name="coaching" component={CoachingScreen} options={hide} />
      <Stack.Screen name="shop" component={ShopScreen} options={hide} />
      <Stack.Screen
        name="keywork"
        component={KeyworkSearchScreen}
        options={hide}
      />
      <Stack.Screen name="settings" component={SettingScreen} options={hide} />
      <Stack.Screen name="record" component={RecordScreen} options={hide} />
      <Stack.Screen name="inbox" component={InboxScreen} options={hide} />
      <Stack.Screen name="calendar" component={CalendarScreen} options={hide} />
      <Stack.Screen name="gallery" component={GalleryScreen} options={hide} />
      <Stack.Screen name="upload" component={UploadScreen} options={hide} />

      <Stack.Screen
        name="CalenderSettings"
        component={CalenderSettings}
        options={hide}
      />
      <Stack.Screen
        name="RecordingSettings"
        component={RecordingSettings}
        options={hide}
      />
      <Stack.Screen
        name="MessageSettings"
        component={MessageSettings}
        options={hide}
      />
      <Stack.Screen
        name="AccountSettings"
        component={AccountSettings}
        options={hide}
      />
      <Stack.Screen
        name="StorageSettings"
        component={StorageSettings}
        options={hide}
      />
      <Stack.Screen
        name="HelpSettings"
        component={HelpSettings}
        options={hide}
      />
      <Stack.Screen
        name="SecuritySettings"
        component={SecuritySettings}
        options={hide}
      />

      <Stack.Screen name="ShopName" component={ShopName} options={hide} />
    </Stack.Navigator>
  );
};
export default Router;
