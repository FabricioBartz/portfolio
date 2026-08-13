import React from 'react';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  const { title, category, description, technologies, githubUrl, liveUrl, imageUrl } = project;

  return (
    <article className={styles.projectCard}>
      {/* Imagem Lateral Esquerda */}
      {imageUrl && (
        <div className={styles.imageWrapper}>
          <img src={imageUrl} alt={`Capa do projeto ${title}`} className={styles.coverImage} />
        </div>
      )}

      {/* Conteúdo à Direita */}
      <div className={styles.cardContent}>
        <div>
          <div className={styles.titleGroup}>
            {category && <span className={styles.categoryBadge}>{category}</span>}
            <h2 className={styles.projectTitle}>{title}</h2>
          </div>

          <p className={styles.projectDescription}>{description}</p>
        </div>

        {/* Tags de Tecnologias */}
        {technologies && technologies.length > 0 && (
          <div className={styles.techTags}>
            {technologies.map((tech, index) => (
              <span key={index} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Botões de Ação */}
        <div className={styles.cardActions}>
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.actionButton}
            >
              GitHub
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${styles.actionButton} ${styles.primaryButton}`}
            >
              Ver Projeto Online
            </a>
          )}
        </div>
      </div>
    </article>
  );
}