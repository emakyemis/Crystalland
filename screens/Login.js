import React,{useState} from 'react';
import { ImageBackground } from 'react-native';
import {StyleSheet,Keyboard, Text, View, TextInput, TouchableWithoutFeedback,TouchableOpacity, Alert, KeyboardAvoidingView,Image} from 'react-native';
import { Button } from 'react-native-elements';

import firebase from 'firebase';

const image={dolap:require('../assets/dönme_dolap.jpg'),};

const Login = props => {
	const navigation = props.navigation;
	const [state, setState] = useState({
		email: '',
		password: '',
		errMess: null,
	  });
	
	  const handleLogin = () => {
		const { email, password } = state;
		const check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		{
		  !email || check.test(email.toString()) === false
			? setState({ errMess: 'Email formatını doğru giriniz' })
			: firebase
			  .auth()
			  .signInWithEmailAndPassword(email, password)
			  .catch(err => {
				console.log(err);
				setState({ errMess: err.message });
			
			  });
		}
	  };
	
		return (
		  <KeyboardAvoidingView style={styles.containerView} behavior="padding">
			  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			  <View style={styles.container}>
				<ImageBackground source= {image.dolap} imageStyle={styles.image} style={styles.image_container}>

					
						<View style={styles.loginScreenContainer}>
							<View style={styles.loginFormView}>
							
								<TextInput placeholder="E-Mail" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} 
            onChangeText={email => {
              setState({ ...state, email });
            }}
            value={state.email} />
								<TextInput placeholder="Şifre" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} onChangeText={password => {
              setState({ ...state, password });
            }}
            value={state.password}/>
								<TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.textButton}>Giriş yap</Text>
        </TouchableOpacity>
								<Text style={styles.kaydol}	onPress={() => {
            navigation.navigate('Register');
          }}>"Üye değilseniz kaydolmak için tıklayınız!"</Text>
								
							</View>
							
						</View>
					
		  	</ImageBackground>
			  
			  </View>
			  </TouchableWithoutFeedback>
		  </KeyboardAvoidingView>
		);
	  }
	
	  
	export default Login;
	 // async onFbLoginPress() {
		/*const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(appId, {
		  permissions: ['public_profile', 'email'],
		});
		if (type === 'success') {
		  const response = await fetch(
			`https://graph.facebook.com/me?access_token=${token}`);
		  Alert.alert(
			'Logged in!',
			`Hi ${(await response.json()).name}!`,
		  );
		}*/
	 // }


const styles = StyleSheet.create({
	containerView: {
	  flex: 1,
	},
	loginScreenContainer: {
	  flex: 1,
	  marginTop: 250,
	 
  },
  container: {
    flex: 1,
    flexDirection: "column"
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
	  width: 400,
	  margin: 20,
	  textAlign:'center',
	
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
  });