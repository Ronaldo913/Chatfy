import React from 'react';
import CardPeople from '../CardPeople';
import { View, Text, StyleSheet } from 'react-native';


export default function Conversations() {
    return (
        <View style={styles.container}>
            <CardPeople name="Lula" />
            <CardPeople name="Inacio" />
            <CardPeople name="Dilma" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        backgroundColor: 'white'
    },
  })