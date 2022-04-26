const jestPreset = require("@testing-library/react-native/jest-preset")

module.exports = {
  preset: 'jest-expo',
  testEnvironment: 'jsdom',
  setupFiles: [...jestPreset.setupFiles],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|@sentry/.*|native-base|react-native-svg)',
  ],
  setupFilesAfterEnv: ['./jest.setup.js', './src/setupTests.ts', '@testing-library/jest-native/extend-expect']
}
