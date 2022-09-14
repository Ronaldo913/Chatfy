import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Welcome() {
    return (
        <View style={styles.container}>
            <View>
                <Image 
                    source={require('../../../assets/logoName.png')}
                    style={{ width: '100%' }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{

    }
})