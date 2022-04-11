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
import Icon from 'react-native-vector-icons/Ionicons';
const ShopName = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View>
          <Image
            style={{width: 140, height: 135, borderRadius: 10}}
            source={require('../../assets/nature.jpeg')}
          />

          <Text style={styles.detail}>Shop name </Text>
          <TouchableOpacity>
            <Text style={styles.urlAddress}>
              Https:// shop url./ssfsofskf/dwidkfwjhifwiisjhgbwidkfwjhifwiisjhgb
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <Image
            style={{width: 140, height: 135, borderRadius: 10}}
            source={require('../../assets/nature-hd.jpg')}
          />
          <Text style={styles.detail}>Shop name </Text>
          <TouchableOpacity>
            <Text style={styles.urlAddress}>
              Https:// shop url./ssfsofskf/dwidkfwjhifwi
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.secondContainer}>
        <View>
          <Image
            style={{width: 140, height: 135, borderRadius: 10}}
            source={require('../../assets/23277.jpg')}
          />
          <Text style={styles.detail}>Shop name </Text>
          <TouchableOpacity>
            <Text style={styles.urlAddress}>
              Https:// shop url./ssfsofskf/dwidkfwjhifwi
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <Image
            style={{width: 140, height: 135, borderRadius: 10}}
            source={require('../../assets/qJntUC.jpg')}
          />
          <Text style={styles.detail}>Shop name </Text>
          <TouchableOpacity>
            <Text style={styles.urlAddress}>
              Https:// shop url./ssfsofskf/dwidkfwjhifwi
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ShopName;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',

    paddingHorizontal: 0,
    flexDirection: 'row',
    paddingTop: 30,
    justifyContent: 'space-evenly',
  },
  detail: {
    textAlign: 'left',
    color: 'black',
    paddingTop: 15,
  },
  urlAddress: {
    textAlign: 'left',
    width: 135,
    height: 35,
    color: '#0065C2',
  },
  secondContainer: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 0,
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'space-evenly',
  },
});
