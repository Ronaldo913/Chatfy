import React from 'react';
import { View, StyleSheet } from 'react-native';
import CardRequest from '../../../components/CardRequest';

export default function Requests() {
    return (
        <View style={styles.container}>
            <CardRequest name="Ronaldo Noberto" />
            <CardRequest name="Ronaldo Noberto" />
            <CardRequest name="Ronaldo Noberto" />
            <CardRequest name="Ronaldo Noberto" />
            <CardRequest name="Ronaldo Noberto" />
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
