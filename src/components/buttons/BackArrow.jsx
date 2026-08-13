import styles from './BackArrow.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function BackArrow({ className = '' }) {
  const navigate = useNavigate();

  return (
    <Link 
      type="button"
      onClick={() => navigate(-1)} 
      className={`${styles.backArrow} ${className}`} 
      aria-label="Voltar à página anterior"
    >
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        >
        <path d="M19 12H5" />
        <path d="M12 19l-7-7 7-7" />
      </svg>
    </Link>
  );
}