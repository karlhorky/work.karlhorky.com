/* @flow */
import React from 'react';
import LazyLoad from 'react-lazyload';
import Project from '../Project';
import styles from './ProjectTimeless.scss';
import image from './timeless.jpg';

export default () =>
  <Project theme={styles.projectTimeless}>
    <LazyLoad>
      <img className="media-object" src={image} alt="Guccitimeless.com" />
    </LazyLoad>
    <a className="media-title" href="http://www.guccitimeless.com/" itemProp="url">Guccitimeless.com</a>
    <div className="media-body">
      Agency:
      <span itemProp="sourceOrganization" itemScope itemType="Organization">
        <span itemProp="name">Wollzelle</span>
      </span>
    </div>
    <div className="media-body">Development</div>
  </Project>;
