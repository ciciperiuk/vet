import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react'
import Icon from 'react-native-vector-icons/Fontisto'
import Swiper from 'react-native-swiper'
import { StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const Dashboard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        style={styles.picture22}
        source={require('../assets/image1.png')}
      />
      <Image
        style={styles.picture1}
        source={require('../assets/vet.png')}
      />
      <Text
        style={{
          fontSize: 20,
          color: '#FDCB5A',
          paddingHorizontal: 100,
          letterSpacing: 3,
          marginTop: -120,
          fontWeight: "bold",
        }}>
        Vet
      </Text>
      <Icon style={{ left: 300, marginTop: -24 }} name="email" color={'#ffff'} size={26} />
      <TouchableOpacity
        style={{
          width: 26,
          height: 26,
          borderRadius: 26 / 2,
          backgroundColor: '#FDCB5A',
          justifyContent: 'center',
          alignItems: 'center',
          left: 350,
          marginTop: -27,
        }}>
        <Text
          style={{
            fontSize: 16,
            color: '#000',
            fontWeight: "bold",
          }}>
          A
        </Text>
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.wrapper}>
          <Swiper
            showsButtons={false}
            loop={true}
            autoplay={true}
            autoplayTimeout={4.5}
            dotColor={'#C2CDDB'}
            activeDotColor={'#FDCB5A'}
          >
            <Image source={require('../assets/rshewan1.png')}
              style={styles.slide}
            />
            <Image source={require('../assets/rshewan3.png')}
              resizeMode='stretch'
              style={styles.slide}
            />
            <Image source={require('../assets/rshewan2.png')}
              resizeMode='stretch'
              style={styles.slide}
            />
            <Image source={require('../assets/rshewan.png')}
              resizeMode='stretch'
              style={styles.slide}
            />
          </Swiper>
        </View>
      </ScrollView>

      <View
        style={{
          width: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
          alignSelf: 'center',
        }}>
        <TouchableOpacity>
          <Image
            style={styles.animal}
            source={require('../assets/cat.png')}
          />
          <Text style={styles.textanimal}>Cat</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.animal}
            source={require('../assets/dog.png')}
          />
          <Text style={styles.textanimal}>Dog</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.animal}
            source={require('../assets/hamster.png')}
          />
          <Text style={styles.textanimal}>Hamster</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.animal}
            source={require('../assets/rabbit.png')}
          />
          <Text style={styles.textanimal}>Rabbit</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30 }}>
        <Text style={{ left: 25, fontWeight: 'bold', color: '#000', fontSize: 15 }}>Konsultasi Klinik</Text>
        <Text style={{ right: 20 }}
          onPress={() => navigation.navigate('Lainnya')}>Lihat lainnya{'>>'}</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ height: 170, marginBottom:-130 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: -1 }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.textButton}>Batam</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.textButton}>Jakarta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.textButton}>Riau</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <ScrollView>
        <View style={styles.banyak}>
          <Image source={require('../assets/image4.png')}
            style={styles.picture} />
          <Text style={{
            fontSize: 15,
            color: '#875C25',
            marginStart: 5,
            marginTop: 7
          }}>
            Batam </Text>
          <Text style={{
            fontSize: 18,
            color: '#000',
            right: 43,
            marginTop: 22,
            fontWeight: 'bold'
          }}>
            Klinik Kehewanan </Text>
          <Text style={{
            fontSize: 16,
            color: '#1A3150',
            right: 180,
            marginTop: 45,
            fontWeight: 'bold'
          }}>
            Buka: 09.00 - 20.00 </Text>
          <TouchableOpacity style={styles.button2}onPress={() => navigation.navigate('DetailpageScreen')}>
            <Text style={styles.textButton2}
              onPress={() => navigation.navigate('Searchbar')}>Book Now</Text>
          </TouchableOpacity>
        </View>
        <Text></Text>
        <View style={styles.banyak}>
          <Image source={require('../assets/image4.png')} style={styles.picture} />
          <Text style={{
            fontSize: 15,
            color: '#875C25',
            marginStart: 5,
            marginTop: 5
          }}>
            Batam </Text>
          <Text style={{
            fontSize: 18,
            color: '#000',
            right: 43,
            marginTop: 22,
            fontWeight: 'bold'
          }}>
            Klinik Kehewanan </Text>
          <Text style={{
            fontSize: 16,
            color: '#1A3150',
            right: 180,
            marginTop: 45,
            fontWeight: 'bold'
          }}>
            Buka: 09.00 - 20.00 </Text>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.textButton2}
              onPress={() => navigation.navigate('SearchScreen')}>Book Now</Text>
          </TouchableOpacity>
        </View>
        <Text></Text>
        <View style={styles.banyak}>
          <Image source={require('../assets/image4.png')} style={styles.picture} />
          <Text style={{
            fontSize: 15,
            color: '#875C25',
            marginStart: 5,
            marginTop: 5
          }}>
            Batam </Text>
          <Text style={{
            fontSize: 18,
            color: '#000',
            right: 43,
            marginTop: 22,
            fontWeight: 'bold'
          }}>
            Klinik Kehewanan </Text>
          <Text style={{
            fontSize: 16,
            color: '#1A3150',
            right: 180,
            marginTop: 45,
            fontWeight: 'bold'
          }}>
            Buka: 09.00 - 20.00 </Text>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.textButton2}
              onPress={() => navigation.navigate('SearchScreen')}>Book Now</Text>
          </TouchableOpacity>
        </View>
        <Text></Text>
        <View style={styles.banyak}>
          <Image source={require('../assets/image4.png')} style={styles.picture} />
          <Text style={{
            fontSize: 15,
            color: '#875C25',
            marginStart: 5,
            marginTop: 5
          }}>
            Batam </Text>
          <Text style={{
            fontSize: 18,
            color: '#000',
            right: 43,
            marginTop: 22,
            fontWeight: 'bold'
          }}>
            Klinik Kehewanan </Text>
          <Text style={{
            fontSize: 15,
            color: '#1A3150',
            right: 180,
            marginTop: 42,
            fontWeight: 'bold'
          }}>
            Buka: 09.00 - 20.00 </Text>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.textButton2}
              onPress={() => navigation.navigate('SearchScreen')}>Book Now</Text>
          </TouchableOpacity>
        </View>
        <Text></Text>
      </ScrollView>

    </View>


  )
}

