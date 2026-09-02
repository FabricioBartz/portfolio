import { Link } from 'react-router-dom';
import styles from './PageLayout.module.css';

export default function PageLayout({ children }) {
  return (
    <div className={styles.pageWrapper}>
      <main className={styles.mainContent}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p>© 2026 Fabricio Fiss Bartz. Todos os direitos reservados.</p>
        <div className={styles.footerLinks}>
          <a href="https://github.com/FabricioBartz" target="_blank" rel="noreferrer">GitHub</a>
          <span>&bull;</span>
          <a href="https://linkedin.com/in/fabriciofissbartz" target="_blank" rel="noreferrer">LinkedIn</a>
          <span>&bull;</span>
          <Link to="/contato">Contato</Link>
        </div>
      </footer>
    </div>
  );
}