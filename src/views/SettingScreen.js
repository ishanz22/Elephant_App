import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableRipple} from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';
const SettingScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{marginTop: 20}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CalenderSettings');
          }}
          style={styles.ripple}>
          <View style={styles.menuItem}>
            <Icon
              name="md-calendar-outline"
              size={25}
              backgroundColor="#fff"
              color="black"
            />
            <Text style={styles.menuItemText}>Calendar Settings</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RecordingSettings');
          }}
          style={styles.ripple}>
          <View style={styles.menuItem}>
            <Icon
              name="recording-outline"
              size={25}
              backgroundColor="#fff"
              color="black"
            />
            <Text style={styles.menuItemText}>Recording</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MessageSettings');
          }}
          style={styles.ripple}>
          <View style={styles.menuItem}>
            <Icon
              name="ios-chatbox-outline"
              size={25}
              backgroundColor="#fff"
              color="black"
            />
            <Text style={styles.menuItemText}>Message</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AccountSettings');
          }}
          style={styles.ripple}>
          <View style={styles.menuItem}>
            <Icon
              name="person-outline"
              size={25}
              backgroundColor="#fff"
              color="black"
            />
            <Text style={styles.menuItemText}>Account</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('StorageSettings');
          }}
          style={styles.ripple}>
          <View style={styles.menuItem}>
            <Icon
              name="ios-hardware-chip-outline"
              size={25}
              backgroundColor="#fff"
              color="black"
            />
            <Text style={styles.menuItemText}>Storage</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('HelpSettings');
          }}
          style={styles.ripple}>
          <View style={styles.menuItem}>
            <Icon
              name="md-help-circle-outline"
              size={25}
              backgroundColor="#fff"
              color="black"
            />
            <Text style={styles.menuItemText}>Help</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SecuritySettings');
          }}
          style={styles.ripple}>
          <View style={styles.menuItem}>
            <Icon
              name="md-shield-checkmark-outline"
              size={25}
              backgroundColor="#fff"
              color="black"
            />
            <Text style={styles.menuItemText}>Security</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    top: 12,
    height: '10%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  ripple: {
    backgroundColor: 'white',

    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',

    height: 60,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
  menuItemText: {
    color: 'black',
    paddingLeft: 10,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
