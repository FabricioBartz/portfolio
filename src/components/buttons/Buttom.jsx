import { Link } from 'react-router-dom';
import styles from './Button.module.css';

function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary'
  to,                 
  href,             
  download,           
  icon: Icon,          
  type = 'button',     
  onClick,
  className = '',
  ...props
}) {
  // Combina as classes base, variante e classe extra customizada
  const buttonClasses = `${styles.btn} ${styles[variant]} ${className}`.trim();

  // Conteúdo interno com ícone (se houver) e texto
  const content = (
    <>
      {Icon && <Icon className={styles.icon} />}
      <span>{children}</span>
    </>
  );

  // 1. Se receber "to", renderiza um Link do react-router-dom
  if (to) {
    return (
      <Link to={to} className={buttonClasses} onClick={onClick} {...props}>
        {content}
      </Link>
    );
  }

  // 2. Se receber "href", renderiza uma tag <a> (para download ou link externo)
  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        download={download}
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    );
  }

  // 3. Caso contrário, renderiza a tag nativa <button> (para submit/onClick)
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
}

export default Button;