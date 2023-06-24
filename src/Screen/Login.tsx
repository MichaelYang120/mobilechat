import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Text, TextInput, Alert, View, ScrollView, StyleSheet, Pressable } from 'react-native'



export default function Login () {
	const [loginState, setLoginState] = useState(Boolean);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigation:any = useNavigation();
	const debug = false;
	
	const LoginPress = () => {
		if(debug) {
			console.log("here")
			console.log(email)
			console.log(password)
		}
		// login conditional
		if(email === "Test" && password ==="Test") {
			console.warn("logged in successfully")
			setLoginState(true);
			if(loginState === true) {
				navigation.navigate("Home");
				// this is to clear fields after successful login
				setEmail("");
				setPassword("");
			} else {
				if(debug) {
					Alert.alert("Incorrect Email or Password");
				}
			}
		}
	}

	const SignupPress = () => {
		if(debug) {
			console.warn("clicked");
		}
		navigation.navigate("Signup");
	}

	const styles = StyleSheet.create({
		textInputStyles: {
			backgroundColor: '#F3F2F4',
			flex: 1,
			display: "flex",
			padding: 4,
			borderWidth: 1,
			borderRadius: 3,
			width: "80%",
			margin: 10,
		},
		container: {
			width: '100%',
			padding: 15,
			marginVertical: 5,
			alignItems: 'center',
		},
		button: {
			backgroundColor: 'pink',
			flex: 1,
			display: "flex",
			padding: 10,
			borderWidth: 1,
			borderRadius: 3,
			width: "80%",
			margin: 10,	
			alignItems: 'center',
		}
	});


	return(
		<>
			<ScrollView>
				<View style={styles.container}>
					<Text>Strong Old Test Login</Text>
					<TextInput
						style={styles.textInputStyles}
						placeholder='Email'
						onChangeText={setEmail}
						value={email}
					/>
					<TextInput
						style={styles.textInputStyles}
						placeholder='Password'
						onChangeText={setPassword}
						value={password}
					/>

					<Pressable
						style={styles.button}
						onPress={LoginPress}
					>
						<Text>Login</Text>
					</Pressable>
					<Pressable
						style={styles.button}
						onPress={SignupPress}
					>
						<Text>Sign Up</Text>
					</Pressable>
				</View>
			</ScrollView>
		</>
	)
}