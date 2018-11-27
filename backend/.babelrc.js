const PROD = process.env.NODE_ENV === 'production';

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: PROD ? '8' : 'current',
        },
      },
    ],
  ],
};
