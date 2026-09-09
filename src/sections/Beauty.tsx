import beautyProducts from '../assets/images/beauty-products.jpg';
import beautyTexture from '../assets/images/beauty-texture.jpg';
import { Reveal } from '../components/Reveal';
import { SectionTitle } from '../components/SectionTitle';
import styles from './Beauty.module.css';

export function Beauty() {
  return (
    <section id="beleza" className={`section ${styles.section}`} aria-labelledby="beauty-title">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.copy}>
          <SectionTitle
            eyebrow="Beleza & Autocuidado"
            title="Texturas, rituais e presença"
            titleId="beauty-title"
          />
          <p className="body-lg">
            Imagens conceituais que celebram o gesto do cuidado: produtos
            selecionados, texturas sensoriais e uma estética que valoriza o
            essencial.
          </p>
          <p className="body">
            Sem excessos. Sem artificialidade. Apenas a poesia de uma rotina
            elegante, pensada para o bem-estar e a confiança.
          </p>
        </Reveal>

        <div className={styles.images}>
          <Reveal delay={1} className={styles.products}>
            <img
              src={beautyProducts}
              alt="Produtos cosméticos premium em prateleira de madeira clara"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <Reveal delay={2} className={styles.texture}>
            <img
              src={beautyTexture}
              alt="Close-up de textura cremosa de cosmético em tons nude"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
