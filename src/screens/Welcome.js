import { View, Text, StyleSheet, Image, TouchableOpacity, } 
from 'react-native'
import React from 'react'
import Logo from '../assets/vet.png'
import { useNavigation } from '@react-navigation/native'

const App = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
      source={Logo}
      style={styles.logo}/>
      <Text
      style={{
        color: '#FDCB5A',
        fontSize: 30,
        fontWeight: "bold",
        Top: 50,
        alignItems: "center",
        margin: 1,
      }}>
      VET</Text>
      <View style={styles.container1}>
      <TouchableOpacity style={{
        backgroundColor: '#f5ce31',
        color: '#fff',
        marginBottom: 5,
        top: 95,
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
      }}
      onPress={() => navigation.navigate('LoginScreen')}>
      <Text style={styles.textLogin}
          >Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={{
          color: "#875C25",
          fontSize: 18,
          fontWeight: "bold",
        }}
          onPress={() => navigation.navigate('RegisterScreen')}>Register</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A3150",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 173.63,
    height: 70,
    marginBottom: 20,
    alignItems: "center",
  },
  container1: {
    width: "80%",
    height: 50,
    marginTop: 15,
  },
  button: {
    backgroundColor: "#fff",
    color: "#fff",
    marginBottom: 5,
    padding: 10,
    borderRadius: 5,
    top: 100,
    alignItems: "center",
  },
  textLogin: {
    color: "#000",
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: "bold",
  },
})
export default App