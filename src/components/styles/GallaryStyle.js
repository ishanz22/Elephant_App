import React from 'react';
import {AppRegistry,StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';


const GallaryStyle = () => {
  return (
      <>
    <View style={styles.container}>
    <View>
    <TouchableOpacity>
      <Image style={{width:145,height:135,borderRadius:10}} source={require('../../assets/nature.jpeg')} />

      <Text style={styles.detail}>Lorem Ipsum </Text>
      </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity>
      <Image style={{width:145,height:135,borderRadius:10}} source={require('../../assets/nature-hd.jpg')} />
      <Text style={styles.detail}>Lorem Ipsum </Text>
      </TouchableOpacity>
</View>
    </View>


    <View style={styles.secondContainer}>
    <View>
    <TouchableOpacity>
      <Image style={{width:145,height:135,borderRadius:10}} source={require('../../assets/23277.jpg')} />
      <Text style={styles.detail}>Lorem Ipsum </Text>
      </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity>
      <Image style={{width:145,height:135,borderRadius:10}} source={require('../../assets/qJntUC.jpg')} />
      <Text style={styles.detail}>Lorem Ipsum </Text>
      </TouchableOpacity>
</View>
    </View>
    </>

  );
};

export default GallaryStyle;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',


    flexDirection:'row',
   paddingTop:30,
    justifyContent:'space-evenly'


  },
  detail:{
      textAlign:'center'
  },
  secondContainer:{
    backgroundColor: 'white',


    flexDirection:'row',
   paddingTop:20,
    justifyContent:'space-evenly'
  }
});
