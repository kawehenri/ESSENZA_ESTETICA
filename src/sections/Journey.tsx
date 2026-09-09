import expHands from '../assets/images/exp-hands.jpg';
import expSelfcare from '../assets/images/exp-selfcare.jpg';
import envRoom from '../assets/images/env-treatment-room.jpg';
import envCorridor from '../assets/images/env-corridor.jpg';
import beautyTexture from '../assets/images/beauty-texture.jpg';
import { Reveal } from '../components/Reveal';
import { SectionTitle } from '../components/SectionTitle';
import styles from './Journey.module.css';

const items = [
  {
    src: envRoom,
    alt: 'Sala de atendimento com maca, madeira clara e iluminação indireta',
    caption: 'Sala de atendimento',
    className: 'hero',
  },
  {
    src: expHands,
    alt: 'Mãos preparando produtos e toalhas com atenção',
    caption: 'Preparação atenta',
    className: 'tall',
  },
  {
    src: expSelfcare,
    alt: 'Momento de autocuidado com luz suave',
    caption: 'Autocuidado natural',
    className: 'wide',
  },
  {
    src: envCorridor,
    alt: 'Corredor contemporâneo com paredes claras e espelho orgânico',
    caption: 'Arquitetura que acolhe',
    className: 'square',
  },
  {
    src: beautyTexture,
    alt: 'Textura cremosa de cosmético em tons nude',
    caption: 'Texturas e rituais',
    className: 'detail',
  },
] as const;

export function Journey() {
  return (
    <section
      id="experiencia"
      className={`section ${styles.section}`}
      aria-labelledby="journey-title"
    >
      <div className="container">
        <Reveal>
          <SectionTitle
            eyebrow="Experiência Essenza"
            title="Uma jornada sensorial"
            titleId="journey-title"
            description="Do primeiro contato aos rituais de cuidado, cada gesto e cada espaço foram pensados para serenidade, presença e excelência."
          />
        </Reveal>

        <div className={styles.mosaic}>
          {items.map((item, index) => (
            <Reveal
              key={item.src}
              delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)}
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
