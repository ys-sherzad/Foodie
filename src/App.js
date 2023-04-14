/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Home from './home';
import { theme } from './theme';

const App = () => {


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.white }}>
        <StatusBar barStyle='dark-content' />
        <Home />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};


export default App;
