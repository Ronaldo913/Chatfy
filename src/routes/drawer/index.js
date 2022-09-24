import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Ionicons from '@expo/vector-icons/Ionicons';
import { ImageBackground, Pressable, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomePage from '../../pages/HomePage';
import Welcome from '../../pages/Welcome'

const Drawer = createDrawerNavigator();

export default function DrawerRoute() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomePage" component={HomePage} options={{
        drawerLabel: 'HomePage',
        headerTitle: '', headerTransparent: true, drawerIcon: ({ focused, size }) => {
          return <Ionicons name='home' size={size} color={focused ? 'rgb(240, 240, 187)' : 'rgb(173, 173, 140)'}></Ionicons>
        }
      }} />


      <Drawer.Screen name="Welcome" component={Welcome} options={{
        drawerLabel: 'Welcome',
        headerTitle: '', headerTransparent: true, drawerIcon: ({ focused, size }) => {
          return <Ionicons name='home' size={size} color={focused ? 'rgb(240, 240, 187)' : 'rgb(173, 173, 140)'}></Ionicons>
        }
      }} />
    </Drawer.Navigator>
  );

}

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: '#808080'
  }
})