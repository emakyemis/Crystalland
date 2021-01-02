import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import firebase from 'firebase';

const ParaYukle = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
 

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    try {
      const { email } = firebase.auth().currentUser;
      const ref = firebase
        .database()
        .ref('/users')        
        .orderByChild('email')
        .equalTo(email)
        .once('value').then(snapshot => {
          snapshot.forEach((childSub) => {
           let key = childSub.key;
           firebase
            .database()
            .ref('/users/'+key)
            .update({cuzdan:parseInt(childSub.val().cuzdan)+parseInt(data)})
          });
          //.log('User data: ', snapshot.val());
        });
     
        
    } catch (e) {
    }
    /*
   
    /*
    try {
      
    } catch (e) {
      //this.setState({ role: "admin" });
    }*/
    alert(`${data}₺ yüklendi.`);
  };

  if (hasPermission === null) {
    return <Text>Kamera için izin vermelisiniz.</Text>;
  }
  if (hasPermission === false) {
    return <Text>Kameraya erişim sağlanamıyor.</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button color="#b03060" title={'Tekrar Karekod Oku'} onPress={() => setScanned(false)} />}
    </View>
  );
}
export default ParaYukle;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});