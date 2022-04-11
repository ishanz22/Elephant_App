import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {Image} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ios = Platform.OS === 'ios';
const {width, height} = Dimensions.get('window');

const HomeScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const openModal = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.menuWrapper}>
          <Text style={styles.header}>Hi Joe.. 😍</Text>

          <TouchableRipple onPress={openModal} style={styles.ripple}>
            <View style={styles.menuItem}>
              <Image
                /* eslint-disable-next-line react-native/no-inline-styles */
                style={{height: 30, width: 30}}
                source={require('../assets/telegram.png')}
              />
              <Modal
                animationIn="slideInUp"
                animationOut="slideOutDown"
                onBackdropPress={closeModal}
                onSwipeComplete={closeModal}
                swipeDirection="left"
                isVisible={isModalVisible}
                style={styles.modal}>
                <View style={styles.modalContent}>
                  <Text style={{fontSize: 20, color: 'black'}}>
                    Select file format
                  </Text>
                  <Icon
                    name="close"
                    color={'black'}
                    size={20}
                    onPress={closeModal}
                  />
                </View>
                <TouchableRipple onPress={() => {}} style={styles.modelRipple}>
                  <View style={styles.modalItem}>
                    <Icon name="video" color={'black'} size={20} />
                    <Text style={styles.modalItemText}>Video</Text>
                  </View>
                </TouchableRipple>
                <Text style={{marginTop: -10}} />
                <TouchableRipple onPress={() => {}} style={styles.modelRipple}>
                  <View style={styles.modalItem}>
                    <Icon name="music" color={'black'} size={20} />
                    <Text style={styles.modalItemText}>Audio</Text>
                  </View>
                </TouchableRipple>
                <Text style={{marginTop: -10}} />
                <TouchableRipple
                  onPress={() => {
                    navigation.navigate('upload');
                  }}
                  style={styles.modelRipple}>
                  <View style={styles.modalItem}>
                    <Icon name="image" color={'black'} size={20} />
                    <Text style={styles.modalItemText}>Image</Text>
                  </View>
                </TouchableRipple>
                <Text style={{marginTop: -10}} />
                <TouchableRipple onPress={() => {}} style={styles.modelRipple}>
                  <View style={styles.modalItem}>
                    <Icon name="link" color={'black'} size={25} />
                    <Text style={styles.modalItemText}>Link</Text>
                  </View>
                </TouchableRipple>
                <Text style={{marginTop: -10}} />
                <TouchableRipple oonPress={() => {}} style={styles.modelRipple}>
                  <View style={styles.modalItem}>
                    <Icon name="text" color={'black'} size={25} />
                    <Text style={styles.modalItemText}>Text</Text>
                  </View>
                </TouchableRipple>
                <View style={styles.contentContainer}>
                  <View style={styles.buttonContainer}>
                    <View style={styles.buttonRow} />
                  </View>
                </View>
              </Modal>
              <Text style={styles.menuItemText}>Send</Text>
            </View>
          </TouchableRipple>

          <Text style={{paddingTop: 10}} />

          <TouchableRipple
            onPress={() => {
              navigation.navigate('record');
            }}
            style={styles.ripple}>
            <View style={styles.menuItem}>
              <Image
                /* eslint-disable-next-line react-native/no-inline-styles */
                style={{height: 30, width: 30}}
                source={require('../assets/rec-button.png')}
              />

              <Text style={styles.menuItemText}>Record</Text>
            </View>
          </TouchableRipple>
          {/* eslint-disable-next-line react-native/no-inline-styles */}
          <Text style={{paddingTop: 10}} />
          <TouchableRipple
            onPress={() => {
              navigation.navigate('calendar');
            }}
            style={styles.ripple}>
            <View style={styles.menuItem}>
              <Image
                /* eslint-disable-next-line react-native/no-inline-styles */
                style={{height: 30, width: 30}}
                source={require('../assets/schedule.png')}
              />
              <Text style={styles.menuItemText}>Schedule</Text>
            </View>
          </TouchableRipple>
          {/* eslint-disable-next-line react-native/no-inline-styles */}
          <Text style={{paddingTop: 10}} />

          <TouchableRipple
            onPress={() => {
              navigation.navigate('gallery');
            }}
            style={styles.ripple}>
            <View style={styles.menuItem}>
              <Image
                /* eslint-disable-next-line react-native/no-inline-styles */
                style={{height: 30, width: 30}}
                source={require('../assets/photo-gallery.png')}
              />
              <Text style={styles.menuItemText}>Gallery Draft</Text>
            </View>
          </TouchableRipple>

          {/* eslint-disable-next-line react-native/no-inline-styles */}
          <Text style={{paddingTop: 10}} />

          <TouchableRipple
            onPress={() => {
              navigation.navigate('inbox');
            }}
            style={styles.ripple}>
            <View style={styles.menuItem}>
              <Image
                /* eslint-disable-next-line react-native/no-inline-styles */
                style={{height: 30, width: 30}}
                source={require('../assets/inbox.png')}
              />
              <Text style={styles.menuItemText}>Inbox</Text>
            </View>
          </TouchableRipple>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 60,
    paddingBottom: 670,
    paddingLeft: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
    paddingTop: '5%',
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#BF3325',
    borderBottomWidth: 1,
    borderTopColor: '#BF3325',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    paddingHorizontal: 60,
    backgroundColor: 'white',
  },
  menuItem: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: 'black',
    paddingLeft: 10,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  header: {
    color: 'black',
    fontWeight: '600',
    fontSize: 22,
    paddingTop: 10,
    marginBottom: 30,
  },
  ripple: {
    backgroundColor: '#E2F2FF',
    borderWidth: 0.5,
    borderColor: '#DFDFDF',
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 65,
  },
  modal: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginHorizontal: 0,
    marginBottom: 0,
    marginTop: height * 0.4,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContent: {
    paddingHorizontal: '10%',
    paddingTop: 30,
    color: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    bottom: ios ? 30 : 0,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },

  modelRipple: {
    backgroundColor: '#F1F1F1',
    borderWidth: 0.5,
    borderColor: '#DFDFDF',
    marginHorizontal: '10%',
    top: 30,
    borderRadius: 8,
  },
  modalItem: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginLeft: -20,
  },
  modalItemText: {
    alignItems: 'flex-start',
    color: 'black',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
