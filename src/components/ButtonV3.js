import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {whiteColor} from '../constants';
import {blueColor} from '../constants';
class ButtonV3 extends Component {
  render() {
    const {onPress, title, color = whiteColor} = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.buttonLogin, {whiteColor: color}]}>
          <Text style={{color: blueColor, fontWeight: 'bold'}}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ButtonV3;

const styles = StyleSheet.create({
  buttonLogin: {
    paddingHorizontal: 42,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'white',
  },
});
