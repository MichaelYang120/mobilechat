import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, View, Pressable, StyleSheet, ScrollView } from 'react-native'

export default function Messages () {
	const navigation:any = useNavigation();

	const homePress = () => {
		navigation.navigate("Home");
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
						Messages
					</Text>
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