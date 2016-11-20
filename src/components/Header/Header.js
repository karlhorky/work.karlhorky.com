/* @flow */
import React from 'react';
import styles from './Header.css';

export default () =>
  <section className={styles.className} itemScope itemType="Person">
    <div className="container">
      <div className="soapbox-content">
        <h1 className="soapbox-title" itemProp="name">Karl Horky</h1>
        <div className="soapbox-subtitle" itemProp="jobTitle">Front-end Engineer</div>
        <div className="soapbox-lead" itemProp="quote">
          I design and develop <a href="#work" data-scroll>compelling experiences</a> to improve quality of life through the web.
        </div>
        <div className="soapbox-footer">
          <span className="soapbox-body" itemProp="address" itemScope itemType="Address">
            <span itemProp="addressLocality">Vienna</span>,
            <span itemProp="addressCountry">Austria</span>
          </span>
          <span className="soapbox-list">
            <a className="soapbox-body" href="/karl-horky.pdf" download>CV</a>
            <a className="soapbox-body" href="https://github.com/karlhorky" itemProp="url">GitHub</a>
            <a className="soapbox-body" href="http://www.linkedin.com/in/karlhorky" itemProp="url">LinkedIn</a>
            <a className="soapbox-body" href="https://twitter.com/karlhorky" itemProp="url">Twitter</a>
          </span>
        </div>
      </div>
    </div>
  </section>;
