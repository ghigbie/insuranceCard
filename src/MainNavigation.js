import React, {useState} from 'react';
import {View, Modal, Pressable, Text, StyleSheet, Alert} from 'react-native';
import Capture from './Capture';
import Display from './Display';
import WarningModal from './common/WarningModal';
import RoundedButton from './common/RoundedButton';

const MainNavigation = () => {
  const [isFirstLogin, setIsFirstLogin] = useState(true);
  const warningText =
    'Please be aware that not all law enforcment officers will accept an image of an insurance card. By tapping the "I Understand" button below, you ackwoldege that this app may not function as a substitute for an actual auto insurance card in all situations where such card is requied by law.';

  return (
    <View style={styles.container}>
      <WarningModal
        warningTitle={'Warning!'}
        warningText={warningText}
        closeButtonText={'I Understand'}
      />
      <Display />
      <View style={styles.buttonContainer}>
        <RoundedButton buttonText={'Lock Photo'} />
        <RoundedButton buttonText={'Snap Photo'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
  },
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
    padding: 10,
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
    fontSize: 18,
    marginBottom: 14,
  },
  textStyle: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 16,
  },
});

export default MainNavigation;
