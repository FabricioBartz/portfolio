import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaUser, FaCode, FaEnvelope, FaChevronRight } from 'react-icons/fa'
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Fabricio Fiss Bartz</h1>
      <p className={styles.subtitle}>
        FULL-STACK DEVELOPER
      </p>

      <div className={styles.buttonGroup}>
        <Link to="/sobre" className={styles.button}>
          <div className={styles.buttonContent}>
            <FaUser className={styles.btnIcon} />
            <span>Sobre Mim</span>
          </div>
          <FaChevronRight className={styles.arrowIcon} />
        </Link>

        <span className={styles.divider}>|</span>

        <Link to="/projetos" className={styles.button}>
          <div className={styles.buttonContent}>
            <FaCode className={styles.btnIcon} />
            <span>Meus Projetos</span>
          </div>
          <FaChevronRight className={styles.arrowIcon} />
        </Link>

        <span className={styles.divider}>|</span>

        <Link to="/contato" className={styles.button}>
          <div className={styles.buttonContent}>
            <FaEnvelope className={styles.btnIcon} />
            <span>Contato</span>
          </div>
          <FaChevronRight className={styles.arrowIcon} />
        </Link>
      </div>

      <div className={styles.socialContainer}>
        <a 
          href="https://github.com/FabricioBartz" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.socialIcon}
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a 
          href="https://linkedin.com/in/fabriciofissbartz" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.socialIcon}
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  )
}

export default Home