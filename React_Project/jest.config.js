module.exports = {
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testResultsProcessor: "jest-junit",
  reporters: ["default", "jest-junit"],
  setupFiles: ["<rootDir>/tests/envSetup.js"],
  setupFilesAfterEnv: ["<rootDir>/tests/setup.js"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|pdf)$":
      "<rootDir>/__mocks__/fileMock.js",
    ".+\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.svg": "<rootDir>/__mocks__/svgrMock.js",
    "^react($|/.+)": "<rootDir>/node_modules/react$1",
    "^react-dom($|/.+)": "<rootDir>/node_modules/react-dom$1",
    "^styled-components($|/.+)": "<rootDir>/node_modules/styled-components$1",
    "^styled-system($|/.+)": "<rootDir>/node_modules/styled-system$1",
    "^react-router-dom($|/.+)": "<rootDir>/node_modules/react-router-dom$1",
    "^react-redux($|/.+)": "<rootDir>/node_modules/react-redux$1",
    "^redux($|/.+)": "<rootDir>/node_modules/redux$1",
    "^react-intl($|/.+)": "<rootDir>/node_modules/react-intl$1",
    "^rebass($|/.+)": "<rootDir>/node_modules/rebass$1",
  },
  collectCoverageFrom: [
    "src/**",
    "!src/**/*.snap",
    "!src/*",
    "!<rootDir>/e2e/**",
    "!<rootDir>/node_modules/**",
  ],
  modulePathIgnorePatterns: [],
  coverageThreshold: {
    global: {},
  },
};
