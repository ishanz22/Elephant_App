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
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TextInput from '../../components/TextInput';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Icon from 'react-native-vector-icons/Ionicons';
const CalenderSettings = () => {
  const navigation = useNavigation();
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  const Fonts = ['Roboto', 'Open Sans', 'Lato', 'Poppins'];
  const FontSize = ['10', '11', '12', '13', '14'];
  const Format = ['MM/DD/YYYY', 'DD/MM/YYYY'];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 20,
        paddingHorizontal: 12,
      }}>
      <KeyboardAvoidingWrapper>
        <View>
          {/* Base Form */}
          <View style={styles.baseForm}>
            {/* eslint-disable-next-line react-native/no-inline-styles */}
            <Text
              style={{
                fontSize: 18,
                color: 'black',
                paddingBottom: 20,
                paddingHorizontal: 0,
              }}>
              Change Color
            </Text>

            {/* <TextInput placeholder={'write your name here'} /> */}
            <View style={{flexDirection: 'row', paddingHorizontal: 2}}>
              <TouchableOpacity>
                <View
                  style={{
                    height: 28,
                    width: 28,
                    borderWidth: 0,
                    borderColor: 'black',
                    backgroundColor: '#000000',
                    borderRadius: 2,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    height: 28,
                    width: 28,
                    borderWidth: 0,
                    borderColor: 'black',
                    backgroundColor: '#E24848',
                    marginLeft: 10,
                    borderRadius: 2,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    height: 28,
                    width: 28,
                    borderWidth: 0,
                    borderColor: 'black',
                    backgroundColor: '#F5CE42',
                    marginLeft: 10,
                    borderRadius: 2,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    height: 28,
                    width: 28,
                    borderWidth: 0,
                    borderColor: 'black',
                    backgroundColor: '#63DDA3',
                    marginLeft: 10,
                    borderRadius: 2,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    height: 28,
                    width: 28,
                    borderWidth: 0,
                    borderColor: 'black',
                    backgroundColor: '#BB56CB',
                    marginLeft: 10,
                    borderRadius: 2,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    height: 28,
                    width: 28,
                    borderWidth: 0,
                    borderColor: 'black',
                    backgroundColor: '#23B0FF',
                    marginLeft: 10,
                    borderRadius: 2,
                  }}
                />
              </TouchableOpacity>
            </View>

            <Text
              /* eslint-disable-next-line react-native/no-inline-styles */
              style={{
                fontSize: 18,
                color: 'black',
                marginBottom: -10,
                marginTop: 20,
                paddingBottom: 20,
              }}>
              Change Font{' '}
            </Text>
            {/* <TextInput placeholder={'sample@gmail.com'} /> */}
            <SelectDropdown
              data={Fonts}
              // defaultValueByIndex={1}
              // defaultValue={'Egypt'}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText={'Lato'}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return (
                  <FontAwesome
                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                    color={'#979797'}
                    size={18}
                  />
                );
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            />
            <Text
              /* eslint-disable-next-line react-native/no-inline-styles */
              style={{
                fontSize: 18,
                color: 'black',
                marginBottom: -10,
                marginTop: 20,
                paddingBottom: 20,
              }}>
              Font Size{' '}
            </Text>

            {/* <TextInput placeholder={'write your current City'} /> */}
            <SelectDropdown
              data={FontSize}
              // defaultValueByIndex={1}
              // defaultValue={'Egypt'}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText={'11'}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return (
                  <FontAwesome
                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                    color={'#979797'}
                    size={18}
                  />
                );
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            />
            <Text
              /* eslint-disable-next-line react-native/no-inline-styles */
              style={{
                fontSize: 18,
                color: 'black',
                marginBottom: -10,
                marginTop: 20,
                paddingBottom: 20,
              }}>
              Format{' '}
            </Text>

            <SelectDropdown
              data={Format}
              // defaultValueByIndex={1}
              // defaultValue={'Egypt'}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText={'DD/MM/YYYY'}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return (
                  <FontAwesome
                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                    color={'#979797'}
                    size={18}
                  />
                );
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            />
          </View>
        </View>
      </KeyboardAvoidingWrapper>
    </View>
  );
};
export default CalenderSettings;

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

    paddingHorizontal: 8,
  },
  title: {
    color: 'white',
    fontSize: 14,
    alignSelf: 'center',
    marginTop: 42,
    marginBottom: 25,
  },
  inputForm: {
    backgroundColor: 'black',
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
    backgroundColor: 'blue',
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

  dropdown1BtnStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#979797',
  },

  dropdown1BtnTxtStyle: {color: '#979797', textAlign: 'left'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
});
