/* @flow */
import React from 'react';
import styles from './Project.scss';

export default ({children, theme}) =>
  <li className={`${styles.project} ${theme}`} itemScope itemType="CreativeWork">
    <div className={styles.projectInner}>
      {children}
    </div>
  </li>;