const styles = StyleSheet.create({
  container: {
  },
  picture22: {
    width: 411,
    height: 150,
  },
  picture1: {
    marginLeft: 25,
    width: 35.78,
    height: 13.68,
    left: 26.5,
    top: 38,
    position: 'absolute',
  },
  wrapper: {
    height: 250,
    marginTop: -75,
  },
  slide: {
    position: 'absolute',
    height: 100,
    width: 300,
    top: 30,
    left: 50,
    borderRadius: 10,
    marginTop: 70,
  },
  animal: {
    top: 80,
    width: 50,
    height: 50,
    marginBottom: 82,
    marginTop: -115,
    marginHorizontal: 10,
    left: -115,
  },
  textanimal: {
    fontSize: 12,
    color: '#1A3150',
    fontWeight: 'bold',
    textAlign: 'center',
    top: 20,
    marginTop: -20,
    left: -115,

  },
  button: {
    flexDirection: 'row',
    width: 100,
    height: 29,
    left: 17,
    marginTop: 10,
    marginHorizontal: 7,
    backgroundColor: '#FDCB5A',
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#FDCB5A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button1: {
    flexDirection: 'row',
    width: 80,
    height: 29,
    left: 17,
    marginTop: 10,
    marginHorizontal: 7,
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#FDCB5A',
    activeDotColor: '#FDCB5A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#1A3150',
    fontSize: 12,
  },
  picture: {
    width: 125,
    height: 123,
    resizeMode: 'cover',
  },
  banyak: {
    flexDirection: 'row',
    marginStart: 25,
    marginEnd: 25,
    borderColor: '#fff',
    borderRadius: 1,
    elevation: 3,
    bottom: -20
  },
  button2: {
    position: 'absolute',
    width: 195,
    height: 40,
    left: 130,
    top: 70,
    backgroundColor: '#FDCB5A',
    borderRadius: 2,
  },
  textButton2: {
    position: 'absolute',
    height: 18,
    top: 10,
    left: 63,
    fontFamily: 'Roboto',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    color: '#000000'
  }
})

export default Dashboard