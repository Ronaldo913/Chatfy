import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function SignIn() {
    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-vindo</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput placeholder="Digite um email..." style={styles.input} />

                <Text style={styles.title}>Senha</Text>
                <TextInput placeholder="Digite uma senha..." style={styles.input} />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.registerText}>Cadastrar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    containerHeader: {
        marginBottom: '8%',
        marginTop: '14%',
        paddingStart: '5%'
    },
    message: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#2B0334'
    },
    containerForm: {
        backgroundColor: '#2B0334',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 20,
        margin: 28,
        color: 'white'
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 16
    },
    button: {
        backgroundColor: '#2b0334'
    }
})