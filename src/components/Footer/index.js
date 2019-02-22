import React from 'react';
import cn from 'classnames';
import additionalStyles from '../App/index.css';
import styles from './index.css';

export default () => (
  <div className={cn(additionalStyles.flexColumn, additionalStyles.flexCenter)}>
    <span className={styles.footerDisclaimer}>
the code for this website can be found on
      {' '}
      <a href="https://github.com/asos-oliverwilson/portfolio-website" target="_blank" rel="noopener noreferrer">github</a>
. ©2019, Oliver Wilson
    </span>
  </div>
);
