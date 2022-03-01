const {
  testUrl,
  testsFolder,
  resembleConfig,
  chromeArgs,
  defaultResolution,
  includedSteps,
  deviceConfig,
} = require('./config');

exports.config = {
  tests: testsFolder,
  output: './../output',
  grep: '(?=.*)^(?!.*@remote)',
  helpers: {
    WebDriver: {
      url: testUrl,
      browser: deviceConfig.browser || 'chrome',
      waitForTimeout: 10000,
      host: '127.0.0.1',
      port: 4444,
      smartWait: 10000,
      restart: true,
      windowSize: '1280x1024',
      timeouts: {
        script: 60000,
        'page load': 10000,
      },
      desiredCapabilities: {
        chromeOptions: {
          args: [...chromeArgs],
        },
      },
    },
    ResembleHelper: {
      ...resembleConfig,
    },
    AssertWrapper: {
      require: 'codeceptjs-assert',
    },
  },
  include: {
    ...includedSteps,
  },
  bootstrap: null,
  // restart: false,
  rerun: {
    minSuccess: 1,
    maxReruns: 1,
  },
  plugins: {
    allure: {
      enabled: true,
      outputDir: './../output/allure/allure-results',
    },
    retryFailedStep: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone'],
    },
  },
};
