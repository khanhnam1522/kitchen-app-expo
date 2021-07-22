import React from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	View,
	Text,
	Dimensions,
} from 'react-native';
import colors from 'colors';
import Icon from 'icons';

export default function DefaultCard(props) {
	const { type, title, quantity, exp, size, customIcon } = props;
	return (
		<TouchableOpacity style={styles.container}>
			<View style={styles.content} {...props}>
				<View style={styles.icon}>
					{customIcon || (
						<Icon color={colors.primary} type={type} size={size} />
					)}
				</View>

				<View>
					<Text
						style={{
							color: colors.primary,
							fontSize: 18,
							fontWeight: 'bold',
						}}
					>
						{title}
					</Text>
					<Text style={{ fontSize: 16, marginVertical: 5 }}>{quantity}</Text>
					<Text style={{ color: colors.error, fontSize: 16 }}>{exp}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		borderWidth: 2,
		borderColor: colors.primary,
		elevation: 3,
		shadowOffset: { width: 1, height: 1 },
		shadowColor: colors.primary,
		width: width * 0.76,
		height: 98,
		justifyContent: 'center',
		borderRadius: 10,
		margin: 10,
	},
	icon: {
		color: colors.primary,
		justifyContent: 'center',
		marginRight: 30,
		marginLeft: 20,
		width: 50,
		alignItems: 'center',
	},
	content: {
		flexDirection: 'row',
	},
});
