import React from 'react';
import styles from './SkillsCard.module.css';

function SkillsCard({ title, technologies }) {
  return (
    <div className={styles.skillCard}>
      <h3>{title}</h3>
      <p>{technologies}</p>
    </div>
  );
}

export default SkillsCard;