import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import colors from 'colors';
import Icon from 'icons';

export default function DefaultCard(props) {
	const { type, title, quantity, exp, size } = props;
	return (
		<TouchableOpacity style={styles.container}>
			<View style={styles.content} {...props}>
				<Icon style={styles.icon} type={type} size={size} />
				<View>
					<Text
						style={{
							color: colors.primary,
							fontSize: 20,
							fontWeight: 'bold',
						}}
					>
						{title}
					</Text>
					<Text style={{ fontSize: 18 }}>{quantity}</Text>
					<Text style={{ color: colors.error, fontSize: 18 }}>{exp}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		borderWidth: 2,
		borderColor: colors.primary,
		elevation: 3,
		shadowOffset: { width: 1, height: 1 },
		shadowColor: colors.primary,
		width: 306,
		height: 98,
		justifyContent: 'center',
		borderRadius: 10,
		margin: 10,
	},
	icon: {
		color: colors.primary,
		justifyContent: 'center',
		marginRight: 50,
		marginLeft: 20,
	},
	content: {
		flexDirection: 'row',
	},
});
