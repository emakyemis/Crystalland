import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import { Card, CardItem,Thumbnail,Body,Button} from 'native-base';
import MenuButton from '../components/MenuButton';
import firebase from 'firebase';
const resim ={
  roller_coaster:(require('../assets/roller_coaster.jpg')),
  sukaydiragi:(require('../assets/sukaydıragi.jpg')),
  attractions360:(require('../assets/attractions360.jpg')),
  jurrasicPark:(require('../assets/jurrasicPark.jpg')),
  computerPark:(require('../assets/computerPark.jpg')),
  donmeDolap:(require('../assets/dönme_dolap2.jpg')),
  ahtapot:(require('../assets/ahtapot.jpg')),
  atli_karinca:(require('../assets/atli_karinca.jpg')),
  carpisan_araba:(require('../assets/carpisan_araba.jpg')),
  dragon:(require('../assets/dragon.jpg')),
  mini360:(require('../assets/mini360.jpg')),
  teleferik:(require('../assets/teleferik.jpg')),
}

const Home = props =>  {
  const navigation = props.navigation;

  return (
    <ScrollView>
    <View style={styles.container}>
      <Header
            containerStyle={{
              backgroundColor: '#fff'
            }}
            leftComponent={{ icon: 'menu', color: '#b03060' }}
            centerComponent={{ text: 'ANASAYFA', style: { color: '#b03060',fontSize:22, } }}
          />
         
          <View style={styles.item2}>
              <Card>
              <Header
                containerStyle={{
                  backgroundColor: 'white'
                }}
                centerComponent={{ text: 'LÜTFEN BİR OYUNCAK SEÇİN', style: { color: '#b03060',fontSize:20 } }}
              />
                <CardItem>
                    <Thumbnail source={resim.roller_coaster}/>
                    <MenuButton
            title="Roller Coaster               40₺"
            onPress={() => {
              navigation.navigate('BakiyeGuncelle');
              navigation.closeDrawer();
            }}
          />
                    
                </CardItem>
                <CardItem>
                    <Thumbnail source={resim.sukaydiragi}/>
                    <MenuButton
            title="Su Kaydırağı                  50₺"
            onPress={() => {
              navigation.navigate('BakiyeGuncelle');
              navigation.closeDrawer();
            }}
          />
                </CardItem>
                <CardItem>
                    <Thumbnail source={resim.attractions360}/>
                    <MenuButton
            title="Attractions360                55₺"
            onPress={() => {
              navigation.navigate('BakiyeGuncelle');
              navigation.closeDrawer();
            }}
          />
                </CardItem>
                <CardItem>
                    <Thumbnail source={resim.jurrasicPark}/>
                    <MenuButton
            title="Jurrasic Park                   70₺"
            onPress={() => {
              navigation.navigate('BakiyeGuncelle');
              navigation.closeDrawer();
            }}
          />
                </CardItem>
                <CardItem>
                    <Thumbnail source={resim.computerPark}/>
                    <MenuButton
            title="Computer Park                  35₺"
            onPress={() => {
              navigation.navigate('BakiyeGuncelle');
              navigation.closeDrawer();
            }}
          />
                </CardItem>
                <CardItem>
                    <Thumbnail source={resim.donmeDolap}/>
                    <MenuButton
            title="Dönme Dolap                       25₺"
            onPress={() => {
              navigation.navigate('BakiyeGuncelle');
              navigation.closeDrawer();
            }}
          />
                    
                </CardItem>
                <CardItem>
                    <Thumbnail source={resim.ahtapot}/>
                    <MenuButton
            title="Ahtapot                               25₺"
            onPress={() => {
              navigation.navigate('BakiyeGuncelle');
              navigation.closeDrawer();
            }}
          />
          </CardItem>
                <CardItem>
                    <Thumbnail source={resim.atli_karinca}/>
                    <MenuButton
            title="Atlı Karınca                           5₺"
            onPress={() => {
              navigation.navigate('BakiyeGuncelle');
              navigation.closeDrawer();
            }}
          />
          </CardItem>
                <CardItem>
                    <Thumbnail source={resim.carpisan_araba}/>
                    <MenuButton
            title="Çarpışan Araba                  12₺"
            onPress={() => {
              navigation.navigate('BakiyeGuncelle');
              navigation.closeDrawer();
            }}
          />
          </CardItem>
                <CardItem>
                    <Thumbnail source={resim.dragon}/>
                    <MenuButton
            title="Dragon                               18₺"
            onPress={() => {
              navigation.navigate('BakiyeGuncelle');
              navigation.closeDrawer();
            }}
          />
          </CardItem>
                <CardItem>
                    <Thumbnail source={resim.mini360}/>
                    <MenuButton
            title="Mini360                              34₺"
            onPress={() => {
              navigation.navigate('BakiyeGuncelle');
              navigation.closeDrawer();
            }}
          />
          </CardItem>
                <CardItem>
                    <Thumbnail source={resim.teleferik}/>
                    <MenuButton
            title="teleferik                            54₺"
            onPress={() => {
              navigation.navigate('BakiyeGuncelle');
              navigation.closeDrawer();
            }}
          />
                    
                </CardItem>
              </Card>
          </View>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}
export default  Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection:'column',
  },
  item1: {
    flex: 1,
    backgroundColor: '#fff',
    fontSize: 120,
  },
  item2: {
    flex: 1,
    backgroundColor: '#fff',
    fontSize: 120,
  },
  item3: {
    flex: 3,
    backgroundColor: '#fff',
    fontSize: 120,
  },
  butonStil:{
    width: 50,
    height:50,
    margin:30,
    backgroundColor: '#b03060',
  },
  butonView: {
    flexDirection:'row',
  }
});