import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import logo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';

export default function HomePage() {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
       
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    containerLogo: {
        flex: 2,
        backgroundColor: 'white',
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#2B0334',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    image: {
        width: '100%',
        height: 300,
        marginTop: 65
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        color: 'white',
        textAlign: 'center'
    },
    text: {
        color: 'white'
    },
    button: {
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 50,
        width: '60%',
        paddingVertical: 8,
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#2B0334',
        fontWeight: 'bold'
    }
})