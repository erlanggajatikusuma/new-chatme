import React, {useEffect, useState} from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {ContactList, Popup, TextInput} from '../../components';
import {colors, getData, showToastWithGravity} from '../../utils';
import database from '@react-native-firebase/database';

const Invite = () => {
  const [listUser, setListUser] = useState([]);
  const [userLogin, setUserLogin] = useState({});
  const [data, setData] = useState([]);
  const [text, onChangeText] = useState('');
  const [notFound, setNotFound] = useState('');
  const [show, setShow] = useState(false);
  const [contact, setContact] = useState({});

  useEffect(() => {
    getUsers();
    getData('user').then(res => {
      const asynctore = res;
      setUserLogin(asynctore);
    });
  }, []);

  const getUsers = () => {
    database()
      .ref('registered')
      .on('value', snapshot => {
        if (snapshot.val()) {
          const dataSnapshot = snapshot.val();
          const users = [];

          Object.keys(dataSnapshot).map(item => {
            users.push({id: item, data: dataSnapshot[item]});
          });
          setListUser(users);
        }
      });
  };

  const search = value => {
    onChangeText(value);
    const dataUser = [];
    listUser.map(user => {
      if (user?.data?.name?.indexOf(text) > -1) {
        dataUser.push(user.data);
        setNotFound('');
      } else {
        setNotFound('USER NOT FOUND');
      }
    });
    if (value.length === 0) {
      setData([]);
      setNotFound('');
    } else {
      setData(dataUser);
    }
  };

  const handleShow = val => {
    setShow(true);
    setContact(val);
  };

  const addContact = () => {
    showToastWithGravity('Success add to contact');
    database()
      .ref(`users/${userLogin.uid}/contacts/${contact.uid}`)
      .set(contact);
    setShow(false);
  };

  return (
    <View style={styles.page}>
      <ScrollView>
        {data?.map(user => (
          <ContactList
            key={user.uid}
            name={user.name}
            email={user.email}
            onPress={() => handleShow(user)}
          />
        ))}
        <Text>{notFound}</Text>
        <TextInput
          value={text}
          onChangeText={val => search(val)}
          placeholder="Search here..."
        />
      </ScrollView>
      <Popup
        type
        show={show}
        onPressOut={() => setShow(false)}
        onPress1={addContact}
      />
    </View>
  );
};

export default Invite;

const styles = StyleSheet.create({
  page: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 27,
  },
});
