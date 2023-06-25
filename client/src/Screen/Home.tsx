import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, View, Pressable, StyleSheet, ScrollView } from 'react-native'

export default function Home () {
	const navigation:any = useNavigation();

	const signOutPress = () => {
		navigation.navigate("Login");
	}

	const messagesPress = () => {
		navigation.navigate("Messages")
	}

	const privateMessagesPress = () => {
		navigation.navigate("PrivateMessages");
	}

	const groupPress = () => {
		console.log("there")
	}
	
	const chatPress = () => {

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
						Home
					</Text>
					<Pressable
						style={styles.button}
						onPress={messagesPress}
					>
						<Text>Messages</Text>
					</Pressable>
					<Pressable
						style={styles.button}
						onPress={privateMessagesPress}
					>
						<Text>Private Messages</Text>
					</Pressable>
					<Pressable
						style={styles.button}
						onPress={groupPress}
					>
						<Text>Group</Text>
					</Pressable>
					<Pressable
						style={styles.button}
					>
						<Text>Chat</Text>
					</Pressable>

					<Pressable
						style={styles.button}
						onPress={signOutPress}
					>
						<Text>Sign Out</Text>
					</Pressable>
				</View>
			</ScrollView>
		</>
	)
}