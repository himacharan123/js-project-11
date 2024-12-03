// babel.config.cjs
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: 'defaults',
        modules: 'auto', // this ensures Babel works with ES Modules
      },
    ],
  ],
};
