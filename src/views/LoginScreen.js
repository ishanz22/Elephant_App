import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import {useNavigation} from '@react-navigation/native';
import {blueColor} from '../constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <KeyboardAvoidingWrapper>
        <View>
          <View style={styles.content}>
            <FontAwesome5.Button
              name="chevron-left"
              size={20}
              backgroundColor="#fff"
              color="black"
              onPress={() => navigation.goBack()}
            />
          </View>
          <Text
            /* eslint-disable-next-line react-native/no-inline-styles */
            style={{
              marginTop: 42,
              fontSize: 30,
              color: 'black',
              paddingHorizontal: 16,
              fontWeight: 'bold',
            }}>
            Login
          </Text>
          <Text
            /* eslint-disable-next-line react-native/no-inline-styles */
            style={{
              paddingHorizontal: 16,
              color: '#8C8C8C',
              marginTop: 30,
              fontSize: 15,
            }}>
            Your new password must be different from previous used password..
          </Text>

          {/* Input Form */}
          <View style={styles.baseForm}>
            <TextInput placeholder={'Username'} />
            <TextInput
              placeholderTextColor="red"
              placeholder={'Password'}
              spyMode
            />

            <TouchableOpacity>
              <Text
                /* eslint-disable-next-line react-native/no-inline-styles */
                style={{
                  fontSize: 13,
                  color: 'grey',
                  textAlign: 'right',
                  paddingTop: 10,
                  paddingBottom: 20,
                }}>
                {' '}
                Forgot password ?
              </Text>
            </TouchableOpacity>

            {/*login button*/}
            <View
              /* eslint-disable-next-line react-native/no-inline-styles */
              style={{
                marginTop: 40,
                backgroundColor: blueColor,
                borderRadius: 8,
              }}>
              <Button
                title="LOGIN"
                onPress={() => {
                  navigation.navigate('MainTabScreen');
                }}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 16,

    // alignItems: 'center',
  },
  baseForm: {
    paddingTop: 30,
    backgroundColor: 'white',
    width: '100%',
    paddingVertical: 54,
    paddingHorizontal: 16,
  },
  content: {
    flexDirection: 'row',

    marginTop: 0,
    width: '100%',
  },
});

export default LoginScreen;
