module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@app': './src/app',
            '@store': './src/store',
            '@db': './src/db',
            '@services': './src/services',
            '@utils': './src/utils',
            '@components': './src/components'
          }
        }
      ]
    ]
  };
};
