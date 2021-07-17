const path = require('path');

const title = 'Template Project';

module.exports = {
	outputDir: path.resolve(__dirname, 'docs'),
	pages: {
		index: {
			title,
			entry: 'src/main.js',
		}, 
		test: {
			entry: 'src/main.js',
			title: `[Test Mode] ${title}`,
			mode: 'test',
		},
	},
	publicPath: "./",
};