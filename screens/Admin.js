import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Header} from 'react-native-elements';
import { Card, CardItem,Thumbnail,Body,Button} from 'native-base';
const resim={oyuncak:(require('./assets/a.jpeg'))}
export default class Admin extends React.Component {
render() {
  return (
    <View style={styles.container}>
      <Header
            containerStyle={{
              backgroundColor: '#fff'
            }}
            leftComponent={{ icon: 'menu', color: '#b03060' }}
            centerComponent={{ text: 'ADMİN', style: { color: '#b03060',fontSize:22, } }}
            rightComponent={{ icon: 'home', color: '#b03060' }}
          />
         
          <View style={styles.item2}>
            <Header
              containerStyle={{
                backgroundColor: '#fff'
              }}
              centerComponent={{ text: 'İŞLEMLER', style: { color: '#b03060',fontSize:20 } }}
            />
            <View style={styles.butonView}>
            <Button style={styles.butonStil}>
              <Text style={{margin: 30, fontSize: 16}}>Oyuncak Ekle</Text>
            </Button>
            <Button style={styles.butonStil}>
              <Text style={{margin: 30, fontSize: 16}}>Oyuncak Sil</Text>
            </Button>
            </View>

              <Card>
              <Header
                containerStyle={{
                  backgroundColor: '#fff'
                }}
                centerComponent={{ text: 'LUNAPARKTAKİ OYUNCAKLAR', style: { color: '#b03060',fontSize:20 } }}
              />
                <CardItem>
                    <Thumbnail source={resim.oyuncak}/>
                    <Body>
                      <Text style={{margin: 30, fontSize: 18}}>Dönme Dolap</Text>
                    </Body>
                </CardItem>
                <CardItem>
                    <Thumbnail source={resim.oyuncak}/>
                    <Body>
                      <Text style={{margin: 30, fontSize: 18}}>Dönme Dolap</Text>
                    </Body>
                </CardItem>
                <CardItem>
                    <Thumbnail source={resim.oyuncak}/>
                    <Body>
                      <Text style={{margin: 30, fontSize: 18}}>Dönme Dolap</Text>
                    </Body>
                </CardItem>
                <CardItem>
                    <Thumbnail source={resim.oyuncak}/>
                    <Body>
                      <Text style={{margin: 30, fontSize: 18}}>Dönme Dolap</Text>
                    </Body>
                </CardItem>
                

              </Card>
          </View>
      <StatusBar style="auto" />
    </View>
  );
};
}
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
    width: 150,
    height:50,
    margin: 30,
    backgroundColor: '#b03060',
    fontSize: 120,
  },
  butonView: {
    flexDirection:'row',
  }
});