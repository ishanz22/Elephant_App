import React, {useState} from 'react';
import DatePicker from 'react-native-modern-datepicker';
import {View, StyleSheet} from 'react-native';

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: 'white', paddingTop: '10%'}}>
        <DatePicker onSelectedChange={date => setSelectedDate(date)} />
      </View>
    </View>
  );
};
export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    // paddingHorizontal: -16,

    paddingTop: 20,
  },
});
