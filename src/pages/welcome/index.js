import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import logo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image 
                    animation="flipInY"
                    source={logo}
                    style={styles.image}
                    resizeMode="contain" 
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Converse com seus amigos ouvindo suas músicas favoritas!</Text>
                <Text style={styles.text}>Faça o login para começar</Text>

                <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('SignIn')}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>
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
        marginTop: '29%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        color: 'white',
        marginTop: 40
    },
    text: {
        color: 'white',
        fontSize: 15
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