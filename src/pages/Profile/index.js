import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {
  IcBack,
  IcCamera,
  IcDelete,
  IcLogout,
  Ilnull,
  Qrcode,
} from '../../assets';
import {colors, getData, showToastWithGravity, storeData} from '../../utils';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Popup} from '../../components';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const Profile = ({navigation}) => {
  const [photo, setPhoto] = useState(
    'https://firebasestorage.googleapis.com/v0/b/chatme11-1e5d6.appspot.com/o/null-photo.png?alt=media&token=2b9ff84d-6734-41f7-b59a-c8bd99754779',
  );
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    getData('user').then(res => {
      setPhoto(res.photo);
      setUser(res);
    });
  }, []);

  const getImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.3,
        maxHeight: 200,
        maxWidth: 200,
        includeBase64: true,
      },
      response => {
        if (response.didCancel || response.error) {
          // showError('Oops, sepertinya anda tidak memilih fotonya');
          // showMessage({
          //   message: 'Oops, sepertinya anda tidak memilih fotonya',
          //   type: 'default',
          //   backgroundColor: colors.error,
          //   color: colors.white,
          // });
        } else {
          const base64Photo = `data:${response.assets[0].type};base64, ${response.assets[0].base64}`;
          // const source = {uri: response.assets[0].uri};

          const data = {...user, photo: base64Photo};
          storeData('user', data);

          database()
            .ref(`users/${user.uid}/profile`)
            .update({photo: base64Photo});
          database()
            .ref(`registered/${user.uid}/`)
            .update({photo: base64Photo});
          setPhoto(base64Photo);
        }
      },
    );
  };

  const takePhoto = () => {
    launchCamera(
      {
        mediaType: 'photo',
        quality: 0.3,
        maxHeight: 200,
        maxWidth: 200,
        includeBase64: true,
      },
      response => {
        if (response.didCancel || response.error) {
          // showError('Oops, sepertinya anda tidak memilih fotonya');
          // showMessage({
          //   message: 'Oops, sepertinya anda tidak memilih fotonya',
          //   type: 'default',
          //   backgroundColor: colors.error,
          //   color: colors.white,
          // });
        } else {
          const base64Photo = `data:${response.assets[0].type};base64, ${response.assets[0].base64}`;
          // const source = {uri: response.assets[0].uri};

          const data = {...user, photo: base64Photo};
          storeData('user', data);

          database()
            .ref(`users/${user.uid}/profile`)
            .update({photo: base64Photo});
          database()
            .ref(`registered/${user.uid}/`)
            .update({photo: base64Photo});
          setPhoto(base64Photo);
        }
      },
    );
  };

  const logout = () => {
    auth()
      .signOut()
      .then(() => {
        navigation.replace('Login');
        showToastWithGravity('Logout Success');
      })
      .catch(err => showToastWithGravity(err.message));
  };

  return (
    <View style={styles.page}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="dark-content"
      />
      {/* HEADER */}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IcBack />
        </TouchableOpacity>
        <View style={{flex: 1, marginRight: 24, alignItems: 'center'}}>
          <Text style={{fontSize: 20, color: colors.secondary}}>Profile</Text>
        </View>
      </View>
      {/* BODY */}
      <View>
        <View style={styles.imgContainer}>
          <Image source={{uri: photo}} style={styles.img} />
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.cameraContainer}
            onPress={() => setShow(true)}>
            <Image source={IcCamera} style={styles.camera} />
          </TouchableOpacity>
        </View>
        <View style={styles.desc}>
          <Text style={styles.label}>Account</Text>
          <Text>{user.email}</Text>
        </View>
        <View style={styles.desc}>
          <Text>Name</Text>
          <Text>{user.name}</Text>
        </View>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Settings</Text>
          <TouchableOpacity
            style={styles.setting}
            onPress={() => navigation.navigate('QRScreen')}>
            <Image source={Qrcode} style={styles.qr} />
            <Text style={styles.text}>Qr Code</Text>
          </TouchableOpacity>
          <View style={styles.setting}>
            <Image source={IcDelete} style={styles.qr} />
            <Text style={styles.text}>Delete account</Text>
          </View>
          <TouchableOpacity style={styles.setting} onPress={logout}>
            <Image source={IcLogout} style={styles.qr} />
            <Text style={styles.text}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Popup
        show={show}
        onPressOut={() => setShow(false)}
        onPress1={getImage}
        onPress2={takePhoto}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 27,
    backgroundColor: colors.white,
    flex: 1,
  },
  imgContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    position: 'relative',
    marginVertical: 35,
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
  },
  cameraContainer: {
    position: 'absolute',
    bottom: 10,
    right: 15,
    backgroundColor: colors.secondary,
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {width: 20, height: 20, tintColor: colors.white},
  label: {
    fontSize: 20,
    color: colors.black1,
    fontWeight: 'bold',
    marginBottom: 13,
  },
  desc: {
    paddingBottom: 25,
    marginBottom: 25,
    borderBottomWidth: 1,
    borderColor: colors.gray,
  },
  qr: {width: 20, height: 20, marginRight: 20},
  setting: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 17,
  },
  text: {fontSize: 16, fontWeight: '700', color: colors.black1},
});
