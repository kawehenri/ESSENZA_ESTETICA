import styles from './Logo.module.css';

type LogoProps = {
  variant?: 'default' | 'light' | 'compact';
  className?: string;
};

export function Logo({ variant = 'default', className = '' }: LogoProps) {
  const variantClass = variant !== 'default' ? styles[variant] : '';

  return (
    <a
      href="#inicio"
      className={`${styles.logo} ${variantClass} ${className}`.trim()}
      aria-label="ESSENZA ESTÉTICA — início"
    >
      <span className={styles.wordmark}>ESSENZA</span>
      <span className={styles.subtitle}>ESTÉTICA</span>
    </a>
  );
}
