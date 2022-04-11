import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {blueColor} from '../constants';
class Button extends Component {
  render() {
    const {onPress, title, color = blueColor} = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.buttonLogin, {blueColor: color}]}>
          <Text style={{color: '#FFF', fontWeight: 'bold'}}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Button;

const styles = StyleSheet.create({
  buttonLogin: {
    paddingHorizontal: 42,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    borderRadius: 8,
  },
});
