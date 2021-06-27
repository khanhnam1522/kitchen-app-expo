// This code runs at startup, and works around the RN's whatwg-fetch.js Uncaught Error: unsupported // BodyInit type error so that the React Native Debuggers network analyzer can be enabled

const setupNetworkAnalyzer = () => {
	global.XMLHttpRequest = global.originalXMLHttpRequest
		? global.originalXMLHttpRequest
		: global.XMLHttpRequest;
	global.FormData = global.originalFormData
		? global.originalFormData
		: global.FormData;

	/* eslint no-unused-expressions: 'off' */
	fetch; // Ensure to get the lazy property
	if (window.__FETCH_SUPPORT__) {
		// it's RNDebugger only to have
		window.__FETCH_SUPPORT__.blob = false;
	} else {
		/*
		 * Set __FETCH_SUPPORT__ to false is just work for `fetch`.
		 * If you're using another way you can just use the native Blob and remove the `else` statement
		 */
		global.Blob = global.originalBlob ? global.originalBlob : global.Blob;
		global.FileReader = global.originalFileReader
			? global.originalFileReader
			: global.FileReader;
	}
	console.log('This environment is setup to debug using RNDebugger');
};

export default setupNetworkAnalyzer;
