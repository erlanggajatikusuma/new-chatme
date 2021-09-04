import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IcBack, IcProfileMenu} from '../../assets';
import {ChatItem, TextInput} from '../../components';

const ChatScreen = ({navigation}) => {
  const [text, onChangeText] = useState('');
  const [loading, setLoading] = useState(true);

  const handleType = val => {
    onChangeText(val);
    if (val.length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IcBack />
          </TouchableOpacity>
          <Image style={styles.img} />
          <View>
            <Text>Mom</Text>
            <Text>Online</Text>
          </View>
        </View>
        <TouchableOpacity>
          <IcProfileMenu />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ChatItem isMe text="Halo gan" photo={true ? null : {uri: null}} />
        <ChatItem
          text="Halo juga gan, gimana kabar?"
          photo={true ? null : {uri: null}}
        />
      </ScrollView>
      <View style={styles.footer}>
        <TextInput
          chat
          placeholder="Type your message here..."
          value={text}
          onChangeText={val => handleType(val)}
          loading={loading}
        />
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginVertical: 15,
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
  footer: {padding: 27},
});
