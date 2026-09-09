import styles from './SectionTitle.module.css';

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  titleId?: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
};

export function SectionTitle({
  eyebrow,
  title,
  titleId,
  description,
  align = 'left',
  light = false,
}: SectionTitleProps) {
  return (
    <header
      className={`${styles.header} ${styles[align]} ${light ? styles.light : ''}`.trim()}
    >
      {eyebrow ? <p className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</p> : null}
      <h2 id={titleId} className={`heading-lg ${styles.title}`}>
        {title}
      </h2>
      <hr className="gold-line" aria-hidden="true" />
      {description ? <p className={`body-lg ${styles.description}`}>{description}</p> : null}
    </header>
  );
}
