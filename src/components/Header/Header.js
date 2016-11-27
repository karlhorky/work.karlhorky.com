/* @flow */
import React from 'react';
import styles from './Header.scss';

export default () =>
  <section className={styles.soapbox} itemScope itemType="Person">
    <div className={styles.soapboxInner}>
      <div className={styles.soapboxContent}>
        <h1 className={styles.soapboxTitle} itemProp="name">Karl Horky</h1>
        <div className={styles.soapboxSubtitle} itemProp="jobTitle">Front-end Engineer</div>
        <div className={styles.soapboxLead} itemProp="quote">
          I design and develop <a href="#work" data-scroll>compelling experiences</a> to improve quality of life through the web.
        </div>
        <div className={styles.soapboxFooter}>
          <span className={styles.soapboxBody} itemProp="address" itemScope itemType="Address">
            <span itemProp="addressLocality">Vienna</span>,
            <span itemProp="addressCountry">Austria</span>
          </span>
          <span className={styles.soapboxList}>
            <a className={styles.soapboxBody} href="/karl-horky.pdf" download>CV</a>
            <a className={styles.soapboxBody} href="https://github.com/karlhorky" itemProp="url">GitHub</a>
            <a className={styles.soapboxBody} href="http://www.linkedin.com/in/karlhorky" itemProp="url">LinkedIn</a>
            <a className={styles.soapboxBody} href="https://twitter.com/karlhorky" itemProp="url">Twitter</a>
          </span>
        </div>
      </div>
    </div>
  </section>;
