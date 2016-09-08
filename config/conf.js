var Jasmine2HtmlReporter = require('C:/Users/Admin/AppData/Roaming/npm/node_modules/protractor-jasmine2-html-reporter');

var today = new Date(),
timeStamp = today.getMonth() + 1 + '-' + today.getDate() + '-' + today.getFullYear() + '-' + today.getHours() + 'h-' + today.getMinutes() + 'm';

var reporter=new Jasmine2HtmlReporter({
	savePath: 'target/screenshots',
	screenshotsFolder: 'images',
	takeScreenshots: false,
	takeScreenshotsOnlyOnFailures: true,
	filePrefix: 'index'
});

//An example configuration file.
exports.config = {
		directConnect: true,

		// Capabilities to be passed to the webdriver instance.
		capabilities: {
			'browserName': 'chrome'
		},

		// Framework to use. Jasmine 2 is recommended.
		framework: 'jasmine2',

		// Spec patterns are relative to the current working directly when
		// protractor is called.
		specs: ['../tests/SmokeTest.js'],



		// Options to be passed to Jasmine.
		jasmineNodeOpts: {
			showColors:true,
			defaultTimeoutInterval: 400000,
			isVerbose: true,
			includeStackTrace: true
		},

		onPrepare: function() {
			jasmine.getEnv().addReporter(reporter);
			browser.driver.manage().window().maximize();
			browser.get('https://www.screener.in');
			browser.waitForAngular();
		}
};
