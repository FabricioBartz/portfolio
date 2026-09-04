import React, { useState } from 'react';
import BackArrow from '../components/buttons/BackArrow';
import ProjectCard from '../components/cards/ProjectCard';
import PageLayout from '../components/layout/PageLayout';
import styles from './Projects.module.css';

const projectsData = [
  {
    id: 1,
    title: 'AgroHub',
    category: 'Calculadora de Insumos Agrícolas',
    description: 'Aplicação web que permite a agricultores calcular com agilidade a demanda de sementes por hectare conforme a cultura selecionada, através de uma interface responsiva voltada para mobile e desktop.',
    technologies: ['React', 'Vite', 'JavaScript', 'CSS Modules'],
    githubUrl: 'https://github.com/FabricioBartz/Calculadora_de_Insumos_Agricolas',
    liveUrl: 'https://fabriciobartz.github.io/Calculadora_de_Insumos_Agricolas/',
    imageUrl: './projects/agrohub.png' 
  },
  {
    id: 2,
    title: 'Academia-Fatout',
    category: 'Sistema de Gestão para Academias',
    description: 'Sistema de gestão para academias com controle de alunos, matrículas e planos de treino, com interface voltada para Desktop.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'Maven'],
    githubUrl: 'https://github.com/FabricioBartz/Academia-Fatout',
    liveUrl: 'https://academia-fatout.onrender.com/',
    imageUrl: './projects/academia-fatout.png'
  },
  {
    id: 3,
    title: 'Editor de Cena 3D',
    category: 'Editor de Cenários Tridimensionais Interativo',
    description: 'Permite posicionar, transformar e organizar hierarquicamente modelos 3D de uma temática de Halloween, com interface voltada para Desktop.',
    technologies: ['JavaScript', 'WebGL2', 'GLSL', 'HTML5 Canvas'],
    githubUrl: 'https://github.com/FabricioBartz/editorDeCena',
    liveUrl: 'https://fabriciobartz.github.io/editorDeCena/',
    imageUrl: './projects/editor-de-cena.png'
  },
  {
    id: 4,
    title: 'Portfólio - Fabricio Fiss Bartz',
    category: 'Portfólio Pessoal',
    description: 'Aplicação web desenvolvida para centralizar meus projetos, trajetórias e formulário de contato, integrado com interface responsiva voltada para Desktop e Mobile.',
    technologies: ['React', 'Vite', 'React Router', 'CSS Modules'],
    githubUrl: 'https://github.com/FabricioBartz/portfolio',
    liveUrl: 'https://fabriciobartz.github.io/portfolio/',
    imageUrl: './projects/portfolio.png'
  }
];

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projectsData.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageLayout>
      <BackArrow className={styles.customBackArrow} />

      <main className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>MEUS PROJETOS</h1>
          <p className={styles.subtitle}>
            Projetos práticos desenvolvidos para consolidar conceitos de desenvolvimento de software e resolução de problemas reais.
          </p>

          <div className={styles.searchContainer}>
            <svg 
              className={styles.searchIcon}
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input 
              type="text" 
              placeholder="Pesquisar projeto por nome..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </header>

        <section className={styles.projectsList}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <p className={styles.noResults}>
              Nenhum projeto encontrado com o nome "{searchTerm}".
            </p>
          )}
        </section>
      </main>
    </PageLayout>
  );
}