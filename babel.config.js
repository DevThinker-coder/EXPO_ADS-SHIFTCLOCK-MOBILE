module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["babel-plugin-react-docgen-typescript", { exclude: "node_modules" }],
      [
        'babel-plugin-module-resolver',
        {
          alias: {
            images: './assets/images/',
            svgs: './assets/svgs/',
            assets: './assets/*',
            components: './src/components/*',
            hooks: './src/hooks/*',
            containers: './src/containers/*',
            styles: './src/styles/',
            utils: './src/utils/*',
            storybook: './storybook/*',
            types: './src/types/*',
            data: './src/data/*',
            store: './src/store/*',
            constants: './src/constants/*',
          },
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
          root: './src/',
        },
      ],
    ],
  };
};
