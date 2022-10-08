import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
// import styles from './styles.module.css';
import * as Animatable from 'react-native-animatable';
import logo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';

export default function Registration() {
    const navigation = useNavigation();
    return (
        <View  >
            <View >
                <Animatable.Image 
                    animation="flipInY"
                    source={logo}
                    
                    resizeMode="contain" 
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" >
                <Text >Converse com seus amigos ouvindo suas músicas favoritas!</Text>
                <Text >Faça o login para começar</Text>

                <TouchableOpacity>
                    <Text >Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}
