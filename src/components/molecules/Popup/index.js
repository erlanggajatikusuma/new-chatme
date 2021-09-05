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

const Popup = ({show, onPressOut, gallery, photo}) => {
  return (
    <Modal
      animationType={'fade'}
      transparent={true}
      visible={show}
      statusBarTranslucent={true}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.view}
        onPressOut={onPressOut}>
        <TouchableWithoutFeedback>
          <View style={styles.content}>
            <TouchableOpacity style={styles.button} onPress={gallery}>
              <Text style={styles.contentTitle}>choose from gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={photo}>
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
  view: {
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    paddingHorizontal: 22,
    height: 190,
    justifyContent: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
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
