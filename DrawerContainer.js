import React from 'react';
import { StyleSheet,View, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import MenuButton from './components/MenuButton';
import firebase, { database } from 'firebase';

const signOutUser = () => {
  Alert.alert(
    'Bildirim',
    'Çıkmak istediğinize emin misiniz?',
    [
      {
        text: 'Hayır',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'Evet', onPress: () => firebase.auth().signOut() },
    ],
    { cancelafble: false },
  );
};

export default class DrawerContainer extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.content}>
        <View style={styles.container}>
          <MenuButton
            title="HOME"
            onPress={() => {
              navigation.navigate('Home');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="PROFİL"
            onPress={() => {
              navigation.navigate('Profile');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="PARA YÜKLE"
            onPress={() => {
              navigation.navigate('ParaYukle');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="HAKKINDA"
            onPress={() => {
              navigation.navigate('Hakkında');
              navigation.closeDrawer();
            }}
          />
         <MenuButton
            title="ÇIKIŞ YAP"
            onPress={
              signOutUser
              //navigation.closeDrawer();
            }
          />
        </View>
      </View>
    );
  }
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};
const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 20
  },
});