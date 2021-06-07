import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import initialLoginReducer from './src/store/reducers/initialLogin';
import initialPhotoReducer from './src/store/reducers/initialPhoto';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MainNavigation from './src/MainNavigation';

const rootReducer = combineReducers({
  loginState: initialLoginReducer,
  initialPhotoState: initialPhotoReducer,
});
const store = createStore(rootReducer);

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.contentContainer}>
        <Provider store={store}>
          <MainNavigation />
        </Provider>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    height: '100%',
    width: '100%',
  },
});

export default App;
