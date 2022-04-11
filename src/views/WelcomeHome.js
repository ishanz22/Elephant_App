import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Button from '../components/Button';
import ButtonV3 from '../components/ButtonV3';
import {useNavigation} from '@react-navigation/native';

const WelcomeHome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        /* eslint-disable-next-line react-native/no-inline-styles */
        style={{marginTop: '25%', marginBottom: 32}}
        source={require('../assets/ElephantLogo.png')}
      />

      {/*title*/}
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
        E L E P H A N T
      </Text>
      <Text
        /* eslint-disable-next-line react-native/no-inline-styles */
        style={{
          textAlign: 'center',
          paddingHorizontal: 20,
          color: 'white',
          marginTop: 30,
        }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting dummy
        text ever since the 1500s.
      </Text>

      {/* Input Form */}
      <View style={styles.baseForm}>
        {/*login button*/}
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <View style={{marginTop: 50}}>
          <Button
            title="Register"
            onPress={() => {
              navigation.navigate('register');
            }}
          />
        </View>

        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <View style={{marginTop: 20}}>
          <ButtonV3
            title="LOGIN"
            onPress={() => {
              navigation.navigate('login');
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#32A0FF',
    flex: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  baseForm: {
    paddingTop: 10,
    backgroundColor: '#32A0FF',
    width: '100%',
    paddingVertical: 54,
    paddingHorizontal: 16,
  },
});

export default WelcomeHome;
