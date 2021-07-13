import React from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import { Text } from 'components';

const Settings = ({ logout }) => (
	<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<Text>This is Settings Screen</Text>
		<Button onPress={() => logout()} title="Log Out" />
	</View>
);

const mapDispatch = ({ auth }) => ({
	logout: () => auth.logout(),
});

export default connect(null, mapDispatch)(Settings);
