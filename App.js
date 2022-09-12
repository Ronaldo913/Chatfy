import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';

import { NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer style={styles.NavigationContainer}>
      <Routes/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  NavigationContainer: {
    width: 100,
    height: 100,
  },
});