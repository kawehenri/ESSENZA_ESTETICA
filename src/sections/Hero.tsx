import heroImage from '../assets/images/hero-reception.jpg';
import { clinic } from '../data/clinic';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.bg} aria-hidden="true">
        <img
          src={heroImage}
          alt=""
          className={styles.bgImage}
          fetchPriority="high"
          decoding="async"
        />
        <div className={styles.bgBlur} />
        <div className={styles.veil} />
      </div>

      <div className={`container ${styles.content}`}>
        <Reveal>
          <p className={`eyebrow ${styles.eyebrow}`}>Clínica de estética premium</p>
          <h1 id="hero-title" className={`display ${styles.title}`}>
            {clinic.name}
          </h1>
          <p className={styles.tagline}>{clinic.tagline}</p>
          <p className={`body-lg ${styles.lead}`}>
            Luxo silencioso, ambientes serenos e uma experiência de beleza pensada
            para realçar a sua essência com delicadeza e excelência.
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
