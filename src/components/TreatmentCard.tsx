import type { Treatment } from '../data/treatments';
import styles from './TreatmentCard.module.css';

type TreatmentCardProps = {
  treatment: Treatment;
};

export function TreatmentCard({ treatment }: TreatmentCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img
          src={treatment.image}
          alt={treatment.imageAlt}
          loading="lazy"
          decoding="async"
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={`heading-sm ${styles.title}`}>{treatment.title}</h3>
        <p className={`body ${styles.description}`}>{treatment.description}</p>
      </div>
    </article>
  );
}
