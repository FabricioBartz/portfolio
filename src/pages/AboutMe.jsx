import { useState } from 'react';
import { Link } from 'react-router-dom';
import BackArrow from '../components/buttons/BackArrow';
import SkillsCard from '../components/cards/SkillsCard.jsx';
import PageLayout from '../components/layout/PageLayout.jsx';
import styles from './AboutMe.module.css'

const skillsData = [
  { id: 1, title: 'Front-end', technologies: 'React JS, JavaScript, HTML, CSS.' },
  { id: 2, title: 'Back-end & Banco de Dados', technologies: 'Java, Spring Boot, Python, MySQL, PostgreSQL.' },
  { id: 3, title: 'Ferramentas & Produtividade', technologies: 'Git, GitHub, AI-Assisted Development (ChatGPT, Gemini, Claude).' }
];

function AboutMe() {
  return (
    <PageLayout>
      <BackArrow className={styles.custombackArrow} />
      
      <main className={styles.content}>
        {/* Seção Principal: Foto + Apresentação */}
        <section className={styles.heroSection}>
          <div className={styles.imageContainer}>
            <img 
              src="https://github.com/FabricioBartz.png" 
              alt="Foto de Fabricio Fiss Bartz" 
              className={styles.profileImage}
            />
          </div>
          
          <div className={styles.heroText}>
            <span className={styles.badge}>Full Stack Developer</span>
            <h1 className={styles.title}>Fabricio Fiss Bartz</h1>
            <p className={styles.subtitle}>
              Estudante de Ciência da Computação (UFPel).
            </p>
          </div>
        </section>

        {/* Seção Minha Trajetória */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Minha Trajetória</h2>
          <div className={styles.quoteText}>
            <p>
              Minha jornada acadêmica começou na Engenharia Civil, onde desenvolvi uma forte base analítica, disciplina e capacidade de resolução de problemas complexos. Ao migrar para a Ciência da Computação na Universidade Federal de Pelotas (UFPel), direcionei essa bagagem lógica para a construção de softwares e sistemas web.
            </p>
            <p>
              Atualmente, dedico meus estudos à aplicação prática de conceitos de desenvolvimento de software. Crio projetos completos integrando interfaces reativas no front-end (React, Vite) com arquiteturas robustas no back-end (Java, Spring Boot e bancos de dados SQL). Além das linguagens tradicionais, integro ativamente ferramentas de IA Generativa (ChatGPT, Gemini e Claude) no meu fluxo de trabalho para acelerar pesquisas de documentação, refatorar códigos e otimizar processos de debug.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Além do Código</h2>
          <div className={styles.quoteText}>
            <p>
              Nas minhas horas vagas, sou um entusiasta de games, séries e animes, além de acompanhar partidas de futebol sempre que possível. Trago também uma bagagem no campo com a agricultura familiar e na criação de conteúdo audiovisual, gerenciando e editando vídeos para o YouTube.
            </p>
          </div>
        </section>

        {/* Seção Habilidades / Tech Stack */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Conhecimentos & Tecnologias</h2>
          
          <div className={styles.skillsGrid}>
            {skillsData.map((skill) => (
              <SkillsCard 
                key={skill.id} 
                title={skill.title} 
                technologies={skill.technologies} 
              />
            ))}
          </div>
        </section>

        {/* Seção de Call To Action (Download do CV) */}
        <section className={styles.ctaSection}>
          <a 
            href="./downloads/curriculo-fabricio-bartz.pdf" 
            download="Curriculo_Fabricio_Bartz.pdf"
            className={styles.downloadButton}
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Baixar Currículo
          </a>

            <Link to="/contato" className={styles.downloadButton}>
              contato
            </Link>
          
            
        </section>
      </main>
    </PageLayout>
  )
}

export default AboutMe