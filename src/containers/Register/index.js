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
import * as yup from 'yup';
import colors from 'colors';
import { connect } from 'react-redux';

const loginValidationSchema = yup.object().shape({
	email: yup
		.string()
		.email('Please enter valid email')
		.required('Email Address is Required'),
	password: yup
		.string()
		.min(8, ({ min }) => `Password must be at least ${min} characters`)
		.required('Password is required'),
	reEnterPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const Register = ({ auth, register, navigation }) => (
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
							validationSchema={loginValidationSchema}
							initialValues={{ email: '', password: '' }}
							onSubmit={async (data) => {
								await register(data);
							}}
						>
							<TextInputForm
								title="Email"
								name="email"
								keyboardType="email-address"
							/>
							<TextInputForm title="Username" name="username" />
							<TextInputForm title="Password" name="password" secureTextEntry />
							<TextInputForm
								title="Re-enter Password"
								name="reEnterPassword"
								secureTextEntry
							/>
							<Text style={styles.errorText}>
								{auth.errorMessage?.register}
							</Text>
							<View style={{ marginTop: 30 }}>
								<SubmitFormButton title="Register" />
							</View>
						</FormikForm>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	</>
);

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
		marginTop: 30,
	},
});

const mapState = ({ auth }) => ({ auth });

const mapDispatch = ({ auth }) => ({
	register: (values) => auth.register(values),
});

export default connect(mapState, mapDispatch)(Register);
