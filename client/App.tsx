/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * Version 0.0.1
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import Navigation from './src/navigation';


function App(): JSX.Element {
  
  const styles = StyleSheet.create({
    root: {
      backgroundColor: '#F3F2F4',
      flex: 1,
    },
  });

  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
}

export default App;
