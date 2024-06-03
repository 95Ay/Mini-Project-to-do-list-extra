import React from 'react';
import styles from './About.module.css';
import ayoub from '../../assets/ayoub.jpg';
import andreia from '../../assets/andreia.jpg';


const ContactsPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>the Team</h1>
        <div className={styles.teamContainer}>
          <div className={styles.teamMember}>
            <p className={styles.memberName}>Ayoub</p>
            <img src={ayoub} alt="Ayoub" className={styles.memberPhoto} />
            <div className={styles.memberInfo}>
            <p>Email <a>Ayoubfariji95@gmail.com</a></p>
              <a href="https://github.com/95Ay">Ayoub GitHub</a>
            </div>
          </div>
          <div className={styles.teamMember}>
            <p className={styles.memberName}>Andreia</p>
            <img src={andreia} alt="Andreia" className={styles.memberPhoto} />
            <div className={styles.memberInfo}>
              <p>Email <a >Andreiapsa6@gmail.com</a></p>
              <a href="https://github.com/andreiapsa" backgroundColor='red'>Andreia GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
