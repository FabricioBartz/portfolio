import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiCopy, FiCheck } from 'react-icons/fi';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import BackArrow from '../components/buttons/BackArrow';
import PageLayout from '../components/layout/PageLayout';
import styles from './Contact.module.css';

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const captchaRef = useRef(null);
  const [token, setToken] = useState(null);
  const [copied, setCopied] = useState(false);

  const email = "fabriciofissbartz@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    // Volta ao ícone original após 1.5 segundos
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!token) {
      setResult("Por favor, confirme o captcha antes de enviar.");
      return;
    }

    setLoading(true);
    setResult();

    const form = event.target;
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    const formData = new FormData();
    formData.append("access_key", accessKey);
    formData.append("name", form.name.value);
    formData.append("email", form.email.value);
    formData.append("subject", form.subject.value);
    formData.append("message", form.message.value);
    formData.append("h-captcha-response", token);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("Mensagem enviada com sucesso!");
        event.target.reset();
        captchaRef.current.resetCaptcha();
        setToken(null);
      } else {
        setResult("Ocorreu um erro ao enviar.");
        console.error("Web3Forms error:", data);
      }
    } catch (error) {
      setResult("Erro de conexão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };
    
  return (
    <PageLayout>
      <BackArrow />
      <div className={styles.cardContainer}>
        <section className={styles.container}>
          {/* Cabeçalho do Formulário */}
          <div className={styles.header}>
            <h1 className={styles.title}>CONTATO</h1>
            <p className={styles.description}>
              Sinta-se à vontade para entrar em contato comigo!
            </p>
            <div className={styles.emailRow}>
              <span className={styles.emailText}>{email}</span>
              <div className={styles.copyWrapper}>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={styles.copyButton}
                  aria-label="Copiar e-mail"
                >
                  {copied ? <FiCheck /> : <FiCopy />}
                </button>

                {copied && (
                  <span className={styles.copiedTooltip}>Copiado!</span>
                )}
              </div>
            </div>
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

            <div className={styles.captchaWrapper}>
              <HCaptcha
                sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                reCaptchaCompat={false}
                ref={captchaRef}
                onVerify={(t) => setToken(t)}
              />
            </div>

            <button type="submit" disabled={loading} className={styles.button}>
              {loading ? "ENVIANDO..." : "ENVIAR"}
            </button>

            {result && <p className={styles.statusMessage}>{result}</p>}
          </form>
        </section>
      </div>
    </PageLayout>
  );
}