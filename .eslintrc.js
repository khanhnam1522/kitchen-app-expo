module.exports = {
	env: {
		es6: true,
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
	parser: '@babel/eslint-parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'react/prop-types': 0,
		'react/jsx-props-no-spreading': 'off',
		'import/no-unresolved': 'off',
		'no-use-before-define': 'off',
		'no-console': 'off',
		'no-underscore-dangle': 'off',
	},
};
