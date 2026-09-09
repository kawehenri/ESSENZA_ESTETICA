import { treatments } from '../data/treatments';
import { Reveal } from '../components/Reveal';
import { SectionTitle } from '../components/SectionTitle';
import { TreatmentCard } from '../components/TreatmentCard';
import styles from './Treatments.module.css';

export function Treatments() {
  return (
    <section
      id="tratamentos"
      className={`section section--alt ${styles.section}`}
      aria-labelledby="treatments-title"
    >
      <div className="container">
        <Reveal>
          <SectionTitle
            eyebrow="Tratamentos"
            title="Cuidado sob medida"
            titleId="treatments-title"
            description="Uma seleção editorial de experiências estéticas. Os nomes e descrições são editáveis e estão preparados para conteúdo definitivo."
            align="center"
          />
        </Reveal>

        <div className={styles.grid}>
          {treatments.map((treatment, index) => (
            <Reveal
              key={treatment.id}
              delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)}
            >
              <TreatmentCard treatment={treatment} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
