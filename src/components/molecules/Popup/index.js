import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../../utils';

const Popup = ({show, onPressOut, onPress1, onPress2, type}) => {
  if (type) {
    return (
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={show}
        statusBarTranslucent={true}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.view(type)}
          onPressOut={onPressOut}>
          <TouchableWithoutFeedback>
            <View style={styles.content}>
              <Text
                style={{fontSize: 16, fontWeight: '600', textAlign: 'center'}}>
                Add to your contact?
              </Text>
              <View style={styles.btnWrapper}>
                <TouchableOpacity style={styles.button} onPress={onPress1}>
                  <Text style={styles.contentTitle}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={onPress2}>
                  <Text style={styles.contentTitle}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    );
  }
  return (
    <Modal
      animationType={'fade'}
      transparent={true}
      visible={show}
      statusBarTranslucent={true}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.view(type)}
        onPressOut={onPressOut}>
        <TouchableWithoutFeedback>
          <View style={styles.content}>
            <TouchableOpacity style={styles.button} onPress={onPress1}>
              <Text style={styles.contentTitle}>choose from gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onPress2}>
              <Text style={styles.contentTitle}>Take a picture</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

export default Popup;

const styles = StyleSheet.create({
  view: type => ({
    justifyContent: type ? 'center' : 'flex-end',
    paddingHorizontal: type ? 22 : 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
  }),
  content: {
    backgroundColor: colors.white,
    paddingHorizontal: 22,
    height: 190,
    justifyContent: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
  },
  contentTitle: {
    fontSize: 16,
    marginVertical: 10,
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingVertical: 10,
  },
});
