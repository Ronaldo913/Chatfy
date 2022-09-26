import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';
import logo from '../../assets/lula.png';

export default function CardPeople( props ) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={logo}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.text}>
          <Text style={styles.textColor}>{props.name}</Text>
          <Text style={styles.textColor}>Online</Text>
        </View>
      </View>

      <View style={styles.text}>
        <Text style={styles.textColor}>10/09/2022</Text>
      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '100%',
    paddingLeft: 13,
    paddingRight: 13,
    paddingVertical: 10,
    justifyContent: 'space-between',

  },
  image: {
    width: 47,
    height: 45,
    borderRadius: 50
  },
  containerLogo: {
    backgroundColor: 'white',
    flexDirection: 'row'
  },        
  text: {
    justifyContent: 'space-between',
    marginLeft: 20,
    width: '30%'
  },
  textColor: {
    color: '#2B0334'
  }
})