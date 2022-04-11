import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import TextInput from '../components/TextInput';
import {backgroundColor} from '../constants';
import {useNetInfo} from '@react-native-community/netinfo';
import {useDispatch, useSelector} from 'react-redux';
import {resetPostMessages, savePostAction} from '../redux/actions/postsActions';
import {resetImageMessages} from '../redux/actions/ImagePickerActions';
import {showToast} from '../configurations/ToastConfig';
import Loader from '../components/Loader';
import ImagePicker from '../components/ImagePicker';
import AsyncStorage from '@react-native-community/async-storage';
import {blueColor} from '../constants';
const ShopScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const netInfo = useNetInfo();

  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [website, setWebsite] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [mediaFile, setMediaFile] = React.useState(null);

  // const savePostSuccess = useSelector(state => state.postsState.savePostSuccess);
  // const savePostLoading = useSelector(state => state.postsState.savePostLoading);
  // const savePostError = useSelector(state => state.postsState.savePostError);

  // useEffect(() => {
  //   if (netInfo?.isConnected) {
  //     async function checkLocalStoreAndUpload() {
  //       const localStore = await AsyncStorage.getItem('LOCAL_DATA');
  //       if (localStore) {
  //         const list = JSON.parse(localStore);
  //         console.log(list)
  //         list.map(data => {
  //           uploadPostData(data);
  //         })
  //         await AsyncStorage.removeItem('LOCAL_DATA');
  //       }
  //     }

  //     checkLocalStoreAndUpload();
  //   } else {
  //     if (netInfo?.isConnected?.toString() === 'false') {
  //       // showToast({code: -1, result: 'You are offline!'});
  //     }
  //   }
  // }, [netInfo]);

  // useEffect(() => {
  //   if (savePostSuccess) {
  //     showToast({code: 203, result: 'Post created successfully!'});
  //     dispatch(resetPostMessages());
  //     dispatch(resetImageMessages());
  //     navigation.navigate('home');
  //   } else if (savePostError) {
  //     showToast({code: 500, result: "Failed to create the post!"});
  //     dispatch(resetPostMessages());
  //   }

  // }, [savePostSuccess, savePostError]);

  // const storeLocalData = async (data) => {
  //   const localData = await AsyncStorage.getItem('LOCAL_DATA');
  //   if (!localData) {
  //     const list = JSON.stringify([data]);
  //     await AsyncStorage.setItem('LOCAL_DATA', list);
  //   } else {
  //     const list = JSON.parse(localData);
  //     list.push(data);
  //     await AsyncStorage.setItem('LOCAL_DATA', JSON.stringify(list));
  //   }
  //   showToast({code: -1, result: 'No internet! Post Saved Locally'});
  //   navigation.navigate('home');
  // }

  // const uploadPostData = (data) => {
  //   dispatch(savePostAction(data));
  // }

  // const PostButtonHandler = () => {
  //   if (title && description && category && website && mediaFile) {
  //     let data = {
  //       title: title,
  //       description: description,
  //       category: category,
  //       website: website,
  //       mediaFile: mediaFile,
  //     };

  //     // if online will send
  //     if (netInfo?.isConnected) {
  //       uploadPostData(data);

  //       // if offline local save
  //     } else {
  //       storeLocalData(data);
  //     }
  //   }
  // }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView style={styles.content}>
        <View style={styles.baseForm}>
          <View style={styles.textinput}>
            <Text style={{marginBottom: -35, color: 'black', fontSize: 18}}>
              Feature Image{' '}
            </Text>
            <ImagePicker
              // defImage={userSuccess && userSuccess.result ? userSuccess.result.profileLogoUrl : null}
              onCaptureImage={data => {
                if (data) {
                  setMediaFile({
                    name: data.fileName,
                    type: data.type,
                    uri: data.uri,
                  });
                }
              }}
            />

            <View style={styles.menuItem} />
            <Text
              style={{
                fontSize: 18,
                color: 'black',
                marginBottom: -5,
                marginTop: -10,
              }}>
              Shop Name
            </Text>
            <TextInput placeholder={'Enter Your Shop Name'} />
            <Text
              style={{
                fontSize: 18,
                color: 'black',
                marginBottom: -5,
                paddingTop: 20,
              }}>
              Enter Shop URL
            </Text>
            <TextInput placeholder={'HTTPS://'} />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ShopName');
              }}>
              <View style={styles.buttonRegist}>
                {/* eslint-disable-next-line react-native/no-inline-styles */}
                <Text style={{color: '#FFF', fontWeight: 'bold'}}>Add</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{height: 60}} />
      </ScrollView>
      {/*
      <Loader isVisible={savePostLoading}/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: '10%',
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '7.5%',
    flex: 5,
    flexDirection: 'row',
    elevation: 2,
    backgroundColor: 'white',
    borderTopWidth: 0.2,
  },
  content: {
    width: '100%',
    flex: 1,
    paddingHorizontal: 20,
  },
  textinput: {
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  menuItem: {
    paddingTop: 30,
    alignItems: 'flex-start',
    flexDirection: 'row',

    paddingHorizontal: 20,
  },
  menuItemText: {
    alignItems: 'flex-start',
    color: '#808080',
    paddingTop: 5,
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 26,
  },
  buttonRegister: {
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#088F8F',
    marginTop: 10,
    marginHorizontal: 70,
  },

  imagePicker: {
    width: '100%',
    backgroundColor: '#F8F8FF',
    borderRadius: 10,
    paddingHorizontal: 12,
    borderColor: backgroundColor,
  },
  buttonRegist: {
    paddingHorizontal: 42,
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: blueColor,
    marginTop: 25,
  },
});

export default ShopScreen;
