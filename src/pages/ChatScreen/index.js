import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IcBack, IcProfileMenu} from '../../assets';
import {ChatItem, TextInput} from '../../components';
import {
  colors,
  getChatTime,
  getData,
  setDateChat,
  showToastWithGravity,
} from '../../utils';
import database from '@react-native-firebase/database';

const ChatScreen = ({navigation, route}) => {
  const dataContact = route.params;
  const [chatContent, setChatContent] = useState('');
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    getData('user').then(res => setUser(res));
    const chatID = `${user.uid}_${dataContact.data.uid}`;
    const urlFirebase = `chatting/${chatID}/allChat/`;
    database()
      .ref(urlFirebase)
      .on('value', snapshot => {
        if (snapshot.val()) {
          const dataSnapshot = snapshot.val();
          const allDataChat = [];

          Object.keys(dataSnapshot).map(key => {
            const dataChat = dataSnapshot[key];
            const newDataChat = [];

            Object.keys(dataChat).map(itemChat => {
              newDataChat.push({
                id: itemChat,
                data: dataChat[itemChat],
              });
            });

            allDataChat.push({
              id: key,
              data: newDataChat,
            });
          });
          setChatData(allDataChat);
        }
      });
  }, [dataContact.data.uid, user.uid]);

  const handleType = val => {
    setChatContent(val);
    if (val.length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  };

  const chatSend = () => {
    const today = new Date();

    const chatID = `${user.uid}_${dataContact.data.uid}`;
    const urlFirebase = `chatting/${chatID}/allChat/${setDateChat(today)}`;
    const urlMessageUser = `messages/${user.uid}/${chatID}`;
    const urlMessageContact = `messages/${dataContact.data.uid}/${chatID}`;

    const dataHistoryChatUser = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: dataContact.data.uid,
    };

    const dataHistoryChatContact = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: user.uid,
    };

    const data = {
      sendBy: user.uid,
      chatDate: today.getTime(),
      chatTime: getChatTime(today),
      chatContent: chatContent,
    };

    database()
      .ref(urlFirebase)
      .push(data)
      .then(() => {
        setChatContent('');
        // History Chat User
        database().ref(urlMessageUser).set(dataHistoryChatUser);

        // History Chat Contact
        database().ref(urlMessageContact).set(dataHistoryChatContact);
      })
      .catch(error => {
        showToastWithGravity(error.message);
      });
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IcBack />
          </TouchableOpacity>
          <Image source={{uri: dataContact.data.photo}} style={styles.img} />
          <View>
            <Text>{dataContact.data.name}</Text>
            <Text>Online</Text>
          </View>
        </View>
        <TouchableOpacity>
          <IcProfileMenu />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {chatData.map(chat => {
          return (
            <View key={chat.id}>
              <Text style={styles.chatDate}>{chat.id}</Text>
              {chat.data.map(itemChat => {
                console.log('DATA CHAT ==> ', itemChat);
                const isMe = itemChat.data.sendBy === user.uid;
                return (
                  <ChatItem
                    key={itemChat.id}
                    isMe={isMe}
                    text={itemChat.data.chatContent}
                    date={itemChat.data.chatTime}
                    photo={isMe ? null : {uri: dataContact.data.photo}}
                  />
                );
              })}
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.footer}>
        <TextInput
          chat
          placeholder="Type your message here..."
          value={chatContent}
          onChangeText={val => handleType(val)}
          loading={loading}
          onPress={chatSend}
        />
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginVertical: StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 27,
  },
  img: {
    backgroundColor: 'grey',
    width: 64,
    height: 64,
    borderRadius: 23,
    marginRight: 20,
    marginLeft: 30,
  },
  chatDate: {
    fontSize: 11,
    color: colors.black1,
    marginVertical: 20,
    textAlign: 'center',
  },
  footer: {padding: 27},
});
