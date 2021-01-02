import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Header} from 'react-native-elements';
import Icon from "react-native-vector-icons/Ionicons";
import firebase from 'firebase';
import Fire from '../Fire';
export default class Profile extends React.Component {
  static navigationOptions = () => ({
    title: 'Profile',
  });
  
  constructor(props) {

    super(props);

    this.state = {
      isim:'',
      soyisim:'',
      telefon:'',
      email:'',
      cuzdan: 0,
    }

    this.arrayholder = [];
    this.navigation = props.navigation;

  }
  GetProfil=()=>{
    try {
      const { email } = firebase.auth().currentUser;
      const ref = firebase
        .database()
        .ref('/users')
        .orderByChild('email')
        .equalTo(email)
        .once('value').then(snapshot => {
          let data,data1,data2,data3,data4;
          snapshot.forEach((childSub) => {
            let key = childSub.key;
            let childData = childSub.val();
            data = childData.cuzdan;
            data1=childData.isim;
            data2=childData.soyisim;
            data3=childData.telefon;
            data4=childData.email;
          });
          this.setState({ cuzdan: data,isim: data1,soyisim:data2,telefon:data3,email:data4 });
          //.log('User data: ', snapshot.val());
        });
    } catch (e) {
      //this.setState({ role: "admin" });
    }
  }
  componentDidMount() {
    this.GetProfil();

  }
render() {
  return (
    <View style={styles.container}>
          <Header
            backgroundColor={{color:'#fff'}}
            leftComponent={{ icon: 'menu', color: '#b03060' }}
            centerComponent={{ text: 'PROFILE', style: { color: '#b03060' ,fontSize:20 } }}
            rightComponent={{ icon: 'update', color: '#b03060',onPress:this.GetProfil() }}
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
            <Text style={{fontSize: 35,fontWeight: "bold",color:'#b03060'}}>Güncel Bakiye</Text>
            <Text style={{fontSize: 25,color:'#000'}}>{this.state.cuzdan}₺</Text>
            </View>
          <View style={{flex: 1, backgroundColor:'#fff'}}></View>
          <View style={styles.ProfilBilgi}>
          <Text style={styles.TextBaslik}>Adı Soyadı:</Text>
            <Text style={styles.TextIcerik}>{this.state.isim}</Text>
          
          </View>
          <View style={styles.ProfilBilgi}>
            <Text style={styles.TextBaslik}>Telefon No. :</Text>
            <Text style={styles.TextIcerik}>{this.state.telefon}</Text>
          </View>
          <View style={styles.ProfilBilgi}>
            <Text style={styles.TextBaslik}>E-posta :</Text>
            <Text style={styles.TextIcerik}>{this.state.email}</Text>
        </View>
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
