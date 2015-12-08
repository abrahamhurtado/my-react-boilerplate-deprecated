import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import { createLocation } from 'history';
import routes from '../../shared/routes';
import html from '../../shared/html';

export default () => (req, res) => {

  const location = createLocation(req.url);

  match({ routes, location }, (error, redirect, props) => {

    if (props) {

      const page = html(renderToString(
        <RoutingContext {...props} />
      ));

      res.status(200).send(page);

    } else if (error) {
      res.status(500).send(error.message);
    } else if (redirect) {
      res.status(302).send(redirect.pathname + redirect.search);
    } else {
      res.status(404).send('Not found');
    }

  })

}
