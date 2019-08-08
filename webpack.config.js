const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
        extractComments: true,
        terserOptions: {
          compress: {},
          mangle: true,
          module: true,
          toplevel: true,
          keep_classnames: false,
          keep_fnames: false,
        }
      }),
    ],
  }
};