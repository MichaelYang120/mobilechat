import React, { useState } from 'react'
import { Text, TextInput, Button, Alert } from 'react-native'


export default function Login () {
	const [loginState, setLoginState] = useState([]);
	const [email, setEmail] = useState([]);
	const [password, setPassword] = useState([]);

	const LoginPress = () => {
		Alert.alert("clicked");
	}

	const SignupPress = () => {
		Alert.alert("pressed")
	}

	return(
		<>
			<TextInput
				placeholder='Email'
			/>
			<TextInput
				placeholder='Password'
			/>
			<Button
				title='Login'
				onPress={LoginPress}
			/>
			<Button 
				title='Sign Up'
				onPress={SignupPress}
			/>
		</>
	)
}