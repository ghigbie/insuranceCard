import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {togglePhotoWarning} from '../store/actions/initialPhoto';
import WarningModal from '../common/WarningModal';
import NavigationButtonRow from '../common/NavigationButtonRow';

const Capture = ({navigation}) => {
  const warningText =
    'Please be sure to take a clear and well-lit photo. We are not responsible for the clarity of your photo. Again, not all law enforcment officers will accept an image of an insurance card. By tapping the "Got It!" button below, you acknowledge that this app may not function as a substitute for an actual auto insurance card in all situations where such card is requied by law, and you also acknowledge that you are responsible for the quality of the photo.';

  const isFirstPhotoCapture = useSelector(
    state => state.initialPhotoState.isInitialPhotoWarning,
  );

  const dispatch = useDispatch();
  const togglePhotoWarningHandler = () => dispatch(togglePhotoWarning());

  return (
    <View style={styles.container}>
      <WarningModal
        warningTitle={'Warning!'}
        warningText={warningText}
        closeButtonText={'Got It!'}
        isModalOpen={isFirstPhotoCapture}
        onPressClose={togglePhotoWarningHandler}
      />
      <View style={styles.imageCaptureContainer} />
      <NavigationButtonRow navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfcfcf',
  },
  imageCaptureContainer: {
    flex: 1,
    backgroundColor: '#000',
    margin: 8,
    borderColor: '#0101ae',
    borderWidth: 3,
  },
});

export default Capture;
