import React, {useState} from 'react';
import {View, Text, Modal, Pressable, StyleSheet} from 'react-native';

const WarningModal = ({
  warningTitle = 'warning',
  warningText = 'Think twice before doing this',
  closeButtonText = 'I get it',
}) => {
  const [isFirstLogin, setIsFirstLogin] = useState(true);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isFirstLogin}
      onRequestClose={() => {
        setIsFirstLogin(!setIsFirstLogin);
      }}
      style={styles.Modal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.warningTitle}>{warningTitle}</Text>
          <Text style={styles.modalText}>{warningText}</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setIsFirstLogin(!isFirstLogin)}>
            <Text style={styles.textStyle}> {closeButtonText}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 2,
    backgroundColor: '#ebebeb',
    borderRadius: 20,
    padding: 36,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 12,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#dc3545',
  },
  warningTitle: {
    color: '#dc3545',
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 14,
  },
  textStyle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 16,
  },
});

export default WarningModal;
