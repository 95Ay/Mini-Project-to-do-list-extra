// About.js
import React from 'react';
import styles from './About.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About AA APP</h1>
      <p className={styles.description}>
      With AA App, all your to-dos can be in one easy, intuitive app and you can free your mind and your notebooks for all things creative.
 
      </p>
      <h2 className={styles.subtitle}>Key Features:</h2>
      <ul className={styles.featuresList}>
        <li>Create, edit and delete tasks </li>
        <li>Mark tasks as “done”</li>
        <li>Write detailed descriptions for your tasks</li>
      </ul>
      </div>
  );
};

export default AboutPage;

