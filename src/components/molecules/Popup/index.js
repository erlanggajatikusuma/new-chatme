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

const Popup = ({show, onPressOut}) => {
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
            <Text style={styles.contentTitle}>Hi 👋!</Text>
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
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
});
