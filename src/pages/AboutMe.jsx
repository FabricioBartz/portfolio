import { Link } from 'react-router-dom';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import BackArrow from '../components/buttons/BackArrow';
import PageLayout from '../components/layout/PageLayout.jsx';
import Button from '../components/buttons/Buttom.jsx';
import styles from './AboutMe.module.css';

const skillsData = [
  { 
    id: 1, 
    title: 'Front-end', 
    techs: ['React JS', 'JavaScript', 'HTML5', 'CSS Modules', 'Vite'] 
  },
  { 
    id: 2, 
    title: 'Back-end & Dados', 
    techs: ['Java', 'Python', 'C', 'MySQL', 'PostgreSQL'] 
  },
  { 
    id: 3, 
    title: 'Ferramentas & IA', 
    techs: ['Git', 'GitHub', 'ChatGPT', 'Gemini', 'Claude', 'VS Code'] 
  }
];

function AboutMe() {
  return (
    <PageLayout>
      <BackArrow className={styles.customBackArrow} />
      
      <main className={styles.content}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageGlow}></div>
            <img 
              src="https://github.com/FabricioBartz.png" 
              alt="Foto de Fabricio Fiss Bartz" 
              className={styles.profileImage}
            />
          </div>
          
          <div className={styles.heroText}>
            <span className={styles.badge}>Full-Stack Developer</span>
            <h1 className={styles.title}>Fabricio Fiss Bartz</h1>
            <p className={styles.subtitle}>
              Estudante de Ciência da Computação (UFPel) &bull; Pelotas, RS
            </p>
          </div>
        </section>

        {/* Minha Trajetória */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Minha Trajetória</h2>
          <div className={styles.bioText}>
            <p>
              Minha jornada acadêmica começou na Engenharia Civil, onde desenvolvi uma forte base analítica, disciplina e capacidade de resolução de problemas complexos. Ao migrar para a Ciência da Computação na Universidade Federal de Pelotas (UFPel), direcionei essa bagagem lógica para a construção de softwares e sistemas web.
            </p>
            <p>
              Atualmente, dedico meus estudos à aplicação prática de conceitos de desenvolvimento de software. Crio projetos completos integrando interfaces reativas no front-end (React, Vite) com arquiteturas robustas no back-end (Java, Spring Boot e bancos de dados SQL). Além das linguagens tradicionais, integro ativamente ferramentas de IA Generativa (ChatGPT, Gemini e Claude) no meu fluxo de trabalho para acelerar pesquisas de documentação, refatorar códigos e otimizar processos de debug.
            </p>
          </div>
        </section>

        {/* Além do Código */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Além do Código</h2>
          <blockquote className={styles.quoteText}>
            Nas minhas horas vagas, sou um entusiasta de games, séries e animes, além de acompanhar partidas de futebol sempre que possível. Trago também uma bagagem no campo com a agricultura familiar e na criação de conteúdo audiovisual, gerenciando e editando vídeos para o YouTube.
          </blockquote>
        </section>

        {/* Tech Stack com Tags Modernas */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Conhecimentos & Tecnologias</h2>
          
          <div className={styles.skillsGrid}>
            {skillsData.map((skill) => (
              <div key={skill.id} className={styles.skillCard}>
                <h3>{skill.title}</h3>
                <div className={styles.techTags}>
                  {skill.techs.map((tech, index) => (
                    <span key={index} className={styles.tag}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call To Action com Hierarquia Primária / Secundária */}
        <section className={styles.ctaSection}>
           {/* Botão de Download (Tag <a>) */}
          <Button 
            variant="primary"
            href="./downloads/curriculo-fabricio-bartz.pdf"
            download="Curriculo_Fabricio_Bartz.pdf"
            icon={FaDownload}
          >
            Baixar Currículo
          </Button>

          {/* Botão de Navegação (Tag <Link>) */}
          <Button 
            variant="secondary"
            to="/contato"
            icon={FaEnvelope}
          >
            Fale Comigo
          </Button>
        </section>
      </main>
    </PageLayout>
  );
}

export default AboutMe;