import createRematchPersist, { getPersistor as gP } from '@rematch/persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorage } from 'react-native'; // Using this for now, not sure why @react-native-async-storage/async-storage is not working
import { PersistGate as PG } from 'redux-persist/lib/integration/react';

export default createRematchPersist({
	key: 'kitchenapp',
	storage: AsyncStorage,
	version: 10,
	whitelist: ['lastPage', 'profile'],
});

export const getPersistor = gP;
export const PersistGate = PG;
