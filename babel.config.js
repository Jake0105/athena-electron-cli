module.exports = api => {
  api.cache(true);
  const presets = [
    '@babel/preset-typescript'
  ];
  const plugins = [
    '@babel/plugin-proposal-class-properties'
  ];

  return {
    presets,
    plugins
  }
}