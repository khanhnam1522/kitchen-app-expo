import React, { useState } from 'react';
import colors from 'colors';
import {
	StyleSheet,
	TouchableOpacity,
	View,
	Dimensions,
	ScrollView,
} from 'react-native';
import { Text, Card, Header } from 'components';
import * as Icon from 'customIcons';

const StorageScreen = () => (
	<ScrollView style={styles.container}>
		<View style={styles.card}>
			<Card
				customIcon={<Icon.Fridge />}
				title="Fridge"
				quantity="12 items"
				exp="3 expiring"
			/>
			<Card
				customIcon={<Icon.Snow />}
				title="Freezer"
				quantity="12 items"
				exp="3 expiring"
			/>
			<Card
				customIcon={<Icon.Pantry />}
				title="Pantry"
				quantity="12 items"
				exp="3 expiring"
			/>
			<Card
				customIcon={<Icon.Menu />}
				title="All Items"
				quantity="12 items"
				exp="3 expiring"
			/>
		</View>
	</ScrollView>
);

const CategoryScreen = () => (
	<ScrollView style={styles.container}>
		<View style={styles.card}>
			<Card
				customIcon={<Icon.Meat />}
				title="Protein"
				quantity="12 items"
				exp="3 expiring"
			/>
			<Card
				customIcon={<Icon.Veggie />}
				title="Vegetable"
				quantity="12 items"
				exp="3 expiring"
			/>
			<Card
				customIcon={<Icon.Cheese />}
				title="Dairy"
				quantity="12 items"
				exp="3 expiring"
			/>
			<Card
				customIcon={<Icon.Starch />}
				title="All Items"
				quantity="12 items"
				exp="3 expiring"
			/>
		</View>
	</ScrollView>
);

const Home = () => {
	const [mode, setMode] = useState('storage');
	return (
		<View>
			<Header title={`Cola's Fridge`} />
			<View style={styles.tab}>
				<TouchableOpacity
					style={[
						styles.left,
						{ backgroundColor: mode === 'storage' ? colors.primary : 'white' },
					]}
					onPress={() => setMode('storage')}
				>
					<Text style={mode === 'storage' ? styles.click : styles.text}>
						Storages
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[
						styles.right,
						{ backgroundColor: mode !== 'storage' ? colors.primary : 'white' },
					]}
					onPress={() => setMode('category')}
				>
					<Text style={mode === 'category' ? styles.click : styles.text}>
						Categories
					</Text>
				</TouchableOpacity>
			</View>

			{mode === 'storage' ? <StorageScreen /> : <CategoryScreen />}
		</View>
	);
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
	tab: {
		flexDirection: 'row',
		marginTop: 35,
		alignSelf: 'center',
		width: width * 0.76,
		height: 36,
	},
	left: {
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
		borderColor: colors.primary,
		borderWidth: 2,
		borderRightWidth: 0,
		width: width * 0.38,
		alignItems: 'center',
		justifyContent: 'center',
	},
	right: {
		borderTopRightRadius: 10,
		borderBottomRightRadius: 10,
		borderColor: colors.primary,
		borderWidth: 2,
		width: width * 0.38,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: colors.primary,
		fontWeight: 'bold',
		fontSize: 18,
	},
	container: {
		marginTop: 30,
	},
	card: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	click: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 18,
	},
	btnClick: {
		backgroundColor: colors.primary,
	},
});

export default Home;
