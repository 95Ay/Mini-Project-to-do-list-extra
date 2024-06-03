// About.js
import React from 'react';
import styles from './About.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About AA APP</h1>
      <p className={styles.description}>
        Ayoub and Andreia did a great and they want to have a job 
      </p>
      <h2 className={styles.subtitle}>Key Features:</h2>
      <ul className={styles.featuresList}>
        <li>Andreia send you a smile </li>
        <li>Ayoub say hello</li>
        <li>..........</li>
        <li>.......</li>
        <li>.......</li>
      </ul>
      </div>
  );
};

export default AboutPage;

