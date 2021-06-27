import * as SecureStore from 'expo-secure-store';

export const getItem = async (key) => {
	try {
		return await SecureStore.getItemAsync(key);
	} catch (error) {
		console.log('Error Getting Item from Secure Store:', error);
		return null;
	}
};

export const setItem = async (key, value) => {
	try {
		const saveValue = typeof value === 'string' ? value : JSON.stringify(value);
		await SecureStore.setItemAsync(key, saveValue);
	} catch (error) {
		console.log('Error Setting Item from Secure Store:', error);
	}
};

export const deleteItem = async (key) => {
	try {
		await SecureStore.deleteItemAsync(key);
	} catch (error) {
		console.log('Error Deleting Item from Secure Store:', error);
	}
};
