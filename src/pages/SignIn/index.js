import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import logo from "../../assets/logoName.png";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';

export default function SignIn( {navigation} ) {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={logo}
          style={styles.image}
          resizeMode="contain"
        />
        <Animatable.View
          animation="fadeInLeft"
          delay={500}
          style={styles.containerHeader}
        >
          <Text style={styles.message}>Bem-vindo!</Text>
        </Animatable.View>
      </View>

      <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput placeholder="Digite um email..." style={styles.input} />

        <Text style={styles.title2}>Senha</Text>
        <TextInput placeholder="Digite uma senha..." style={styles.input} />

        <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
          <Text style={{ color: 'white' }} >Esqueceu senha?</Text>
        </TouchableOpacity>



        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DrawerRoute')}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Registration')}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.buttonsNetwork}>
          <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
            locations={[0, 0.5, 0.6]} colors={['#ff5597', '#a41c56']} style={styles.buttonNetwork}>
            <TouchableOpacity style={{
              flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignSelf: "center",
              alignItems: "center",
            }}>
              <Text style={styles.registerText}>Nosso site</Text>
              <Icon name="google" size={20} color='#fff' />
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient start={{ x: 0.6, y: 0.5 }} end={{ x: 0.0, y: 0.9 }}
            locations={[0, 0.6, 1]} colors={['#800080', '#F92B7F', '#F58524']} style={styles.buttonNetwork}>
            <TouchableOpacity style={{
              flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignSelf: "center",
              alignItems: "center",
            }}>
              <Text style={styles.registerText}>Google</Text>
              <Icon name="instagram" size={20} color='#fff' />
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient start={{ x: 0.6, y: 0.5 }} end={{ x: 0.0, y: 0.9 }}
            locations={[0, 0.6, 1]} colors={['#800000', '#8b0000']} style={styles.buttonNetwork}>
            <TouchableOpacity style={{
              flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignSelf: "center",
              alignItems: "center",
            }}>
              <Text style={styles.registerText}>Google</Text>
              <Icon name="google" size={20} color='#fff' />
            </TouchableOpacity>
          </LinearGradient>
        </View>

      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  containerLogo: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "40%",
    height: 200,
  },
  message: {
    fontSize: 26,
    fontWeight: "bold",
    // color: "#2B0363",
    color: '#2B0334'
  },
  containerForm: {
    backgroundColor: "#2B0334",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
    marginTop: "3%",
    flex: 1,
  },
  title: {
    fontSize: 16,
    marginTop: 35,
    marginBottom: 12,
    color: "white",
    marginLeft: 5,
    fontWeight: 'bold'
  },
  title2: {
    fontSize: 16,
    marginBottom: 12,
    color: "white",
    marginLeft: 5,
    fontWeight: 'bold'
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    color: "black",
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 12,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    flex: 0
  },
  button: {
    backgroundColor: "white",
    borderRadius: 20,
    width: 150,
    height: 40,
    alignSelf: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  buttonRegister: {
    backgroundColor: "white",
    borderRadius: 20,
    width: 150,
    height: 40,
    alignSelf: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  buttonText: {
    color: "#2B0334",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonsNetwork: {
    flexDirection: "column",
    justifyContent: "space-around",
    flex: 1,
    height: '100%',
    marginTop: '10%',
    paddingTop: '7%'
  },
  buttonNetwork: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 20,
    width: '100%',
    height: 40,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: 'space-between',
    padding: 10,
  },
});
