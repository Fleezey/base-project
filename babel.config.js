module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);

  return {
    presets: [
      '@babel/preset-env',
      ['@babel/preset-react', { development: !api.env('production'), runtime: 'automatic' }],
    ],
    plugins: [
      ["@babel/plugin-proposal-decorators", { "decoratorsBeforeExport": true }],
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-syntax-dynamic-import",
      (!api.env('production') && 'react-refresh/babel'),
    ].filter(plugin => plugin),
  };
};
