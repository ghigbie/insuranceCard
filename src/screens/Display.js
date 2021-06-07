import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {toggleLogin} from './../store/actions/initialLogin';
import WarningModal from './../common/WarningModal';
import NavigationButtonRow from './../common/NavigationButtonRow';

const Display = ({navigation}) => {
  const warningText =
    'Please be aware that not all law enforcment officers will accept an image of an insurance card. By tapping the "I Understand" button below, you ackwoldege that this app may not function as a substitute for an actual auto insurance card in all situations where such card is requied by law.';

  const isFirstLogin = useSelector(state => state.loginState.isInitialLogin);
  const dispatch = useDispatch();
  const toggleLoginHandler = () => dispatch(toggleLogin());

  return (
    <View style={styles.container}>
      <WarningModal
        warningTitle={'Warning!'}
        warningText={warningText}
        closeButtonText={'I Understand'}
        isModalOpen={isFirstLogin}
        onPressClose={toggleLoginHandler}
      />
      <View style={styles.imageContainer}>
        <Image
          source={require('./../test_data/fake_card.jpeg')}
          style={styles.image}
        />
      </View>
      <NavigationButtonRow navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfcfcf',
  },
  imageContainer: {
    flex: 1,
    backgroundColor: '#e4e4e4',
    margin: 8,
    borderColor: '#aaa',
    borderWidth: 1,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
});

export default Display;
