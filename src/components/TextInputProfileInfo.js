import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput as Input,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {greenColor} from '../constants';

const TextInputProfileInfo = props => {
  const [hidePassword, setHidePassword] = useState(props.spyMode);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {}, []);

  const showHidePassword = () => {
    const icoImage = !hidePassword ? 'eye' : 'eye-slash';
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{position: 'absolute', end: 0, top: 32}}>
        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
          <Icon
            /* eslint-disable-next-line react-native/no-inline-styles */
            style={{marginEnd: 12}}
            name={icoImage}
            size={24}
            color="#32A0FF"
          />
        </TouchableOpacity>
      </View>
    );
  };

  const {errorMsg, onChangeText, placeholder, spyMode} = props;

  return (
    <View>
      <Text
        /* eslint-disable-next-line react-native/no-inline-styles */
        style={{
          color: greenColor,
          fontSize: 12,
          marginStart: 12,
          marginBottom: 4,
        }}>
        {errorMsg}
      </Text>
      <Input
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={hidePassword}
        /* eslint-disable-next-line react-native/no-inline-styles */
        style={[styles.inputForm, {borderWidth: isFocus ? 2 : 1}]}
      />
      {spyMode && showHidePassword()}
    </View>
  );
};

const styles = StyleSheet.create({
  inputForm: {
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    paddingHorizontal: 12,
    color: '#000000',
    borderColor: '#979797',
    height:170,
    paddingBottom:120
   
  },
});

export default TextInputProfileInfo;
