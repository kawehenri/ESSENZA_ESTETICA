import type { Treatment } from '../data/treatments';
import styles from './TreatmentCard.module.css';

type TreatmentCardProps = {
  treatment: Treatment;
  featured?: boolean;
  compact?: boolean;
};

export function TreatmentCard({
  treatment,
  featured = false,
  compact = false,
}: TreatmentCardProps) {
  return (
    <article
      className={`${styles.card} ${featured ? styles.featured : ''} ${compact ? styles.compact : ''}`.trim()}
    >
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
        <h3 className={styles.title}>{treatment.title}</h3>
        <p className={styles.line}>{treatment.line}</p>
        <p className={styles.description}>{treatment.description}</p>
      </div>
    </article>
  );
}
