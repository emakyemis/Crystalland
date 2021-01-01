
import React from 'react';
import {ImageBackground,StyleSheet,Keyboard, Text, View, TextInput, TouchableWithoutFeedback,TouchableOpacity, Alert, KeyboardAvoidingView,Image,SafeAreaView} from 'react-native';
import { Button } from 'react-native-elements';
import { useState } from 'react';
import DatePicker from '@react-native-community/datetimepicker';

import firebase from 'firebase';

  
const image={dolap:require('../assets/dönme_dolap.jpg'),};
	const Register = props => {
		const navigation = props.navigation;

  const [state, setState] = useState({
	isim: '',
	soyisim: '',
    email: '',
    password: '',
	telefon: '',
    errMess: null,

  });

  const handleSignUp = async () => {
    /*const createToken = (await Notifications.getExpoPushTokenAsync()).data;

    console.log(createToken);*/

    firebase
      .auth()
      .createUserWithEmailAndPassword(state.email, state.password)
      .then(userCredentials => {

        firebase
          .database()
          .ref('/users')
          .push({ email: state.email, isim: state.isim, soyisim:state.soyisim ,telefon:state.telefon,cuzdan: 0, role: "user"});
        navigation.navigate('Login');
      })
      .catch(err => {
        setState({ errMess: err.message });
      });
  };
		//const [date, setDate] = useState('09-10-2020');
		return (
		  <KeyboardAvoidingView style={styles.containerView} behavior="padding">
			  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			  <View style={styles.container}>
				<ImageBackground source= {image.dolap} imageStyle={styles.image} style={styles.image_container}>

					
						<View style={styles.loginScreenContainer}>
							<View style={styles.loginFormView}>
							
								<View style={styles.satir}><Text style={styles.baslik}>Ad:</Text><TextInput placeholder="Adınız" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} 
            onChangeText={displayName => {
              setState({ ...state, displayName });
            }}
            value={state.displayName}/></View>
								<View style={styles.satir}><Text style={styles.baslik}>Soyad:</Text><TextInput placeholder="Soyadınız" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} /></View>
								<View style={styles.satir}><Text style={styles.baslik}>E-Mail:</Text><TextInput keyboardType={'email-address'} placeholder="E-Mail" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} 
            onChangeText={email => {
              setState({ ...state, email });
            }}
            value={state.email}/></View>
								<View style={styles.satir}><Text style={styles.baslik}>Şifre:</Text><TextInput placeholder="Şifre" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} 
            onChangeText={password => {
              setState({ ...state, password });
            }}
            value={state.password}/></View>
								<View style={styles.satir}><Text style={styles.baslik}>Tel No:</Text><TextInput keyboardType={'phone-pad'} placeholder="Telefon Numarası" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}/></View>
								
								

								<TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.textButton}>Kayıt ol</Text>
        </TouchableOpacity>		

							</View>							
									</View>					
						</ImageBackground>
						
						</View>
						</TouchableWithoutFeedback>
					</KeyboardAvoidingView>
		); 
};
export default Register;
const styles = StyleSheet.create({
	containerView: {
	  flex: 1,
	},
	loginScreenContainer: {
	  flex: 1,
	  marginTop: 250,
	 
  },
  satir: {
	  flexDirection: 'row',
	  alignItems: 'center',
	  width:425,
  },
  container: {
    flex: 1,
    flexDirection: "column"
  },
baslik:{
	fontSize : 16,
	fontWeight:'bold',
	color:'#7E354D',
	marginLeft:30,
},
  image_container: {
    flex: 1,
  },
  image: {
    flex: 1,
	resizeMode: "cover",
	width:null,
	height: null,
  },
	logoText: {
	  fontSize: 40,
	  fontWeight: "800",
	  marginTop: 150,
	  marginBottom: 30,
	  textAlign: 'center',
	},
	loginFormView: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	},
	loginFormTextInput: {
	  height: 43,
	  fontSize: 14,
	  borderRadius: 5,
	  borderWidth: 1,
	  borderColor: '#eaeaea',
	  backgroundColor: '#fafafa',
	  width: 250,
	  margin: 20,
	  marginLeft:50,
	  textAlign:'center',
	  justifyContent:'flex-end',
	},
	loginButton: {
	  backgroundColor: '#7E354D',
	  borderRadius: 5,
	  height: 45,
	  width: 200,
	  margin: 20,
	},
	kaydol: {
		height: 45,
		marginTop: 40,
		color: '#fff',
		fontSize:22,
	  fontWeight:'bold',
	},
	container: {
		flex: 1,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
	  },
	  title: {
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold',
		padding: 20,
	  },
	  datePickerStyle: {
		width: 200,
		marginTop: 20,
	  },
  });

 
  