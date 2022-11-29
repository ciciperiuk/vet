import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import Logo from '../assets/image5.png'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/FontAwesome5'

const Detailpage = () => {
const navigation = useNavigation();
    return (
        <View>
            <View style={styles.container}>
                <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.touch}>
                    <Icon name="arrow-back" size={20} color="white" style={{paddingTop:12,}}/>
                    <Text style={styles.text}>
                    Sebelumnya 
                    </Text>
                </TouchableOpacity>     
            </View>
            <ScrollView>
                <Image source={Logo} style={styles.logo}/>
                <View style={{backgroundColor:'#FFFFFF',paddingTop:20, paddingBottom:20,}}>
                    <View style={styles.container2}>
                        <Text style={styles.textcontainer2}>
                            Batam
                        </Text>
                        <Text style={{
                            fontSize: 17,
                            color: '#000',
                            right: 48,
                            marginTop: 23,
                            fontWeight: 'bold',
                            marginLeft: 5,
                        }}>
                            Klinik Kehewanan
                        </Text>
                        <Text style={{
                            fontSize: 15,
                            color: '#1A3150',
                            right: 182,
                            marginTop: 45,
                            fontWeight: 'bold',
                        }}>
                            Buka: 09.00 - 20.00
                        </Text>
                    </View>
                    <Text style={{ 
                        color:'#000000', 
                        fontSize:18,
                        paddingLeft:27,
                        paddingBottom:20,
                        }}>
                    Rekomendasi Dokter
                    </Text>
                    <View style={styles.container3}>
                    <Image source={require('../assets/dokter1.png')} style={styles.image} />
                    <Icon name='chevron-down-circle' size={20} color='#000000' style={styles.ceklis}/>
                        <Text style={styles.textcontainer2}>
                        Dokter Kucing
                        </Text>
                        <Text style={styles.text1container2}>
                        Dr.Alizah, SP.Kucing
                        </Text>
                        <Text style={styles.text2container2}>
                        2 years experience
                        </Text>
                    </View>
                    <View style={styles.container3}>
                    <Image source={require('../assets/dokter2.png')} style={styles.image} />
                    <Icon name='chevron-down-circle' size={20} color='#A8A8A8' style={styles.ceklis}/>
                        <Text style={styles.textcontainer2}>
                        Dokter Kucing
                        </Text>
                        <Text style={styles.text1container2}>
                        Dr.Jaquin SP.Hewan
                        </Text>
                        <Text style={styles.text2container2}>
                        2 years experience
                        </Text>
                    </View>
                    <View style={styles.waktu}>
                        <Text style={{ 
                            color:'#000000', 
                            fontSize:18,
                            paddingLeft:27,
                            paddingBottom:20,
                            }}>
                        Pilih Waktu Kunjungan
                        </Text>
                        <TouchableOpacity>
                            <View style={styles.waktuicon}>
                                <TouchableOpacity>
                                    <Icon1 name='calendar-check' size={20} color='#1A3150' style={{paddingHorizontal:10,top:10,}}/>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Icon name='caret-down' size={20} color='#000000' style={{top:10,}} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.daerah}>
                        <ScrollView horizontal={true} >
                            <TouchableOpacity style={{
                                width: 100,
                                height: 50,
                                marginHorizontal: 5,
                                borderRadius: 5,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 30,
                                backgroundColor:'#FDCB5A',
                                elevation:5,
                            }}>
                                <Text style={styles.textButton}>
                                Senin</Text>
                                <Text style={styles.textButton}>
                                12 Okt</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.textButton}>
                                Selasa</Text>
                                <Text style={styles.textButton}>
                                13 Okt</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.textButton}>
                                Rabu</Text>
                                <Text style={styles.textButton}>
                                14 Okt</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.textButton}>
                                Kamis</Text>
                                <Text style={styles.textButton}>
                                15 Okt</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.textButton}>
                                Jumat</Text>
                                <Text style={styles.textButton}>
                                16 Okt</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.textButton}>
                                Sabtu</Text>
                                <Text style={styles.textButton}>
                                17 Okt</Text>
                            </TouchableOpacity>
                        </ScrollView>

                        <ScrollView horizontal={true} >
                            <TouchableOpacity style={styles.button2}>
                                <Text style={styles.textButton}>
                                09:00 - 12:00 Pagi</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                width: 150,
                                height: 40,
                                marginHorizontal: 5,
                                borderRadius: 5,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 30,
                                backgroundColor:'#FDCB5A',
                                elevation:5,
                            }}>
                                <Text style={styles.textButton}>
                                12:00 - 15:00 Siang</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button2}>
                                <Text style={styles.textButton}>
                                15:00 - 17:00 Sore </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button2}>
                                <Text style={styles.textButton}>
                                19:00 - 21:00 Malam</Text>
                            </TouchableOpacity>
                        </ScrollView>

                        <View style={styles.waktu}>
                            <Text style={{ 
                                color:'#000000', 
                                fontSize:16,
                                paddingLeft:10,
                                paddingBottom:20,
                                }}>
                            Hewan Peliharaan
                            </Text>
                            <TouchableOpacity>
                                <View style={styles.waktuicon1}>
                                <Icon name='md-add-circle' size={20} color='#0000000' style={{paddingHorizontal:5,}}
                                onPress={() => navigation.navigate('TambahhewanScreen')}/>
                                <Text style={{color:'#000000', fontSize:14,}}>
                                    Tambahkan Hewan
                                </Text>
                                </View>
                            </TouchableOpacity>
                        </View> 

                    <View style={styles.container4}>
                    <Image source={require('../assets/cat.png')} style={styles.image} />
                    <Icon name='md-close-sharp' size={30} color='#000000' style={styles.ceklis}/>
                        <Text style={styles.text1container4}>
                        Ronald / Male
                        </Text>
                    </View>
                    <View style={styles.container4}>
                    <Image source={require('../assets/cat.png')} style={styles.image} />
                    <Icon name='md-close-sharp' size={30} color='#000000' style={styles.ceklis}/>
                        <Text style={styles.text1container4}>
                        Ronald / Female
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.button1}
                    onPress={() => navigation.navigate('Dashboard')}>
                        <Text style={styles.textButton}>
                        Book Now</Text>
                    </TouchableOpacity>
                   
                    </View>
                    
                </View> 
            </ScrollView>
        </View>
  )
}
const styles = StyleSheet.create({
container: {
    backgroundColor:'#1A3150',
    paddingHorizontal: 25,
    paddingTop: 20,
},
touch: {
    flexDirection:'row',
},
text: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 25,
    paddingTop: 10,
    marginHorizontal:20,
},
logo: {
    width: 420,
    height: 250,
    
},
textcontainer2: {
    fontSize: 15,
    color: '#875C25',
    marginStart: 5,
    marginTop: 5,
    marginLeft: 15,
},
text1container2: {
    fontSize: 17,
    color: '#000',
    right: 100,
    marginTop: 23,
    fontWeight: 'bold',
    marginLeft: 5,
},
ceklis: {
  marginTop: 23, 
  left: 215, 
},
text2container2: {
    fontSize: 14,
    color: '#1A3150',
    right: 252,
    marginTop: 45,
   
},
container2: {
    marginHorizontal: 10,
    backgroundColor:'#FFFFFF',
    flexDirection: 'row',
    marginBottom: 15,
},
image: {
    top: 5,
    width: 60,
    height: 60,
    left:20,
    resizeMode: 'cover',
},
container3: {
    marginHorizontal: 25,
    backgroundColor:'#FFFFFF',
    flexDirection: 'row',
    marginBottom: 15,
    elevation: 5,
    paddingVertical: 10,
},
waktu: {
    flexDirection:'row',
    paddingVertical:20,
},
waktuicon: {
    flexDirection:'row',
    marginLeft: 50,
    elevation:2,
    paddingHorizontal:10,
    bottom: 10,
    paddingBottom:20,
    
},
waktuicon1 :{
    flexDirection:'row',
    marginLeft: 30,
    paddingHorizontal:5,
    borderColor: '#FDCB5A',
    borderBottomWidth:1,
    borderTopWidth:1,
    borderRightWidth:1,
    borderLeftWidth:1,
    borderRadius:10,
},
daerah: {
    marginLeft:20,
    marginBottom: 70,
    elevation:5,
},
button: {
    width: 100,
    height: 50,
    marginHorizontal: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FFFFFF',
    marginBottom: 30,
    elevation:5, 
},
textButton: {
    color: 'black',
    fontSize: 13,
},
button2: {
    width: 130,
    height: 40,
    marginHorizontal: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor:'#FFFFFF',
    elevation:5,
},
container4: {
    marginHorizontal: 10,
    backgroundColor:'#FFFFFF',
    flexDirection: 'row',
    marginBottom: 15,
    elevation: 5,
    paddingVertical: 10,
},
text1container4: {
    fontSize: 17,
    color: '#000',
    left:10,
    marginTop: 23,
    marginLeft: 5,
},
button1 : {
    width: 300,
    height: 50,
    marginHorizontal: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FDCB5A',
    marginTop:10,
    marginBottom: 30,   
    left:15,
},
})

export default Detailpage