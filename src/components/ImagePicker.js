import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ImagePicker = ({onCaptureImage, browseTextSize, defImage}) => {
  const [image, setImage] = useState(defImage);

  const imageOptions = {
    mediaType: 'photo',
    maxWidth: 600,
    maxHeight: 600,
    quality: 0.6,
  };

  const openCamera = async () => {
    await launchCamera(imageOptions, data => {
      setImage(data.uri);
      if (onCaptureImage) {
        onCaptureImage(data);
      }
    });
  };

  const openGallery = async () => {
    await launchImageLibrary(imageOptions, data => {
      setImage(data.uri);
      if (onCaptureImage) {
        onCaptureImage(data);
      }
    });
  };

  const removeImage = () => {
    setImage(null);
    if (onCaptureImage) {
      onCaptureImage(null);
    }
  };

  return (
    <View>
      {image ? (
        <Image style={styles.fileInput} source={{uri: image}} />
      ) : (
        <View style={[styles.fileInput, {borderStyle: 'dashed'}]}>
          <Icon name="upload" color={'black'} size={40} />

          <TouchableOpacity style={styles.border} onPress={openGallery}>
            <Text style={[styles.browseText, {fontSize: 15}]}>Upload</Text>
          </TouchableOpacity>
        </View>
      )}

      {image ? (
        <TouchableOpacity onPress={removeImage} style={styles.removeButton}>
          <Text style={[styles.removeText, {fontSize: 12}]}>REMOVE</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  fileInput: {
    borderRadius: 10,
    borderWidth: 1,
    height: 200,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  browseText: {
    color: 'white',
    borderRadius: 5,
    padding: '3%',
    width: 100,
    textAlign: 'center',
    backgroundColor: '#007AE9',
  },
  removeText: {
    color: 'white',
    padding: '3%',
    textAlign: 'center',
  },
  removeButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    marginTop: '5%',
  },
  border: {
    paddingTop: 10,
    borderRadius: 8,
  },
});

export default ImagePicker;
