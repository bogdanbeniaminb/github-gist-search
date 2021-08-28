const isDevelopment = process.env.NODE_ENV !== 'production';

const presets = [
  '@babel/preset-typescript',
  [
    '@babel/preset-react',
    {
      runtime: 'automatic',
    },
  ],
  [
    '@babel/preset-env',
    {
      modules: false,
      bugfixes: true,
    },
  ],
];

const plugins = [
  ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
  '@babel/plugin-syntax-dynamic-import',
  [
    '@babel/plugin-transform-react-jsx',
    {
      runtime: 'automatic',
    },
  ],
  'lodash',
];

if (isDevelopment) {
  plugins.push(require.resolve('react-refresh/babel'));
  plugins.push('babel-plugin-typescript-to-proptypes');
}

module.exports = { plugins, presets };
