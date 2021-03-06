// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('@expo/metro-config');
const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg')
  },
  resolver: {
    assetExts: [
      ...defaultConfig.resolver.assetExts.filter((ext: any) => ext !== 'svg')
    ],
    sourceExts: [...defaultConfig.resolver.sourceExts, 'svg']
  }
};