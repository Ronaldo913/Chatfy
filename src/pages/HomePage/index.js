import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Conversations from '../Conversations';
import Search from '../Search';
import More from '../More';
import Requests from '../Requests';
import Profile from '../Profile';

const Tab = createBottomTabNavigator();

export default function HomePage() {
    const titleFormat = (title) => <Text style={{fontSize: 24, fontWeight: 'bold', paddingBottom: 5, marginLeft: 25}}>{title}</Text>;
    return (
        <Tab.Navigator initialRouteName="Conversas"
            screenOptions={{
                tabBarActiveTintColor: '#2B0334',
            }}
            >
            <Tab.Screen name="Conversas" component={Conversations}
                options={{
                    tabBarLabel: 'Conversas', headerTitle: () =>  titleFormat("Conversas"),
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen name="Procurar" component={Search}
                options={{
                    tabBarLabel: 'Procurar',  headerTitle: () =>  titleFormat("Procurar"),
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="magnify" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen name="Mais" component={More}
                options={{
                    tabBarLabel: 'Mais',  headerTitle: () =>  titleFormat("Mais"),
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="hospital-box-outline" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen name="Solicitações" component={Requests}
                options={{
                    tabBarLabel: 'Solicitações', headerTitle: () =>  titleFormat("Solicitações"),
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-multiple-plus-outline" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen name="Música" component={Profile} 
                options={{
                    tabBarLabel: 'Música', headerTitle: () =>  titleFormat("Música"),
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="music" color={color} size={size} />
                    ),
                }} />
        </Tab.Navigator>
    );
}