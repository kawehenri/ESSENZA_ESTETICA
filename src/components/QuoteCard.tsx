import type { Testimonial } from '../data/testimonials';
import styles from './QuoteCard.module.css';

type QuoteCardProps = {
  testimonial: Testimonial;
};

export function QuoteCard({ testimonial }: QuoteCardProps) {
  return (
    <blockquote className={styles.card}>
      <span className={styles.mark} aria-hidden="true">
        “
      </span>
      <p className={styles.quote}>{testimonial.quote}</p>
      <footer className={styles.footer}>
        <cite className={styles.author}>{testimonial.author}</cite>
        <span className={styles.note}>{testimonial.note}</span>
      </footer>
    </blockquote>
  );
}
