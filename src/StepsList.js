import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

class StepsList extends React.PureComponent {
  componentWillMount() {
    const stepTabs = [];
    Children.forEach(this.props.children, child => {
      if (child.props.title) {
        stepTabs.push({ title: child.props.title });
      }
    });
    this.props.updateStepTabs(stepTabs);
  }
  getStepChildren() {
    const { activeStepIndex, children, ...props } = this.props;
    const stepTabs = [];
    const newChildren = Children.map(children, (child, index) => {
      if (child.props.title) {
        stepTabs.push({ title: child.props.title });
      }
      return cloneElement(child, {
        isActive: index === activeStepIndex,
        ...props,
      });
    });
    return newChildren;
  }
  render() {
    return (
      <div className="react-formik-wizard__step-page">
        {this.getStepChildren()}
      </div>
    );
  }
}

StepsList.propTypes = {
  activeStepIndex: PropTypes.number,
  updateStepTabs: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

StepsList.displayName = 'StepsList';

export default StepsList;
