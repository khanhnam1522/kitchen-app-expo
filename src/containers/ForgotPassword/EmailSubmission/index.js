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

const emailSubmissionSchema = yup.object().shape({
	email: yup
		.string()
		.email('Please enter valid email')
		.required('Email Address is Required'),
});

const EmailSubmission = ({ sendVerificationCode, auth, navigation }) => (
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
							validationSchema={emailSubmissionSchema}
							initialValues={{ email: '' }}
							onSubmit={async (data) => {
								await sendVerificationCode(data);
							}}
						>
							<TextInputForm
								title="Email"
								name="email"
								keyboardType="email-address"
							/>
							<Text style={styles.errorText}>
								{auth.errorMessage?.submitEmail}
							</Text>
							<View style={{ marginTop: 30 }}>
								<SubmitFormButton title="Submit Email" />
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
	},
});

const mapState = ({ auth }) => ({ auth });

const mapDispatch = ({ auth }) => ({
	sendVerificationCode: (values) => auth.sendVerificationCode(values),
});

export default connect(mapState, mapDispatch)(EmailSubmission);
