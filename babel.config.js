module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      develop: {
        plugins: ['react-native-paper/babel'],
      },
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};