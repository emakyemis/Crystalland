import React from 'react';
import { ImageBackground } from 'react-native';
import {StyleSheet,Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView,Image} from 'react-native';
import { Button } from 'react-native-elements';


const image={dolap:require('./assets/dönme_dolap.jpg'),};
export default class Login extends React.Component {
	render() {
		return (
		  <KeyboardAvoidingView style={styles.containerView} behavior="padding">
			  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			  <View style={styles.container}>
				<ImageBackground source= {image.dolap} imageStyle={styles.image} style={styles.image_container}>

					
						<View style={styles.loginScreenContainer}>
							<View style={styles.loginFormView}>
							
								<TextInput placeholder="E-Mail" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
								<TextInput placeholder="Şifre" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
								<Button
								buttonStyle={styles.loginButton}
								onPress={() => this.onLoginPress()}
								title="Giriş"
								/>
								<Text style={styles.kaydol}	onPress={() => this.onFbLoginPress()}>"Üye değilseniz kaydolmak için tıklayınız!"</Text>
								
							</View>
							
						</View>
					
		  	</ImageBackground>
			  
			  </View>
			  </TouchableWithoutFeedback>
		  </KeyboardAvoidingView>
		);
	  }
	
	  componentDidMount() {
	  }
	
	  componentWillUnmount() {
	  }
	
	  onLoginPress() {
	
	  }
	
	  async onFbLoginPress() {
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
	  }
}

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