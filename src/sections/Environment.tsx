import envRoom from '../assets/images/env-treatment-room.jpg';
import envCorridor from '../assets/images/env-corridor.jpg';
import { Reveal } from '../components/Reveal';
import { SectionTitle } from '../components/SectionTitle';
import styles from './Environment.module.css';

export function Environment() {
  return (
    <section
      id="ambiente"
      className={`section section--alt ${styles.section}`}
      aria-labelledby="environment-title"
    >
      <div className="container">
        <Reveal>
          <SectionTitle
            eyebrow="Ambiente"
            title="Arquitetura que acolhe"
            titleId="environment-title"
            description="Espaços contemporâneos em tons nude e champagne, com mármore claro, madeira suave e luz pensada para tranquilidade."
            align="center"
          />
        </Reveal>

        <div className={styles.grid}>
          <Reveal className={styles.primary}>
            <img
              src={envRoom}
              alt="Sala de atendimento impecável com maca, madeira clara e iluminação indireta"
              loading="lazy"
              decoding="async"
              className={styles.image}
            />
            <p className={styles.label}>Sala de atendimento</p>
          </Reveal>
          <Reveal delay={2} className={styles.secondary}>
            <img
              src={envCorridor}
              alt="Corredor contemporâneo da clínica com paredes claras e espelho orgânico"
              loading="lazy"
              decoding="async"
              className={styles.image}
            />
            <p className={styles.label}>Circulação e arquitetura</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
