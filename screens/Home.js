import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Header} from 'react-native-elements';
import { Card, CardItem,Thumbnail,Body,Button} from 'native-base';
const resim={oyuncak:(require('./assets/a.jpeg'))}
export default class Home extends React.Component {
  static navigationOptions = () => ({
    title: 'Home',
  });

render() {
  return (
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
                  backgroundColor: '#fff'
                }}
                centerComponent={{ text: 'LÜTFEN BİR OYUNCAK SEÇİN', style: { color: '#b03060',fontSize:20 } }}
              />
                <CardItem>
                    <Thumbnail source={resim.oyuncak}/>
                    <Body>
                      <Text style={{margin: 30, fontSize: 18}}>Dönme Dolap</Text>
                    </Body>
                    <Button style={styles.butonStil}>
                        <Text style={{margin:15,color:'#fff', fontSize: 16}}>5₺</Text>
                    </Button>
                </CardItem>
                <CardItem>
                    <Thumbnail source={resim.oyuncak}/>
                    <Body>
                      <Text style={{margin: 30, fontSize: 18}}>Dönme Dolap</Text>
                    </Body>
                    <Button style={styles.butonStil}>
                      <Text style={{margin:15,color:'#fff', fontSize: 20}}>5₺</Text>
                    </Button>
                </CardItem>
                <CardItem>
                    <Thumbnail source={resim.oyuncak}/>
                    <Body>
                      <Text style={{margin: 30, fontSize: 18}}>Dönme Dolap</Text>
                    </Body>
                    <Button style={styles.butonStil}>
                      <Text style={{margin:15,color:'#fff', fontSize: 16}}>5₺</Text>
                     </Button>
                </CardItem>
                <CardItem>
                    <Thumbnail source={resim.oyuncak}/>
                    <Body>
                      <Text style={{margin: 30, fontSize: 18}}>Dönme Dolap</Text>
                    </Body>
                    <Button style={styles.butonStil}>
                      <Text style={{margin:15,color:'#fff', fontSize: 16}}>5₺</Text>
                    </Button>
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
    width: 50,
    height:50,
    margin:30,
    backgroundColor: '#b03060',
  },
  butonView: {
    flexDirection:'row',
  }
});