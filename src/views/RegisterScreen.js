import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import TextInput from '../components/TextInput';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
import {blueColor, secondaryDarkColor} from '../constants';

const RegisterScreen = () => {
  const navigation = useNavigation();

  return (

      <View style={{flex: 1, backgroundColor: 'white',paddingTop:40,paddingHorizontal:12}}>
      <KeyboardAvoidingWrapper>
      <View>
        <View style={styles.content}>
          <FontAwesome5.Button
            name="chevron-left"
            size={20}
            backgroundColor="white"
            color="black"
            onPress={() => navigation.goBack()}

          />
          <Text
            /* eslint-disable-next-line react-native/no-inline-styles */
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: 'black',
              // paddingHorizontal: '30%',
              paddingHorizontal:'25%'
            }}>
            Register
          </Text>
        </View>

        {/* Base Form */}
        <View style={styles.baseForm}>
          {/* eslint-disable-next-line react-native/no-inline-styles */}
          <Text style={{fontSize: 18, color: 'black', marginBottom: -10}}>
            Enter Your Name
          </Text>
          <TextInput placeholder={'write your name here'} />
          <Text
            /* eslint-disable-next-line react-native/no-inline-styles */
            style={{
              fontSize: 18,
              color: 'black',
              marginBottom: -10,
              marginTop: 20,
            }}>
            {' '}
            Enter your email{' '}
          </Text>
          <TextInput placeholder={'sample@gmail.com'} />

          <Text
            /* eslint-disable-next-line react-native/no-inline-styles */
            style={{
              fontSize: 18,
              color: 'black',
              marginBottom: -10,
              marginTop: 20,
            }}>
            {' '}
            Enter your current City{' '}
          </Text>

          <TextInput placeholder={'write your current City'} />
          <Text
            /* eslint-disable-next-line react-native/no-inline-styles */
            style={{
              fontSize: 18,
              color: 'black',
              marginBottom: -10,
              marginTop: 20,
            }}>
            Contact number{' '}
          </Text>

          <TextInput placeholder={'Enter your Contact Number'} />

          <Text
            /* eslint-disable-next-line react-native/no-inline-styles */
            style={{
              fontSize: 18,
              color: 'black',
                marginBottom: -10,
              marginTop: 20,
            }}>
            Register as{' '}
          </Text>
          <View style={styles.menuItem}>
            <View
              /* eslint-disable-next-line react-native/no-inline-styles */
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                /* eslint-disable-next-line react-native/no-inline-styles */
                style={{
                  width: '48%',
                  height: 50,
                  backgroundColor: '#F2FFF3',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: '#00A92F',
                }}>
                <Text>User</Text>
              </View>

              <View
                /* eslint-disable-next-line react-native/no-inline-styles */
                style={{
                  width: '48%',
                  height: 50,
                  backgroundColor: '#F5F0FF',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: '#4E0073',
                }}>
                <Text>Vendor</Text>
              </View>
            </View>
          </View>

          {/* <TouchableOpacity onPress={() => this._onClickBtnRegister()}> */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('login');
            }}>
            <View style={styles.buttonRegist}>
              {/* eslint-disable-next-line react-native/no-inline-styles */}
              <Text style={{color: '#FFF', fontWeight: 'bold'}}>REGISTER</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity />
        </View>
        </View>
        </KeyboardAvoidingWrapper>
      </View>
    // </KeyboardAvoidingWrapper>
  );
};

const styles = StyleSheet.create({

  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
    paddingTop: 40,

  },
  baseForm: {
    marginTop: 0,
    width: '100%',
    paddingVertical: 25,

    paddingHorizontal: 20,
  },
  title: {
    color: 'white',
    fontSize: 14,
    alignSelf: 'center',
    marginTop: 42,
    marginBottom: 25,
  },
  inputForm: {
    backgroundColor: secondaryDarkColor,
    borderRadius: 8,
    paddingHorizontal: 12,
    color: '#FFF',
    marginBottom: 18,
  },
  buttonRegist: {
    paddingHorizontal: 42,
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: blueColor,
    marginTop: 15,
  },
  menuItem: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    paddingVertical: 15,
  },
  content: {
    flexDirection: 'row',

    marginTop: 0,
    width: '100%',
  },
});

export default RegisterScreen;
