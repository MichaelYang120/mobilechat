import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Text, TextInput, Button, Alert, View, ScrollView } from 'react-native'



export default function Login () {
	const [loginState, setLoginState] = useState(Boolean);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigation:any = useNavigation();
	
	const LoginPress = () => {
		console.log("here")
		console.log(email)
		console.log(password)
		
		
		// login conditional
		if(email === "Test" && password ==="Test") {
			console.warn("logged in successfully")
			setLoginState(true);
			if(loginState === true) {
				navigation.navigate("Home");
				
			} else {
				Alert.alert("Incorrect Email or Password");
			}
		}
	}

	const SignupPress = () => {
		console.warn("clicked")
	}


	return(
		<>
			<ScrollView>
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
			</ScrollView>
		</>
	)
}