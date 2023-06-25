import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, View, Pressable, StyleSheet, ScrollView, TextInput } from 'react-native'

export default function PrivateMessages () {
	const navigation:any = useNavigation();

	const homePress = () => {
		navigation.navigate("Home");
	}

	const sendPress = () => {
		console.log("working");
	}

	const openPress = () => {
		console.log("open");
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
						Private Messages
					</Text>
					<Text>
						Create Private Messages
					</Text>
					<TextInput
						placeholder='Message'
						style={styles.textInputStyles}
						multiline={true}
					/>
					<Pressable
						style={styles.button}
						onPress={sendPress}
					>
						<Text>Send</Text>
					</Pressable>
					<Text>
						Open Private Messages
					</Text>
					<TextInput
						placeholder='Secret Code'
						style={styles.textInputStyles}
						multiline={false}
					/>
					<Pressable
						style={styles.button}
						onPress={openPress}
					>
						<Text>Open Message</Text>
					</Pressable>
					<Pressable
						style={styles.button}
						onPress={homePress}
					>
						<Text>Home</Text>
					</Pressable>
				</View>
			</ScrollView>
		</>
	)
}