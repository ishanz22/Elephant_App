import React from 'react';
import {View, Text, Button, StyleSheet, Image, ScrollView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
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
} from '../components/styles/MessageStyles.js';

const Messages = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../assets/bcloud.png'),
    userImg2: require('../assets/playee.png'),
    messageTime: '1.55 PM',
    messageText: 'Hey there, this is my test for a post of my social .',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../assets/bcloud.png'),
    userImg2: require('../assets/playee.png'),
    messageTime: '1.40 PM',
    messageText:
      'Hey there, this is my p in e, this is my test for a post         .',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../assets/bcloud.png'),
    userImg2: require('../assets/playee.png'),
    messageTime: '7.30 PM',
    messageText: 'Hey there, this is my test for a post of my social app .',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../assets/bcloud.png'),
    userImg2: require('../assets/musicee.png'),
    messageTime: '5.00 PM',
    messageText: 'Hey there, this is my test for a post of my social app ',
  },
  {
    id: '5',
    userName: 'Selina Paul',
    userImg: require('../assets/bcloud.png'),
    userImg2: require('../assets/playee.png'),
    messageTime: '5.00 PM',
    messageText: 'Hey there, this is my test for a post of my social app ',
  },
  {
    id: '6',
    userName: 'Selina Paul',
    userImg: require('../assets/bcloud.png'),
    userImg2: require('../assets/musicee.png'),
    messageTime: '5.00 PM',
    messageText: 'Hey there, this is my test for a post of my social app ',
  },
  {
    id: '7',
    userName: 'Selina Paul',
    userImg: require('../assets/bcloud.png'),
    userImg2: require('../assets/playee.png'),
    messageTime: '5.00 PM',
    messageText: 'Hey there 😍  this is my for a post of my social app ',
  },
  {
    id: '8',
    userName: 'Selina Paul',
    userImg: require('../assets/bcloud.png'),
    userImg2: require('../assets/playee.png'),
    messageTime: '5.00 PM',
    messageText: 'Hey there, this is my test for a post of my social app ',
  },
  {
    id: '9',
    userName: 'Selina Paul',
    userImg: require('../assets/bcloud.png'),
    userImg2: require('../assets/playee.png'),
    messageTime: '5.00 PM',
    messageText: 'Hey there, this is my test for a post of my social app ',
  },
  {
    id: '10',
    userName: 'Selina Paul',
    userImg: require('../assets/bcloud.png'),
    userImg2: require('../assets/musicee.png'),
    messageTime: '5.00 PM',
    messageText: 'Hey there, this is my test for a post of my social app ',
  },
];

const InboxScreen = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: '#FFF',
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: 'white',
          height: '28%',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            width: '100%',
          }}
        />
      </View>

      <Container>
        <FlatList
          style={{marginTop: -40}}
          data={Messages}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Card onPress={() => {}}>
              <UserInfo>
                <UserImgWrapper>
                  <UserImg source={item.userImg} />
                  <Text> </Text>
                  <UserImg source={item.userImg2} />
                </UserImgWrapper>

                <TextSection>
                  <UserInfoText>
                    <PostTime>{item.messageTime}</PostTime>
                  </UserInfoText>

                  <MessageText>{item.messageText}</MessageText>
                </TextSection>
              </UserInfo>
            </Card>
          )}
        />
      </Container>
    </View>
  );
};

export default InboxScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
