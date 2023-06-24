import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Text, TextInput, Button, Alert, View } from 'react-native'



export default function Home () {
	const [loginState, setLoginState] = useState(Boolean);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigation:any = useNavigation;

	return(
		<>
			<View>
				<Text>
					this is a test
				</Text>

			</View>
		</>
	)
}