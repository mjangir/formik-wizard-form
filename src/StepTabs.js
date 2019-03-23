import React from 'react';
import PropTypes from 'prop-types';

const StepTabs = ({ tabs, activeStepIndex }) => (
  <div className="react-formik-wizard__step-tabs">
    <ul className="react-formik-wizard__step-tabs__tab-list">
      {tabs.map((tab, index) => (
        <li
          className={index === activeStepIndex ? 'is-active' : ''}
          key={tab.title}
        >
          {tab.title}
        </li>
      ))}
    </ul>
  </div>
);

StepTabs.propTypes = {
  tabs: PropTypes.array,
  activeStepIndex: PropTypes.number,
};

export default StepTabs;
