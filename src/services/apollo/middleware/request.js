import { createUploadLink } from 'apollo-upload-client';
import { API_URL } from '@env';

const getServerURL = () => {
	const SERVER_URL = API_URL;
	console.log('SERVER_URL: =', SERVER_URL);
	return SERVER_URL;
};

/* eslint new-cap: ["error", { "newIsCap": false }] */
const httpMiddleware = new createUploadLink({
	uri: getServerURL(),
});

export default httpMiddleware;
