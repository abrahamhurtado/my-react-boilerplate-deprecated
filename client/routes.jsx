import React from 'react';
import { Router } from 'react-router';
import { createHistory } from 'history';
import routes from '../shared/routes';

export default (
  <Router
    history={ createHistory() }
    routes={ routes }
  />
);
