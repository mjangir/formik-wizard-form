import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    description: (
      <>
        Wizard Form has been built around the famous Formik react library having
        its APIs untouched. You just need to pass few additional props to get
        started.
      </>
    ),
  },
  {
    title: 'Examples',
    description: (
      <>
        The layout and styling part is completely up to you. The repository
        contains few sandboxes embedded from codesandbox for various CSS
        frameworks.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
