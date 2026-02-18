const { getDefaultConfig } = require('expo/metro-config');
const { withStorybook } = require('@storybook/react-native/metro/withStorybook');
const path = require('path');

const defaultConfig = getDefaultConfig(__dirname);
const rootDir = path.resolve(__dirname, '../..');

// Watch the root library to detect changes
defaultConfig.watchFolders = [rootDir];

// Resolve fluent-styles package to root directory
defaultConfig.resolver.extraNodeModules = {
  'fluent-styles': rootDir,
};

module.exports = withStorybook(defaultConfig);