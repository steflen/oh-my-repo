const CopyPlugin = require('copy-webpack-plugin');

module.exports = async ({ config /*, mode*/ }) => {
  // storybook source Addon
  config.module.rules.push({
    test: /\.stories\.ts?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: {
          parser: 'typescript',
          uglyCommentsRegex: [/^eslint-.*/, /^global.*/],
          injectDecorator: true,
          prettierConfig: {
            printWidth: 100,
            singleQuote: false
          }
        }
      }
    ],
    enforce: 'pre'
  });

  let scssLoader = config.module.rules.find(i => !!'a.scss'.match(i.test));
  //console.dir(scssLoader,{depth:null});
  scssLoader.use = [
    'to-string-loader',
    {
      loader: 'css-loader',
      options: {
        sourceMap: true
      }
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true
      }
    }
  ];
  let htmlLoader = config.module.rules.find(i => !!'a.html'.match(i.test));
  htmlLoader.loader = 'html-loader';

  // config.plugins.push(
  //   new CopyPlugin([
  //     {
  //       from: 'projects/some-library/src/assets/**/*',
  //       to: 'project',
  //       force: true
  //     }
  //   ])
  // );

  return config;
};
