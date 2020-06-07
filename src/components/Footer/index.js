import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import additionalStyles from '../App/index.css';
import styles from './index.css';
import SocialMedia from '../SocialMedia';


const Footer = ({ learnMoreClicked }) => (
  <div className={cn(additionalStyles.flexCenter, styles.container)}>
    <SocialMedia />
    <span className={styles.footerDisclaimerText}>
      By using this site you agree to our cookie policy. You can read the cookie policy
      {' '}
      <button className={cn(styles.link)} type="button" onClick={learnMoreClicked}> here</button>
      .
    </span>
    <span className={styles.footerDisclaimerText}>
      The code for this website can be found on
      {' '}
      <a href="https://github.com/oliver-wilson-dev/oliver-wilson-dev.github.io" target="_blank" rel="noopener noreferrer">github</a>
      .
    </span>
    <span className={styles.footerDisclaimerText}>©2020, Oliver Wilson</span>
  </div>
);

Footer.propTypes = {
  learnMoreClicked: PropTypes.func.isRequired
};

export default Footer;
