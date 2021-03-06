import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import { useFormikContext } from 'formik';
import { Text } from 'components';
import colors from 'colors';
import Icon from 'icons';

const { width } = Dimensions.get('window');

function TextInputForm({ title, name, ...otherProps }) {
	const { setFieldTouched, setFieldValue, errors, touched, values } =
		useFormikContext();
	const invalidInput = errors[name] && touched[name];
	return (
		<View style={{ width: '100%', margin: 10 }}>
			<View style={{ marginBottom: 5 }}>
				<Text style={{ color: colors.primary }}>{title}</Text>
			</View>
			<View
				style={[
					styles.container,
					{ borderColor: invalidInput ? colors.error : colors.primary },
				]}
			>
				<TextInput
					style={styles.textInput}
					onBlur={() => setFieldTouched(name)}
					onChangeText={(text) => setFieldValue(name, text)}
					value={values[name]}
					{...otherProps}
				/>
				<View style={{ alignSelf: 'center' }}>
					<Icon type="checkmark" color={colors.primary} size={24} />
				</View>
			</View>
			{errors[name] && touched[name] && (
				<Text style={styles.errorText}>{errors[name]}</Text>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 10,
		borderRadius: 17,
		borderColor: colors.primary,
		borderWidth: 2,
		justifyContent: 'space-between',
	},
	icon: {
		marginRight: 10,
	},
	textInput: {
		color: colors.primary,
		fontSize: 18,
		fontFamily: 'Roboto',
		width: width * 0.75,
	},
	errorText: {
		color: colors.error,
	},
});

export default TextInputForm;
