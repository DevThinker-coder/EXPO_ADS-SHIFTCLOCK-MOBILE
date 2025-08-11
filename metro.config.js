const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

const withStorybook = require("@storybook/react-native/metro/withStorybook");

// Configure SVG transformer
defaultConfig.transformer.babelTransformerPath = require.resolve("react-native-svg-transformer");
defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts.filter((ext) => ext !== "svg");
defaultConfig.resolver.sourceExts = [...defaultConfig.resolver.sourceExts, "svg"];

module.exports = withStorybook(defaultConfig, {
  enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true",
  onDisabledRemoveStorybook: true,
});
