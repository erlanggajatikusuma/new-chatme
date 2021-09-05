import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {IcBack, IcCamera} from '../../assets';
import {colors} from '../../utils';

const Profile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="dark-content"
      />
      {/* HEADER */}
      <View style={{flexDirection: 'row'}}>
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
          <Image style={styles.img} />
          <TouchableOpacity activeOpacity={0.5} style={styles.cameraContainer}>
            <Image source={IcCamera} style={styles.camera} />
          </TouchableOpacity>
        </View>
        <Text>Profile Page</Text>
      </View>
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
  },
  img: {
    backgroundColor: 'grey',
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
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
});
