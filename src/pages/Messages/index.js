import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ChatList, Gap, Header} from '../../components';
import {colors, getData} from '../../utils';
import database from '@react-native-firebase/database';

const Messages = ({navigation}) => {
  const [user, setUser] = useState({});
  const [historyChat, setHistoryChat] = useState([]);

  useEffect(() => {
    getDataUserLocal();

    const rootDB = database().ref();
    const urlHistory = `messages/${user.uid}/`;
    const messageDB = rootDB.child(urlHistory);

    messageDB.on('value', async snapshot => {
      if (snapshot.val()) {
        const oldData = snapshot.val();
        const data = [];

        const promises = await Object.keys(oldData).map(async key => {
          const urlUidContact = `users/${user.uid}/contacts/${oldData[key].uidPartner}`;
          const detailContact = await rootDB.child(urlUidContact).once('value');
          data.push({
            id: key,
            detailContact: detailContact.val(),
            ...oldData[key],
          });
        });

        await Promise.all(promises);

        setHistoryChat(data);
      }
    });
  }, [user.uid]);

  const getDataUserLocal = () => {
    getData('user').then(res => {
      setUser(res);
    });
  };

  return (
    <View style={styles.page}>
      <Header main onPress={() => navigation.openDrawer()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {historyChat.map(chat => {
          const detailContact = {
            id: chat?.detailContact?.uid,
            data: chat?.detailContact,
          };
          return (
            <ChatList
              key={chat.id}
              image={{uri: chat?.detailContact?.photo}}
              name={chat?.detailContact?.name}
              chat={chat?.lastContentChat}
              onPress={() => navigation.navigate('ChatScreen', detailContact)}
            />
          );
        })}
        <Gap height={150} />
      </ScrollView>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {paddingHorizontal: 27, backgroundColor: colors.white, flex: 1},
});
