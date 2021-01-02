import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Header} from 'react-native-elements';
import { Card, CardItem,Thumbnail,Body,Button} from 'native-base';
import Icon from "react-native-vector-icons/Ionicons";
const resim={logo:(require('../assets/logo.png'))}

export default class Hakkında extends React.Component {
render() {
  return (
    <View style={styles.container}>
      <Header
            containerStyle={{
              backgroundColor: '#fff'
            }}
            centerComponent={{ text: 'HAKKINDA', style: { color: '#b03060',fontSize:22, } }}
          />
         
          <View style={styles.item2}>
            

              <Card>              
                
                
                <CardItem>
                    <Icon
                      rounded
                      name="call-outline"
                      color="#b03060"
                      size={75}
                    />
                    <Body>
                      <Text style={{margin: 30, fontSize: 18}}>TEL NO: 0555 555 55 55</Text>
                    </Body>
                </CardItem>
                <CardItem>
                    <Icon
                      rounded
                      name="location"
                      color="#b03060"
                      size={75}
                    />
                    <Body>
                      <Text style={{margin: 30, fontSize: 18}}>ADRES: Liawenee Conservation Area, 9239 Highland Lakes Rd, Liawenee TAS 7030, Avustralya</Text>
                    </Body>
                </CardItem>
                <CardItem></CardItem>
                <CardItem></CardItem>
                <CardItem></CardItem>
                <CardItem>
                    <Thumbnail style={{width:200,}}source={resim.logo}/>
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