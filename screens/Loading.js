import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import firebase from 'firebase';
import Fire from '../Fire';


const LoadingScreen = props => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      user
        ? props.navigation.navigate('App')
        : props.navigation.navigate('Auth');
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text>Yükleniyor...</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};
export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});