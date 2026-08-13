import { useState } from 'react';
import { Link } from 'react-router-dom';
import BackArrow from '../components/buttons/BackArrow';
import styles from './Contact.module.css';

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false); // Estado para controlar o aviso visual

  const email = "fabriciofissbartz@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    // Volta ao texto original após 1 segundo
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Enviando...");

    const formData = new FormData(event.target);
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("Mensagem enviada com sucesso!");
        event.target.reset();
      } else {
        setResult("Ocorreu um erro ao enviar.");
      }
    } catch (error) {
      setResult("Erro de conexão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };
    
  return (
    <div className={styles.wrapper}>
      <BackArrow />
    <div className={styles.cardContainer}>
        <section className={styles.container}>
          {/* Cabeçalho do Formulário */}
          <div className={styles.header}>
            <h2 className={styles.subtitle}>CONTATO</h2>
            <p className={styles.description}>
              Estou sempre aberto a novas oportunidades e projetos interessantes. Sinta-se à vontade para entrar em contato comigo!
            </p>
            <button 
              type="button" 
              onClick={handleCopyEmail} 
              className={styles.emailLink}
            >
              {copied ? "Copiado!" : email}
            </button>
          </div>

          {/* Formulário */}
          <form onSubmit={onSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <input 
                type="text" 
                name="name" 
                placeholder="Nome *" 
                required 
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <input 
                type="email" 
                name="email" 
                placeholder="Email *" 
                required 
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <input 
                type="text" 
                name="subject" 
                placeholder="Assunto" 
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <textarea 
                name="message" 
                placeholder="Mensagem *" 
                required 
                rows="4" 
                className={styles.textarea}
              />
            </div>

            <button type="submit" disabled={loading} className={styles.button}>
              {loading ? "ENVIANDO..." : "ENVIAR"}
            </button>

            {result && <p className={styles.statusMessage}>{result}</p>}
          </form>
        </section>
      </div>
    </div>
  );
}