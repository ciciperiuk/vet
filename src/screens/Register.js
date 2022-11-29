import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'

import { useNavigation } from '@react-navigation/native'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Material from 'react-native-vector-icons/AntDesign'

const Register = () => {
    const [Visible, setVisible] = useState(true)
  const navigation = useNavigation()
  return (
      <View style={styles.container}>
          <View>
              <TouchableOpacity style={styles.icon}>
                  <Material style={{position:'absolute', left:0, top:4}} name="arrowleft" size={20} color="#FFFFFF" onPress={() => navigation.goBack()} />
                  <Text
                      style={{
                          color: 'white',
                          fontSize: 20,
                          marginHorizontal: 90,
                          marginLeft: 40,
                          marginStart: 100,
                          fontFamily: 'Roboto',
                          fontStyle: 'normal',
                      }} onPress={() => navigation.goBack()}>Sebelumnya</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.well} >
              <Text
                  style={{
                      color: 'white',
                      fontSize: 20,
                      marginBottom: 15,
                      marginLeft: 1,
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: 'bold',
                      marginTop: 50,
                  }}>Buat Akun Baru</Text>
          </View>
          <Text style={{ fontFamily: "Roboto", fontSize: 12, color: "white", paddingTop:15, paddingBottom:10,}}>Username</Text>
          <TextInput
              style={styles.input}
              placeholder="Enter your Username"
              placeholderTextColor="#C2CDDB"/>
          <Text style={{ fontFamily: "Roboto", fontSize: 12, color: "white", paddingTop: 3, paddingBottom: 10, }}>Phone Number</Text>
          <TextInput
              style={styles.input}
              placeholder="Enter your Phone Number"
              placeholderTextColor="#C2CDDB"/>
          <Text style={{ fontFamily: "Roboto", fontSize: 12, color: "white", paddingTop: 3, paddingBottom: 10, }}>Password</Text>
          <TextInput
              style={styles.input}
              placeholder="Enter your Password"
              placeholderTextColor="#C2CDDB"
              secureTextEntry={Visible}/>
              <TouchableOpacity style={{marginTop: -57, marginBottom: 60, marginLeft: 270}} onPress={()=> setVisible(!Visible)}>
            <Icon name={Visible? 'eye-off':'eye'} size={20} color="white"/>
            </TouchableOpacity>
          <TouchableOpacity style={styles.button}onPress={() => navigation.navigate('Dashboard')}>
              <Text style={styles.textLogin}> Submit </Text>
          </TouchableOpacity>
          <Text style={styles.text}>Already have an account? Please <Text style={{
                  fontFamily: "Roboto",
                  fontSize  : 15, 
                  color     : "#FDCB5A",
                  textDecorationLine:'underline'
              }}
                  onPress={() => navigation.navigate('RegisterScreen')}
              > Sign Up</Text>
          </Text>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#1A3150',
      justifyContent: 'flex-start',
      padding: 50,
  },
  container1: {
      flex: 1,
      backgroundColor: '#1A3150',
      marginTop: 300,
      padding: 1,
      paddingHorizontal: 1,
  },
  input: {
      backgroundColor: '#1A3150',
      borderWidth: 1,
      fontFamily: 'Roboto',
      paddingHorizontal: 15,
      marginBottom: 20,
      fontSize: 12,
      marginTop: 1,
      borderColor: '#749DD2',

  },
  button: {
      width: 300,
      height: 50,
      backgroundColor: '#FDCB5A',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
  },
  textButton: {
      color: '#000',
      fontSize: 20,
      marginTop: 10,
  },
  textLogin: {
      color: "#000",
      fontSize: 15,
      fontWeight: "bold",
  },
  text: {
      color: "#fff",
      fontSize: 15,
      textAlign: 'center',
      marginTop: 20,
  },
  passIcon: {
    flexDirection: 'row',
    borderColor: '#F59402',
    borderBottomWidth: 1,
    marginBottom: 10,
    width: '90%',
}
})

export default Register