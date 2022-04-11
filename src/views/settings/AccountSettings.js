import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import TextInputProfileInfo from '../../components/TextInputProfileInfo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TextInput from '../../components/TextInput';
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';
import {blueColor} from '../../constants';
const AccountSettings = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: 'white',
      }}>
      <KeyboardAvoidingWrapper>
        <View>
          <Text
            /* eslint-disable-next-line react-native/no-inline-styles */
            style={{
              fontSize: 18,
              color: 'black',

              marginTop: 20,
            }}>
            Profile info{' '}
          </Text>

          <TextInputProfileInfo placeholder={'Lorem'} />
          <View
            style={{
              height: 40,
              width: '100%',
              borderBottomColor: '#DADADA',
              borderBottomWidth: 1,
            }}
          />
          <Text
            /* eslint-disable-next-line react-native/no-inline-styles */
            style={{
              fontSize: 18,
              color: 'black',

              marginTop: 30,
              fontWeight: 'bold',
            }}>
            Profile info{' '}
          </Text>
          <Text
            /* eslint-disable-next-line react-native/no-inline-styles */
            style={{
              fontSize: 18,
              color: 'black',

              marginTop: 20,
            }}>
            Current Password{' '}
          </Text>
          <TextInput
            placeholderTextColor="red"
            placeholder={'*********'}
            spyMode
          />
          <Text
            /* eslint-disable-next-line react-native/no-inline-styles */
            style={{
              fontSize: 18,
              color: 'black',

              marginTop: 20,
            }}>
            New Password{' '}
          </Text>
          <TextInput
            placeholderTextColor="red"
            placeholder={'*********'}
            spyMode
          />
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.buttonRegist}>
              {/* eslint-disable-next-line react-native/no-inline-styles */}
              <Text style={{color: '#FFF', fontWeight: 'bold'}}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingWrapper>
    </View>
  );
};
export default AccountSettings;
const styles = StyleSheet.create({
  buttonRegist: {
    paddingHorizontal: 42,
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: blueColor,
    marginTop: 20,
  },
});
