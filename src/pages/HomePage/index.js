import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import Conversations from '../Conversations';
import Search from '../Search';
import More from '../More';
import Requests from '../Requests';
import Profile from '../Profile';

const Tab = createBottomTabNavigator();

export default function HomePage() {
    return (
        <Tab.Navigator initialRouteName="Conversas"
            screenOptions={{
                tabBarActiveTintColor: '#2B0334',
            }}
            
            >
            <Tab.Screen name="Conversas" component={Conversations}
                options={{
                    tabBarLabel: 'Conversas',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen name="Procurar" component={Search}
                options={{
                    tabBarLabel: 'Procurar',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="magnify" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen name="Mais" component={More}
                options={{
                    tabBarLabel: 'Mais',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="hospital-box-outline" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen name="Solicitações" component={Requests}
                options={{
                    tabBarLabel: 'Solicitações',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-multiple-plus-outline" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen name="Pefil" component={Profile}
                options={{
                    tabBarLabel: 'Pefil',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }} />
        </Tab.Navigator>
    );
}
