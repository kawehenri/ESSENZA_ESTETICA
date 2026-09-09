import heroImage from '../assets/images/hero-reception.jpg';
import { clinic } from '../data/clinic';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.media}>
        <img
          src={heroImage}
          alt="Recepção sofisticada da clínica Essenza Estética com mármore claro e iluminação suave"
          className={styles.image}
          fetchPriority="high"
          decoding="async"
        />
        <div className={styles.fade} aria-hidden="true" />
      </div>

      <div className={`container ${styles.content}`}>
        <Reveal>
          <h1 id="hero-title" className={styles.title}>
            {clinic.name}
          </h1>
          <p className={styles.tagline}>{clinic.tagline}</p>
          <p className={styles.lead}>
            Uma experiência de estética, cuidado e bem-estar pensada para você.
          </p>
          <div className={styles.actions}>
            <Button href="#contato">Agendar experiência</Button>
            <Button href="#clinica" variant="secondary">
              Conhecer a clínica
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
