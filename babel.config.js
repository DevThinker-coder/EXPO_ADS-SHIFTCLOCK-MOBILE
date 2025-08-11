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
            assets: './src/assets',
            components: './src/components',
            hooks: './src/hooks',
            icons: './src/assets/icons',
            svgs: './src/assets/svgs',
            navigation: './src/navigation',
            locales: './src/locales',
            context: './src/context',
            containers: './src/containers',
            layouts: './src/layouts',
            screens: './src/screens',
            styles: './src/styles',
            utils: './src/utils',
            storybook: './storybook',
            types: './src/types',
            api: './src/api',
            logging: './src/logging',
            data: './src/data',
            store: './src/store',
            constants: './src/constants',
          },
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
          root: './src/',
        },
      ],
    ],
  };
};
