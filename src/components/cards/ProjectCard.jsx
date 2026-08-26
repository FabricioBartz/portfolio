import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import styles from './ProjectCard.module.css';
import Button from '../buttons/Buttom.jsx';


export default function ProjectCard({ project }) {
  const { title, category, description, technologies, githubUrl, liveUrl, imageUrl } = project;

  return (
    <article className={styles.projectCard}>
      {/* Imagem Lateral Esquerda / Topo no mobile */}
      {imageUrl && (
        <div className={styles.imageWrapper}>
          <img 
            src={imageUrl} 
            alt={`Capa do projeto ${title}`} 
            className={styles.coverImage} 
          />
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

        {/* Botões de Ação com Ícones */}
        <div className={styles.cardActions}>
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.secondaryButton}
            >
              <FaGithub className={styles.btnIcon} />
              <span>Código</span>
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.primaryButton}
            >
              <FaExternalLinkAlt className={styles.btnIcon} />
              <span>Ver Online</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}