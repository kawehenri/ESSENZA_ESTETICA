import { treatments } from '../data/treatments';
import { Reveal } from '../components/Reveal';
import { SectionTitle } from '../components/SectionTitle';
import { TreatmentCard } from '../components/TreatmentCard';
import styles from './Treatments.module.css';

export function Treatments() {
  const [featured, ...rest] = treatments;

  return (
    <section
      id="tratamentos"
      className={`section ${styles.section}`}
      aria-labelledby="treatments-title"
    >
      <div className="container">
        <Reveal>
          <SectionTitle
            eyebrow="Tratamentos"
            title="Cuidado sob medida"
            titleId="treatments-title"
            description="Experiências estéticas pensadas com delicadeza — da pele ao corpo, até o ritual de estar na Essenza."
          />
        </Reveal>

        <div className={styles.mosaic}>
          <Reveal className={styles.featured}>
            <TreatmentCard treatment={featured} featured />
          </Reveal>

          <div className={styles.side}>
            {rest.map((treatment, index) => (
              <Reveal
                key={treatment.id}
                delay={(Math.min(index + 1, 3) as 1 | 2 | 3)}
              >
                <TreatmentCard treatment={treatment} compact />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
