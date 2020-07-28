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
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screen/HomeScreen';
import MapScreen from './src/screen/MapScreen'
import RealTimeScreen from './src/screen/RealTimeScreen'
import Route from './src/routes'

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
    <Route/>
    </>
  );
};

export default App;
