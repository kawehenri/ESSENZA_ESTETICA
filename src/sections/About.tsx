import aboutImage from '../assets/images/about-waiting.jpg';
import { Reveal } from '../components/Reveal';
import { SectionTitle } from '../components/SectionTitle';
import styles from './About.module.css';

export function About() {
  return (
    <section id="clinica" className={`section ${styles.section}`} aria-labelledby="about-title">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.copy}>
          <SectionTitle
            eyebrow="A Clínica"
            title="Essência em cada detalhe"
            titleId="about-title"
          />
          <p className="body-lg">
            A Essenza nasce do desejo de oferecer uma estética mais silenciosa:
            espaços acolhedores, rituais delicados e um cuidado que respeita a
            singularidade de cada pessoa.
          </p>
          <p className="body">
            Aqui, a sofisticação se expressa na arquitetura, na luz, nos materiais
            e na presença atenta da equipe. Uma clínica boutique pensada para
            transmitir confiança, tranquilidade e exclusividade — sem excessos.
          </p>
          <ul className={styles.values}>
            <li>Luxo delicado</li>
            <li>Excelência estética</li>
            <li>Ambientes serenos</li>
            <li>Autocuidado consciente</li>
          </ul>
        </Reveal>

        <Reveal delay={2} className={styles.media}>
          <img
            src={aboutImage}
            alt="Sala de espera elegante da Essenza com assentos em linho e luz natural"
            loading="lazy"
            decoding="async"
            className={styles.image}
          />
        </Reveal>
      </div>
    </section>
  );
}
