import React from 'react';
import { StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native';
import { Text } from 'components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Lookup from '../../assets/icons/custom/lookup';
import colors from '../../styles/colors';

const Header = (props) => {
	const { top } = useSafeAreaInsets();
	const { title } = props;
	return (
		<View style={[styles.container, { marginTop: top + 10 }]}>
			<Text style={styles.title}>{title}</Text>
			<TouchableOpacity style={styles.icon}>
				<Lookup />
			</TouchableOpacity>
		</View>
	);
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		borderBottomWidth: 1,
		borderBottomColor: colors.primary,
		height: 50,
		width: width * 0.75,
		alignSelf: 'center',
	},
	icon: {
		position: 'absolute',
		right: -10,
		width: 50,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		textAlign: 'center',
		color: colors.primary,
		textAlignVertical: 'center',
		fontWeight: '700',
	},
});

export default Header;
