/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import { merge } from 'webpack-merge';
import common from './webpack.common.js';

export default merge(common, {
  mode: 'production',
  devtool: 'source-map',
});
