import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Header} from 'react-native-elements';
import Icon from "react-native-vector-icons/Ionicons";

render() {
  return (
    <View style={styles.container}>
          <Header
            backgroundColor={{color:'#fff'}}
            leftComponent={{ icon: 'menu', color: '#b03060' }}
            centerComponent={{ text: 'PROFILE', style: { color: '#b03060' } }}
            rightComponent={{ icon: 'home', color: '#b03060' }}
          />
        <View style={styles.item2}>
          <Icon
            rounded
            name="person-circle"
            color="#b03060"
            size={175}
          />
        </View>
        <View style={styles.item3}>
          <View style={{flex: 1, alignItems:'center'}}>
            <Text style={{fontSize: 30,fontWeight: "bold",color:'#b03060'}}>Güncel Bakiye</Text>
            <Text style={{fontSize: 22,color:'#000'}}>20 ₺</Text>
            </View>
          <View style={{flex: 1, backgroundColor:'#fff'}}></View>
          <View style={styles.ProfilBilgi}>
          <Text style={styles.TextBaslik}>Adı :</Text>
            <Text style={styles.TextIcerik}>Esra Melike</Text>
          
          </View>
          <View style={styles.ProfilBilgi}>
            <Text style={styles.TextBaslik}>Soyadı :</Text>
            <Text style={styles.TextIcerik}>Esra Melike</Text>
          </View>
          <View style={styles.ProfilBilgi}>
            <Text style={styles.TextBaslik}>Doğum Tarihi :</Text>
            <Text style={styles.TextIcerik}>Esra Melike</Text>
           </View>
          <View style={styles.ProfilBilgi}>
            <Text style={styles.TextBaslik}>Telefon No. :</Text>
            <Text style={styles.TextIcerik}>Esra Melike</Text>
          </View>
          <View style={styles.ProfilBilgi}>
            <Text style={styles.TextBaslik}>E-posta :</Text>
            <Text style={styles.TextIcerik}>Esra Melike</Text>
        </View>
        </View>
        <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection:'column',
  },
  item2: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
  },
  item3: {
    flex: 3,
    backgroundColor: '#fff',
    flexDirection:'column',
    justifyContent:'flex-start',
    
  },
  TextBaslik: {
    color:'#fff',
    fontSize: 20,
  },
  TextIcerik: {
    color:'#000',
    fontSize: 18,
    },
  ProfilBilgi: {
    flex: 1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around', 
    backgroundColor:'#b03060',
  },
});