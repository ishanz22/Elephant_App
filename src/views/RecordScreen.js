import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const RecordScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        /* eslint-disable-next-line react-native/no-inline-styles */
        style={{height: '50%', width: '70%', top: '20%'}}
        source={require('../assets/reccord.png')}
      />
    </View>
  );
};

export default RecordScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 16,

    alignItems: 'center',
  },
});
