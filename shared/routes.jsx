import React from 'react';
import { Route } from 'react-router';
import App from '../frontend/containers/App';
import Home from '../frontend/components/Home';
import Children from '../frontend/components/Children';

export default {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: '/children', component: Children }
  ]
}
