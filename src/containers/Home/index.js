import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../../components/Card/index';

const Home = () => (
	<View style={styles.container}>
		<View style={styles.card}>
			<Card
				type="fridge"
				title="Fridge"
				quantity="12 items"
				exp="3 expiring"
				size={50}
			/>
			<Card
				type="snow"
				title="Freezer"
				quantity="12 items"
				exp="3 expiring"
				size={40}
			/>
			<Card
				type="shop"
				title="Pantry"
				quantity="12 items"
				exp="3 expiring"
				size={40}
			/>
		</View>
	</View>
);

const styles = StyleSheet.create({
	tab: {
		backgroundColor: 'green',
	},
	container: {
		justifyContent: 'center',
		flex: 1,
	},
	card: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Home;
