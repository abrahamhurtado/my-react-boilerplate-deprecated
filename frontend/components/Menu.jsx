import React from 'react';
import { Link } from 'react-router';
import styles from './Menu.css';

export default class HelloWorld extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div>
        <h1>Hello, world!</h1>
        <ul
          className={ styles.menu }
        >
          <li>
            <Link to="/">
              Go to home
            </Link>
          </li>
          <li>
            <Link to="/children">
              Go to children route
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
