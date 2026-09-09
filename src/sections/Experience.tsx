import expHands from '../assets/images/exp-hands.jpg';
import expSelfcare from '../assets/images/exp-selfcare.jpg';
import detailStill from '../assets/images/detail-stilllife.jpg';
import { Reveal } from '../components/Reveal';
import { SectionTitle } from '../components/SectionTitle';
import styles from './Experience.module.css';

const items = [
  {
    src: expHands,
    alt: 'Mãos de profissional organizando bandeja com produtos e toalhas',
    caption: 'Preparação atenta',
    className: 'wide',
  },
  {
    src: expSelfcare,
    alt: 'Momento de autocuidado com enquadramento parcial e luz suave',
    caption: 'Autocuidado natural',
    className: 'tall',
  },
  {
    src: detailStill,
    alt: 'Still life com toalhas, flores delicadas e bandeja champagne',
    caption: 'Detalhes que acolhem',
    className: 'square',
  },
] as const;

export function Experience() {
  return (
    <section
      id="experiencia"
      className={`section ${styles.section}`}
      aria-labelledby="experience-title"
    >
      <div className="container">
        <Reveal>
          <SectionTitle
            eyebrow="Experiência Essenza"
            title="Uma jornada sensorial"
            titleId="experience-title"
            description="Do primeiro contato aos rituais de cuidado, cada gesto é pensado para transmitir serenidade, presença e excelência."
          />
        </Reveal>

        <div className={styles.gallery}>
          {items.map((item, index) => (
            <Reveal
              key={item.src}
              delay={(Math.min(index + 1, 3) as 1 | 2 | 3)}
              className={`${styles.item} ${styles[item.className]}`}
            >
              <figure className={styles.figure}>
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className={styles.image}
                />
                <figcaption className={styles.caption}>{item.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
