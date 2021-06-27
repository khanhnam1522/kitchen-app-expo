import React from 'react';
import { View } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

let listener = null;

class Connection extends React.Component {
	componentDidMount() {
		listener = NetInfo.addEventListener(this.updateConnection);
	}

	componentWillUnmount() {
		listener();
	}

	updateConnection = ({ type }) => {
		const { network } = this.props;
		if (!network) return;
		network.set({ type });
	};

	render() {
		const { children } = this.props;
		return <View style={{ flex: 1 }}>{children}</View>;
	}
}

export default Connection;
