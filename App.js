import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppContext from './src/context/AppContext';
import MainNavigation from './src/MainNavigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <AppContext.Provider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View style={styles.contentContainer}>
          <MainNavigation />
        </View>
      </SafeAreaView>
    </AppContext.Provider>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    height: '100%',
    width: '100%',
  },
});

export default App;
