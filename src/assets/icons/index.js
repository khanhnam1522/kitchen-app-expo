// @flow
import React from 'react';
import {
	Ionicons,
	FontAwesome,
	MaterialIcons,
	MaterialCommunityIcons,
	Entypo,
	Octicons,
	AntDesign,
} from '@expo/vector-icons';
import iconMap from './icons.json';

const iconTypeMap = {
	fa: FontAwesome,
	ion: Ionicons,
	md: MaterialIcons,
	mc: MaterialCommunityIcons,
	en: Entypo,
	oc: Octicons,
	ad: AntDesign,
};

const Icon = (props) => {
	const { type, color, style, size } = props;
	// capture iconType
	const iconFullName = iconMap[type];
	// if no name, return
	if (!iconFullName) {
		throw new Error(`Invalid icon name: ${type}`);
	}
	// break icon name into prefix ('fa') and iconName ('snowflake-o')
	const [prefix, iconName] = iconFullName.split(/-(.+)/);
	// capture Icon library component
	const Comp = iconTypeMap[prefix];
	// add Icon props with defaults
	const iconProps = {
		name: iconName,
		color: color || 'black',
		backgroundColor: 'transparent',
		allowFontScaling: false,
		style: {
			...(style || {}),
			fontSize: size || 14,
		},
		...props,
	};
	return <Comp {...iconProps} />;
};

export default Icon;
