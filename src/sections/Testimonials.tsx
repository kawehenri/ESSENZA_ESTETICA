import { testimonials } from '../data/testimonials';
import { QuoteCard } from '../components/QuoteCard';
import { Reveal } from '../components/Reveal';
import { SectionTitle } from '../components/SectionTitle';
import styles from './Testimonials.module.css';

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      className={`section section--alt ${styles.section}`}
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <Reveal>
          <SectionTitle
            eyebrow="Depoimentos"
            title="Histórias a preencher"
            titleId="testimonials-title"
            description="Estrutura visual pronta. Substitua os textos placeholder por depoimentos reais dos clientes Essenza."
            align="center"
          />
        </Reveal>

        <div className={styles.grid}>
          {testimonials.map((item, index) => (
            <Reveal key={item.id} delay={(Math.min(index + 1, 3) as 1 | 2 | 3)}>
              <QuoteCard testimonial={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
