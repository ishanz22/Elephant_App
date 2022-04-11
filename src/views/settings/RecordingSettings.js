import React from 'react';
import {Text, View, Image} from 'react-native';

const RecordingSettings = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: 'white',
      }}>
      <Text
        /* eslint-disable-next-line react-native/no-inline-styles */
        style={{
          fontSize: 18,
          color: 'black',
          marginBottom: -10,
          marginTop: 20,
        }}>
        {' '}
        Video length{' '}
      </Text>

      <Image
        /* eslint-disable-next-line react-native/no-inline-styles */
        style={{height: '20%', width: '110%', alignSelf: 'center'}}
        source={require('../../assets/1h.png')}
      />
    </View>
  );
};
export default RecordingSettings;
