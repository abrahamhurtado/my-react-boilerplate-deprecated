import express from 'express';

// middlewares
import reactRouterMiddleware from './server/reactRouterMiddleware';

const app = express();

const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  const webpack = require('webpack');
  const config = require('./webpack.config.development.babel');
  const compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));

  console.log('dev mode with hot reload');
}

app.use('/static', express.static('./frontend/build'));

app.use(reactRouterMiddleware());

app.listen(3000, () => console.log('La app corre en el puerto 3000'));
