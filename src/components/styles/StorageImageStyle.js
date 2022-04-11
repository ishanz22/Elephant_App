import React from 'react';
import {AppRegistry,StyleSheet, Text, View,Image,TouchableOpacity,Alert} from 'react-native';
import { Searchbar } from 'react-native-paper';


const StorageImageStyle = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
  return (
      <>
      <View style={{paddingTop:20,paddingBottom:5,marginHorizontal:16}}>
        <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    </View>

    <View style={styles.container}>

    <View>

      <Image style={{width:145,height:135,borderRadius:10}} source={require('../../assets/nature.jpeg')} />
      <TouchableOpacity  style={{position:'absolute',}}>
      <Image style={{width:35,height:35,borderRadius:5,marginTop:7,marginHorizontal:'54%'}} source={require('../../assets/trash3.png')} />
      </TouchableOpacity>
      <Text style={styles.detail}>Lorem Ipsum </Text>

      </View>

      <View>

      <Image style={{width:145,height:135,borderRadius:10}} source={require('../../assets/nature-hd.jpg')} />
      <TouchableOpacity style={{position:'absolute'}}>
      <Image style={{width:35,height:35,borderRadius:5,marginTop:7,marginHorizontal:'54%'}} source={require('../../assets/trash3.png')} />
      </TouchableOpacity>
      <Text style={styles.detail}>Lorem is </Text>

</View>
    </View>


    <View style={styles.secondContainer}>
    <View>

      <Image style={{width:145,height:135,borderRadius:10}} source={require('../../assets/23277.jpg')} />
      <TouchableOpacity style={{position:'absolute'}}>
      <Image style={{width:35,height:35,borderRadius:5,marginTop:7,marginHorizontal:'54%'}} source={require('../../assets/trash3.png')} />
      </TouchableOpacity>
      <Text style={styles.detail}>Lorem Ipsum </Text>

      </View>

      <View>

      <Image style={{width:145,height:135,borderRadius:10}} source={require('../../assets/qJntUC.jpg')} />
      <TouchableOpacity style={{position:'absolute'}}>
      <Image style={{width:35,height:35,borderRadius:5,marginTop:7,marginHorizontal:'54%'}} source={require('../../assets/trash3.png')} />
      </TouchableOpacity>
      <Text style={styles.detail}>Lorem Ipsum </Text>
</View>
    </View>

    </>

  );
};

export default StorageImageStyle;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',


    flexDirection:'row',
   paddingTop:20,
    justifyContent:'space-evenly'


  },
  detail:{
      paddingTop:5
  },
  secondContainer:{
    backgroundColor: 'white',


    flexDirection:'row',
   paddingTop:20,
    justifyContent:'space-evenly'
  }
});
