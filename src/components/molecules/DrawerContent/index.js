import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {IcBack, IcContacts, IcInviteF, IcSettings} from '../../../assets';
import {colors, getData} from '../../../utils';

const DrawerContent = props => {
  const [user, setUser] = useState({});
  useEffect(() => {
    getData('user').then(res => setUser(res));
  }, [props.navigation]);

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.content}>
          <View style={styles.profileContent}>
            <View style={styles.setting}>
              <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
                <IcBack style={{transform: [{rotate: '180deg'}]}} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Profile')}>
                <IcSettings />
              </TouchableOpacity>
            </View>
            {/* PROFILE */}
            <View style={styles.profileContainer}>
              <Image source={{uri: user.photo}} style={styles.img} />
              <Text numberOfLines={3} style={styles.name}>
                {user.name}
              </Text>
            </View>
          </View>
          <View style={styles.drawerWrapper}>
            <DrawerItem
              icon={() => (
                <Image source={IcContacts} style={styles.iconContainer} />
              )}
              inactiveTintColor={colors.secondary}
              label="Contacts"
              onPress={() => props.navigation.navigate('Contacts')}
            />
            <DrawerItem
              icon={() => (
                <Image source={IcInviteF} style={styles.iconContainer} />
              )}
              inactiveTintColor={colors.secondary}
              label="Invite Friends"
              onPress={() => props.navigation.navigate('Invite')}
            />
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  content: {flex: 1},
  setting: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  profileContent: {marginHorizontal: 20},
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 40,
  },
  img: {
    width: 82,
    height: 82,
    borderRadius: 30,
    backgroundColor: 'grey',
    marginRight: 18,
  },
  name: {
    width: '45%',
    color: colors.secondary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  //   drawerWrapper: {backgroundColor: 'yellow'},
});
