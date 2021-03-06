import React from 'react';
import PropTypes from 'prop-types';
import CookieDisclaimerMessage from '../../containers/CookieDisclaimerMessage';
import LearnMoreOverlay from '../../containers/LearnMoreOverlay';

const CookieDisclaimer = ({ showLearnMore, showCookiePopup }) => (
  <>
    {showLearnMore && <LearnMoreOverlay />}
    {showCookiePopup && <CookieDisclaimerMessage />}
  </>
);

CookieDisclaimer.propTypes = {
  showCookiePopup: PropTypes.bool.isRequired,
  showLearnMore: PropTypes.bool.isRequired,
};

export default CookieDisclaimer;
