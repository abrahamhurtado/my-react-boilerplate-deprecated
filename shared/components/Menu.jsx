import React from 'react';
import { Link } from 'react-router';
import styles from './Menu.css';

export default class HelloWorld extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div
        className={ styles.header }
      >
        <h1>My React Boilerplate</h1>
        <ul
          className={ styles.menu }
        >
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/children">
              Children
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
