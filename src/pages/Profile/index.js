import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {IcBack, IcCamera, IcDelete, Ilnull, Qrcode} from '../../assets';
import {colors} from '../../utils';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Popup} from '../../components';

const Profile = ({navigation}) => {
  const [photo, setPhoto] = useState(Ilnull);
  const [show, setShow] = useState(false);

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
        console.log('RES IMAGE ==> ', response);
        if (response.didCancel || response.error) {
          // showError('Oops, sepertinya anda tidak memilih fotonya');
          // showMessage({
          //   message: 'Oops, sepertinya anda tidak memilih fotonya',
          //   type: 'default',
          //   backgroundColor: colors.error,
          //   color: colors.white,
          // });
        } else {
          const base64Photo = `data:${response.type};base64, ${response.base64}`;
          const source = {uri: response.uri};
          // setPhotoDB(base64Photo);
          setPhoto(source);
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
        console.log('RES IMAGE ==> ', response);
        if (response.didCancel || response.error) {
          // showError('Oops, sepertinya anda tidak memilih fotonya');
          // showMessage({
          //   message: 'Oops, sepertinya anda tidak memilih fotonya',
          //   type: 'default',
          //   backgroundColor: colors.error,
          //   color: colors.white,
          // });
        } else {
          const base64Photo = `data:${response.type};base64, ${response.base64}`;
          const source = {uri: response.uri};
          // setPhotoDB(base64Photo);
          setPhoto(source);
        }
      },
    );
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
          <Image source={photo} style={styles.img} />
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.cameraContainer}
            onPress={() => setShow(true)}>
            <Image source={IcCamera} style={styles.camera} />
          </TouchableOpacity>
        </View>
        <View style={styles.desc}>
          <Text style={styles.label}>Account</Text>
          <Text>kusuma@gmail.com</Text>
        </View>
        <View style={styles.desc}>
          <Text>name</Text>
          <Text>Gloria Mckinney</Text>
        </View>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Settings</Text>
          <View style={styles.setting}>
            <Image source={Qrcode} style={styles.qr} />
            <Text style={styles.text}>Qr Code</Text>
          </View>
          <View style={styles.setting}>
            <Image source={IcDelete} style={styles.qr} />
            <Text style={styles.text}>Delete account</Text>
          </View>
        </View>
      </View>
      <Popup
        show={show}
        onPressOut={() => setShow(false)}
        photo={takePhoto}
        gallery={getImage}
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
