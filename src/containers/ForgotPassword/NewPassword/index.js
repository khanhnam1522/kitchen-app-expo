import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	StatusBar,
} from 'react-native';
import {
	Text,
	FormikForm,
	TextInputForm,
	BackButton,
	SubmitFormButton,
} from 'components';
import { connect } from 'react-redux';
import * as yup from 'yup';
import colors from 'colors';

const newPasswordValidationSchema = yup.object().shape({
	password: yup
		.string()
		.min(8, ({ min }) => `Password must be at least ${min} characters`)
		.required('Password is required'),
	reEnterPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const NewPassword = ({ changePassword, auth, navigation, route }) => {
	const { email } = route.params;
	return (
		<>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFE1' }}>
				<ScrollView style={{ flex: 1 }}>
					<View style={styles.iconContainer}>
						<BackButton onPress={() => navigation.pop()} />
					</View>
					<View style={styles.container}>
						<View style={{ alignItems: 'center' }}>
							<FormikForm
								validationSchema={newPasswordValidationSchema}
								initialValues={{ password: '' }}
								onSubmit={async ({ password }) => {
									await changePassword({ email, password });
								}}
							>
								<TextInputForm
									title="New Password"
									name="password"
									secureTextEntry
								/>
								<TextInputForm
									title="Re-enter New Password"
									name="reEnterPassword"
									secureTextEntry
								/>
								<Text style={styles.errorText}>
									{auth.errorMessage?.changePassword}
								</Text>
								<View style={{ marginTop: 30 }}>
									<SubmitFormButton title="Change Password" />
								</View>
							</FormikForm>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '90%',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
	},
	iconContainer: {
		width: '90%',
		justifyContent: 'center',
		flex: 1,
		alignSelf: 'center',
		marginVertical: 30,
	},
	errorText: {
		color: colors.error,
	},
});

const mapState = ({ auth }) => ({ auth });

const mapDispatch = ({ auth }) => ({
	changePassword: (values) => auth.changePassword(values),
});

export default connect(mapState, mapDispatch)(NewPassword);
