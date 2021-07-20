import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

const DefaultText = (props) => {
	const { children } = props;
	return (
		<Text style={styles.text} {...props}>
			{children}
		</Text>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 16,
		fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto',
	},
});

export default DefaultText;
