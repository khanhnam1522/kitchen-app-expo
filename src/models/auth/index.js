import R from 'ramda';
import { setItem, deleteItem } from 'secureStore';
import {
	LOGIN,
	REGISTER,
	SEND_VERIFICATION_CODE,
	VERIFY_CODE,
	CHANGE_PASSWORD,
} from 'apolloMutations';
import client from 'apolloClient';
import * as navigation from 'navigation';

const defaultState = {
	accessToken: null,
	errorMessage: {
		login: '',
		register: '',
		submitEmail: '',
		verifyCode: '',
		changePassword: '',
	},
};

export default {
	state: defaultState,
	reducers: {
		setToken(state, payload) {
			return { accessToken: payload };
		},
		setErrorMessage(state, payload) {
			return { errorMessage: payload };
		},
		reset() {
			return defaultState;
		},
	},
	effects: () => ({
		async login({ email, password }) {
			const response = await client.mutate({
				mutation: LOGIN,
				variables: {
					data: {
						email,
						password,
					},
				},
			});
			const accessToken = R.path(['data', 'login', 'accessToken'])(response);
			console.log('Login: ', accessToken);
			if (accessToken) {
				this.setToken(accessToken);
				await setItem('accessToken', accessToken);
				navigation.reset('App');
			} else {
				const errorMessage = R.path(['data', 'login', 'errors', 'message'])(
					response
				);
				if (errorMessage) {
					this.setErrorMessage({ login: errorMessage });
				} else {
					this.setErrorMessage({
						login: 'Something went wrong. Please try again later',
					});
				}
			}
		},
		async logout() {
			this.setToken(null);
			await deleteItem('accessToken');
			navigation.reset('Login');
		},
		async register({ email, password, username }) {
			const response = await client.mutate({
				mutation: REGISTER,
				variables: {
					data: {
						email,
						password,
						username,
					},
				},
			});
			const accessToken = R.path(['data', 'register', 'accessToken'])(response);
			console.log('Login: ', accessToken);
			if (accessToken) {
				this.setToken(accessToken);
				await setItem('accessToken', accessToken);
				this.setErrorMessage({ register: '' });
				navigation.reset('App');
			} else {
				const errorMessage = R.path(['data', 'register', 'errors', 'message'])(
					response
				);
				if (errorMessage) {
					this.setErrorMessage({ register: errorMessage });
				} else {
					this.setErrorMessage({
						register: 'Something went wrong. Please try again later',
					});
				}
			}
		},
		async sendVerificationCode({ email }) {
			if (!email) {
				this.setErrorMessage({
					submitEmail: 'Something went wrong. Please try again later',
				});
				console.log(
					'Failed to get email from navigation, check resend verification'
				);
			}
			const response = await client.mutate({
				mutation: SEND_VERIFICATION_CODE,
				variables: {
					data: {
						email,
					},
				},
			});
			const sendEmailSuccess = R.path(['data', 'sendVerificationCode'])(
				response
			);
			if (sendEmailSuccess) {
				console.log('Email sent to ', email);
				this.setErrorMessage({
					submitEmail: '',
				});
				navigation.navigate('Verification', { email });
			} else {
				this.setErrorMessage({
					submitEmail: 'Something went wrong. Please try again later',
				});
			}
		},
		async verifyCode({ verificationCode, email }) {
			if (!email) {
				this.setErrorMessage({
					submitEmail: 'Something went wrong. Please try again later',
				});
				console.log('Failed to get email from navigation');
			}
			if (Number.isNaN(verificationCode)) {
				this.setErrorMessage({ verifyCode: 'Invalid verification code' });
				return;
			}
			const response = await client.mutate({
				mutation: VERIFY_CODE,
				variables: {
					data: {
						verificationCode,
						email,
					},
				},
			});
			const verifySuccess = R.path(['data', 'verifyCode', 'validateSucess'])(
				response
			);
			if (verifySuccess) {
				console.log('Verify code successfully');
				this.setErrorMessage({ verifyCode: '' });
				navigation.navigate('NewPassword', { email });
			} else {
				const errorMessage = R.path([
					'data',
					'verifyCode',
					'errors',
					'message',
				])(response);
				if (errorMessage) {
					this.setErrorMessage({ verifyCode: errorMessage });
				} else {
					this.setErrorMessage({
						verifyCode: 'Something went wrong. Please try again later',
					});
				}
			}
		},
		async changePassword({ email, password }) {
			if (!email) {
				this.setErrorMessage({
					changePassword: 'Something went wrong. Please try again later',
				});
				console.log('Failed to get email from navigation');
			}
			const response = await client.mutate({
				mutation: CHANGE_PASSWORD,
				variables: {
					data: {
						email,
						password,
					},
				},
			});
			const changePasswordSuccess = R.path([
				'data',
				'changePassword',
				'changePasswordSuccess',
			])(response);
			if (changePasswordSuccess) {
				console.log('Change password successfully');
				this.setErrorMessage({ changePassword: '' });
				await this.login({ email, password });
			} else {
				this.setErrorMessage({
					changePassword: 'Something went wrong. Please try again later',
				});
			}
		},
	}),
};
