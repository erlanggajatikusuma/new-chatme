import React, {useEffect, useState} from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {colors, getData} from '../../utils';
import database from '@react-native-firebase/database';
import {ContactList} from '../../components';

const Contacts = ({navigation}) => {
  const [user, setUser] = useState({});
  const [listContact, setListContact] = useState([]);

  useEffect(() => {
    getData('user').then(res => setUser(res));
    console.log('USE EFFECT CONTACT');
    database()
      .ref(`users/${user.uid}/contacts`)
      .on('value', snapshot => {
        if (snapshot.val()) {
          const dataSnapshot = snapshot.val();
          const contacts = [];

          Object.keys(dataSnapshot).map(item => {
            contacts.push({id: item, data: dataSnapshot[item]});
          });
          setListContact(contacts);
          console.log('CONTACTS ==> ', contacts);
        }
      });
  }, [user.uid]);

  return (
    <View style={styles.page}>
      <ScrollView>
        {listContact?.map(contact => {
          return (
            <ContactList
              key={contact.id}
              name={contact.data.name}
              email={contact.data.email}
              img={{uri: contact.data.photo}}
              onPress={() => navigation.navigate('ChatScreen', contact)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  page: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 27,
  },
});
