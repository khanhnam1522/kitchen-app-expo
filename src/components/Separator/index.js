import React from 'react';
import { View } from 'react-native';
import { Text } from 'components';
import colors from 'colors';

const Separator = ({ title }) => (
	<View
		style={{
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			alignSelf: 'center',
			marginVertical: 20,
			width: '87%',
		}}
	>
		<View style={{ flex: 1, height: 1, backgroundColor: colors.primary }} />
		<View>
			<Text style={{ width: 50, textAlign: 'center', color: colors.primary }}>
				{title}
			</Text>
		</View>
		<View style={{ flex: 1, height: 1, backgroundColor: colors.primary }} />
	</View>
);

export default Separator;
