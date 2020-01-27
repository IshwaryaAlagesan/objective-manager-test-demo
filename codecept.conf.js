const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://dev-8.objectivemanager.com',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {
    reporterOptions: {
        reportDir: "output"
    }
  },
  name: 'objective-manager-demo',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}