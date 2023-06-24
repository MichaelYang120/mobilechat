import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, View, Pressable, StyleSheet, ScrollView } from 'react-native'

export default function Signup () {
	const navigation:any = useNavigation();
	
	const loginPress = () => {
        navigation.navigate("Login")
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