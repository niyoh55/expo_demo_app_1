// Learn more https://docs.expo.io/guides/customizing-metro

const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

/** @type {import('expo/metro-config').MetroConfig} */
// eslint-disable-next-line no-undef
const config = getDefaultConfig(__dirname);

module.exports = wrapWithReanimatedMetroConfig(withNativeWind(config, { input: './global.css' }));
