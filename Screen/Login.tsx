import React, { useState } from 'react'
import { Text, TextInput, Button, Alert, View } from 'react-native'


export default function Login () {
	const [loginState, setLoginState] = useState(Boolean);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const LoginPress = () => {
		console.log("here")
		console.log(email)
		console.log(password)
		
		// login conditional
		if(email === "Test" && password ==="Test") {
			console.warn("logged in successfully")
			setLoginState(true);
		}
	}

	const SignupPress = () => {
		console.warn("clicked")
	}


	return(
		<>
		<View>
			<TextInput
				placeholder='Email'
				onChangeText={setEmail}
				value={email}
			/>
			<TextInput
				placeholder='Password'
				onChangeText={setPassword}
				value={password}
			/>
			<Button
				title='Login'
				onPress={LoginPress}
			/>
			<Button 
				title='Sign Up'
				onPress={SignupPress}
			/>

		</View>
		</>
	)
}