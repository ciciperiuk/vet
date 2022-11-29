import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
  } from 'react-native';
  import React from 'react';
  import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
  import {useNavigation} from '@react-navigation/native';
  
  const Tambahhewan = () => {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <View
          style={{
            width: 400,
            height: 60,
            backgroundColor: '#1A3150',
          }}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: 20,
              marginHorizontal: 25,
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="keyboard-backspace" color={'#FFFFFF'} size={25} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                color: '#FFFFFF',
                marginHorizontal: 10,
              }}>
              Tambah Hewan Peliharaan
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 19,
            color: '#1A3150',
            marginLeft: 20,
            marginTop: 20,
            fontWeight: 'bold',
          }}>
          Nama Hewan Peliharaan Kamu
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Ronald"
          placeholderTextColor="#1A3150"
        />
        <Text
          style={{
            fontSize: 17,
            color: '#1A3150',
            marginLeft: 20,
            marginTop: 20,
            fontWeight: 'bold',
          }}>
          Pilih Hewan Peliharaan Kamu
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 18,
            marginTop: 10,
          }}>
          <TouchableOpacity style={styles.cardhewan1}>
            <Image
              style={styles.gambar}
              source={require('../assets/dog.png')}
            />
            <Text
              style={{
                fontSize: 15,
                color: '#1A3150',
              }}>
              Anjing
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardhewan}>
            <Image
              style={styles.gambar}
              source={require('../assets/hamster.png')}
            />
            <Text
              style={{
                fontSize: 15,
                color: '#1A3150',
              }}>
              Hamster
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardhewan}>
            <Image
              style={styles.gambar}
              source={require('../assets/rabbit.png')}
            />
            <Text
              style={{
                fontSize: 15,
                color: '#1A3150',
              }}>
              Kelinci
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
          }}>
          <TouchableOpacity style={styles.cardhewan3}>
            <Image
              style={styles.gambar}
              source={require('../assets/cat.png')}
            />
            <Text
              style={{
                fontSize: 15,
                color: '#1A3150',
              }}>
              kucing
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardhewan3}>
            <Image
              style={styles.gambar}
              source={require('../assets/cat.png')}
            />
            <Text
              style={{
                fontSize: 15,
                color: '#1A3150',
              }}>
              kucing
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 17,
            color: '#1A3150',
            marginLeft: 20,
            marginTop: 20,
            fontWeight: 'bold',
          }}>
          Pilih Kelamin Peliharaan Kamu
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
          }}>
          <TouchableOpacity style={styles.cardkelamin}>
            <Icon name="gender-male" color={'black'} size={20} />
            <Text
              style={{
                fontSize: 15,
                color: '#1A3150',
              }}>
              Male
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardkelamin1}>
            <Icon name="gender-female" color={'black'} size={25} />
            <Text
              style={{
                fontSize: 15,
                color: '#1A3150',
              }}>
              female
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => navigation.navigate('SuccessScreen')}>
            <Text style={styles.textButton1}>Tambahkan</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    )
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffff',
    },
    input: {
      fontSize: 15,
      borderWidth: 1,
      borderColor: '#749DD2',
      borderRadius: 4,
      alignSelf: 'center',
      marginTop: 20,
      width: 370,
      height: 50,
      paddingHorizontal: 25,
      color: '#1A3150',
    },
    cardhewan: {
      width: 120,
      height: 50,
      justifyContent: 'space-around',
      paddingHorizontal: 15,
      alignItems: 'center',
      backgroundColor: '#E0E9F5',
      borderRadius: 5,
      flexDirection: 'row',
    },
    cardhewan1: {
      width: 120,
      height: 50,
      justifyContent: 'space-around',
      paddingHorizontal: 15,
      alignItems: 'center',
      backgroundColor: '#C2CDDB',
      borderRadius: 5,
      flexDirection: 'row',
    },
    cardhewan2: {
      marginLeft: 18,
      width: 125,
      height: 50,
      justifyContent: 'space-around',
      paddingHorizontal: 15,
      alignItems: 'center',
      backgroundColor: '#E0E9F5',
      borderRadius: 5,
      flexDirection: 'row',
    },
    cardhewan3: {
      marginLeft: 17,
      width: 120,
      height: 50,
      justifyContent: 'space-around',
      paddingHorizontal: 25,
      alignItems: 'center',
      backgroundColor: '#E0E9F5',
      borderRadius: 5,
      flexDirection: 'row',
    },
    gambar: {
      width: 35,
      height: 35,
    },
    cardkelamin: {
      marginLeft: 18,
      width: 123,
      height: 50,
      justifyContent: 'space-evenly',
      paddingHorizontal: 15,
      alignItems: 'center',
      backgroundColor: '#E0E9F5',
      borderRadius: 5,
      flexDirection: 'row',
    },
    cardkelamin1: {
      marginLeft: 10,
      width: 123,
      height: 50,
      justifyContent: 'space-evenly',
      paddingHorizontal: 15,
      alignItems: 'center',
      backgroundColor: '#C2CDDB',
      borderRadius: 5,
      flexDirection: 'row',
    },
    button1: {
      backgroundColor: '#FDCB5A',
      width: 355,
      height: 55,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: 130,
      marginRight: 0,
    },
    textButton1: {
      color: "#000",
      fontFamily: 'Roboto',
      fontSize: 18,
      fontWeight: "bold",
      
    },
  });
  
  export default Tambahhewan;