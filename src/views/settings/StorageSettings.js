import React from 'react';
import {StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FlatList} from 'react-native-gesture-handler';

import {Tabs, TabScreen} from 'react-native-paper-tabs';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  PostTime,
  MessageText,
  TextSection,
  UserInfoTime,
} from '../../components/styles/AudioStyles.js';
import GallaryStyle from '../../components/styles/StorageImageStyle';
const Messages = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../../assets/bcloud.png'),
    userImg2: require('../../assets/playee.png'),
    messageTime: '10.55 PM',
    messageText: 'Hey there, this is my test for a post of my social .',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../../assets/bcloud.png'),
    userImg2: require('../../assets/playee.png'),
    messageTime: '10.40 PM',
    messageText:
      'Hey there, this is my p in e, this is my test for a post         .',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../../assets/bcloud.png'),
    userImg2: require('../../assets/playee.png'),
    messageTime: '7.30 PM',
    messageText: 'Hey there, this is my test for a post of my social app .',
  },
];

const StorageSettings = () => {
  const Audio = () => {
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
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Card onPress={() => {}}>
                <UserInfo>
                  <UserImgWrapper>
                    <UserImg source={item.userImg2} />
                  </UserImgWrapper>

                  <TextSection>
                    <UserInfoText>
                      <Ionicons
                        name="bookmark"
                        size={18}
                        backgroundColor="#fff"
                        color="black"
                      />
                    </UserInfoText>

                    <MessageText>{item.messageText}</MessageText>
                    <UserInfoTime>
                      <PostTime>{item.messageTime}</PostTime>
                    </UserInfoTime>
                  </TextSection>
                </UserInfo>
              </Card>
            )}
          />
        </Container>
      </View>
    );
  };

  const ImagesGallary = () => {
    return (
      <View
        style={{
          backgroundColor: '#FFF',
          flex: 1,
        }}>
        <GallaryStyle />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Tabs
        // defaultIndex={0} // default = 0
        // uppercase={false} // true/false | default=true | labels are uppercase
        // showTextLabel={false} // true/false | default=false (KEEP PROVIDING LABEL WE USE IT AS KEY INTERNALLY + SCREEN READERS)
        // iconPosition // leading, top | default=leading
        style={{backgroundColor: '#fff', marginTop: 20, borderRadius: 20}} // works the same as AppBar in react-native-paper
        // dark={false} // works the same as AppBar in react-native-paper
        // theme={} // works the same as AppBar in react-native-paper
        // mode="scrollable" // fixed, scrollable | default=fixed
        // onChangeIndex={(newIndex) => {}} // react on index change
        // showLeadingSpace={true} //  (default=true) show leading space in scrollable tabs inside the header
        disableSwipe={true} // (default=false) disable swipe to left/right gestures
      >
        <TabScreen label="Text">
          <Audio />
        </TabScreen>
        <TabScreen label="Audio">
          <Audio />
        </TabScreen>
        <TabScreen label="Image">
          <ImagesGallary />
        </TabScreen>
        <TabScreen
          label="link"

          // optional props
          // onPressIn={() => {
          //   console.log('onPressIn explore');
          // }}
          // onPress={() => {
          //   console.log('onPress explore');
          // }}
        >
          <View style={{backgroundColor: 'white', flex: 1}} />
        </TabScreen>
      </Tabs>
    </View>
  );
};

export default StorageSettings;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
});
