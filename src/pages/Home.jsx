import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
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
                sobre mim
            </Link>

            <span className={styles.divider}>|</span>

            <Link to="/projetos" className={styles.button}>
                Meus projetos
            </Link>

            <span className={styles.divider}>|</span>

            <Link to="/contato" className={styles.button}>
                contato
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