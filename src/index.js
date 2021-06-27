import React from 'react';
import { ApolloProvider } from '@apollo/client';
import store from 'store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Connection } from 'components';
import { Provider } from 'react-redux';
import client from 'apolloClient';
import Routes from './routes';
import { getPersistor, PersistGate } from './plugins/persist';

export default function App() {
	return (
		<SafeAreaProvider>
			<ApolloProvider client={client}>
				<PersistGate persistor={getPersistor()}>
					<Provider store={store}>
						<Connection>
							<Routes />
						</Connection>
					</Provider>
				</PersistGate>
			</ApolloProvider>
		</SafeAreaProvider>
	);
}
