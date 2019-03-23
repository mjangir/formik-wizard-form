import React from 'react';
import PropTypes from 'prop-types';

const Step = ({ isActive, component, ...props }) =>
  isActive ? <React.Fragment>{component(props)}</React.Fragment> : null;

Step.propTypes = {
  isActive: PropTypes.bool,
  component: PropTypes.func,
};

Step.displayName = 'Step';

export default Step;
