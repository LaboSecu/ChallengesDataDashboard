module.exports = {
	'env': {
		'browser': true,
		'es6': true,
		'node': true
	},
	'extends': 'eslint:recommended',
    "parser": "babel-eslint",
    'parserOptions': {
		'ecmaVersion': 2018,
        'sourceType': 'module',
        'allowImportExportEverywhere': false,
        'codeFrame': true
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		]
	}
}