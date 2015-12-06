import { render } from 'react-dom';
import { match } from 'react-router';
import { createLocation } from 'history';
import routes from '../shared/routes';
import Router from './routes';

const location = createLocation(document.location.pathname + document.location.search);

match({ routes, location }, (err, redirect, props) => {
  render(Router, document.getElementById('react-app'));
})
