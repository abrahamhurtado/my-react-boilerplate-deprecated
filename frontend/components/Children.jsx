import React from 'react';
import styles from './Children.css';

export default class Children extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return <h2 className={ styles.children }>Children route :)</h2>
  }
}
