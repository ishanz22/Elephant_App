import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Searchbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
  UserInfoTimer,
} from '../components/styles/ContactStyle.js';

const Messages = [
  {
    id: '1',
    userName: 'Alexander.',
    userImg2: require('../assets/girl.jpeg'),
    contactName: 'A',
    messageText: '+1-202-555-0102.',
  },
  {
    id: '2',
    userName: 'Brixton',
    userImg2: require('../assets/girl2.jpeg'),
    contactName: 'B',
    messageText: '+1-202-555-0102',
  },
  {
    id: '3',
    userName: 'Cen William',
    userImg2: require('../assets/men.jpeg'),
    contactName: 'C',
    messageText: '+1-202-555-0102',
  },
  {
    id: '4',
    userName: 'Delina Paul',
    userImg2: require('../assets/For-Men.jpg'),
    contactName: 'D',
    messageText: '+1-202-555-0102 ',
  },
  {
    id: '5',
    userName: 'Elina Paul',
    userImg2: require('../assets/girl4.jpg'),
    contactName: 'E',
    messageText: '+1-202-555-0102',
  },
];
const CoachingScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={{marginTop: -30}}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <FlatList
        style={{marginTop: 20}}
        data={Messages}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <>
            <Text style={{color: 'black', fontSize: 15, left: 5}}>
              {item.contactName}
            </Text>
            <Card onPress={() => {}}>
              <UserInfo>
                <UserImgWrapper>
                  <Text> </Text>
                  <UserImg source={item.userImg2} />
                  <Text> </Text>
                </UserImgWrapper>

                <TextSection>
                  <UserInfoText>
                    <UserName>{item.userName}</UserName>
                  </UserInfoText>

                  <MessageText>{item.messageText}</MessageText>
                </TextSection>
              </UserInfo>
            </Card>

            <Card onPress={() => {}}>
              <UserInfo>
                <UserImgWrapper>
                  <Text> </Text>
                  <UserImg source={item.userImg2} />
                  <Text> </Text>
                </UserImgWrapper>

                <TextSection>
                  <UserInfoText>
                    <UserName>{item.userName}</UserName>
                  </UserInfoText>

                  <MessageText>{item.messageText}</MessageText>
                </TextSection>
              </UserInfo>
            </Card>
          </>
        )}
      />
    </View>
  );
};

export default CoachingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    top: 10,
    height: '10%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
