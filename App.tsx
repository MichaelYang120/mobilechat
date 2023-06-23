/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * Version 0.0.1
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Login from './Screen/Login';
import {NavigationContainer} from '@react-navigation/native';




function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    // backgroundColor: "pink",
    height:"100%",
  };

  return (
  <NavigationContainer>
    <SafeAreaView style={backgroundStyle}>
      <ScrollView>
        <View
            style={{
            // backgroundColor: isDarkMode ? Colors.black : Colors.white,
            // backgroundColor: "red",
            height:"100%",
          }}>
          <Login/>
        </View> 
      </ScrollView>
    </SafeAreaView>
  </NavigationContainer>
  );
}

export default App;
