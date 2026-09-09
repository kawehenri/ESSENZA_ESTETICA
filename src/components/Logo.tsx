import styles from './Logo.module.css';

type LogoProps = {
  variant?: 'default' | 'light' | 'compact';
  light?: boolean;
  className?: string;
};

export function Logo({ variant = 'default', light = false, className = '' }: LogoProps) {
  const isCompact = variant === 'compact';
  const isLight = light || variant === 'light';

  return (
    <a
      href="#inicio"
      className={`${styles.logo} ${isCompact ? styles.compact : ''} ${isLight ? styles.light : ''} ${className}`.trim()}
      aria-label="ESSENZA ESTÉTICA — início"
    >
      <span className={styles.wordmark}>ESSENZA</span>
      <span className={styles.subtitle}>ESTÉTICA</span>
    </a>
  );
}
