import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Text, TextInput, View, Pressable, StyleSheet, ScrollView, Alert } from 'react-native'

export default function Signup () {
	const navigation:any = useNavigation();
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [signupStatus, setSignupStatus] = useState(false);
	
	const loginPress = () => {
		navigation.navigate("Login")
	}

	const signUpPress = () => {
		if(email === "") {
			Alert.alert("please enter email");
		}
		if(username === "") {
			Alert.alert("please enter username");
		}
		if(password === "") {
			Alert.alert("please enter a password");
		}
		if(name === "") {
			Alert.alert("please enter a name");
		}
		if(name !== "" && password !== "" && email !== "" && username !== "") {
			setSignupStatus(true)
		}
		if(signupStatus === true) {
			navigation.navigate("Home");
		}
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
				<View
					style={styles.container}
				>
					<Text>
						Sign Up
					</Text>
					<TextInput
						style={styles.textInputStyles}
						placeholder='Name'
						onChangeText={setName}
						value={name}
					/>
					<TextInput
						style={styles.textInputStyles}
						placeholder='Username'
						onChangeText={setUsername}
						value={username}
					/>
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
						onPress={signUpPress}
					>
						<Text>Sign Up</Text>
					</Pressable>
					<Pressable
						style={styles.button}
						onPress={loginPress}
					>
						<Text>Login</Text>
					</Pressable>
				</View>
			</ScrollView>
		</>
	)
}