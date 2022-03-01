require('dotenv').config({path: './.env.test'});

const {getArg} = require('./helpers');
const setEnv = getArg(process.argv, 'env');
const isHeadless = getArg(process.argv, 'headless') === 'true';
const envUrl = setEnv ? setEnv : 'http://localhost:3000';

module.exports = {
  testsFolder: './../tests/*_test.js',
  defaultResolution: '1200x1080',
  defaultTimeout: 60,
  testUrl: envUrl,
  env: process.env.NODE_ENV,
  chromeArgs: [
    '--mute-audio',
    '--disable-gpu',
    '--no-sandbox',
    '--disable-dev-shm-usage',
    ...(isHeadless ? ['--headless'] : []),
  ],
  ieOptions: {
    'ie.browserCommandLineSwitches': '-private',
    'ie.usePerProcessProxy': true,
    'ie.ensureCleanSession': true,
  },
  resembleConfig: {
    require: 'codeceptjs-resemblehelper',
    screenshotFolder: './output',
    baseFolder: './../screenshots/base/',
    diffFolder: './../screenshots/diff/',
  },
  includedSteps: {
    I: './steps_file.js',
    homePage: './../pages/homePage.js',
  },
  desiredCapabilities: {
    project: 'fe service template',
    chromeOptions: module.exports.chromeArgs,
    ieOptions: {
      ...module.exports.ieOptions,
    },
    deviceOrientation: 'portrait',
    unexpectedAlertBehaviour: 'dismiss',
    'browserstack.appium_version': '1.9.1',
    'browserstack.debug': 'true',
    'browserstack.local': 'true',
    'browserstack.console': 'errors',
  },
  deviceConfig: ({browserName, ...params}) => {
    return {
      browser: browserName || 'chrome',
      desiredCapabilities: {
        ...params,
      },
    };
  },
};
