import { useEffect, useState } from 'react';
import { clinic, navigation } from '../data/clinic';
import { Button } from './Button';
import { Logo } from './Logo';
import styles from './Header.module.css';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);
  const onHero = !scrolled && !open;

  return (
    <>
      <header
        className={`${styles.header} ${scrolled || open ? styles.scrolled : ''} ${onHero ? styles.onHero : ''}`.trim()}
      >
        <div className={`container ${styles.inner}`}>
          <Logo variant="compact" light={onHero} />

          <nav className={styles.desktopNav} aria-label="Principal">
            <ul className={styles.navList}>
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={styles.navLink}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <Button
              href={clinic.whatsappHref}
              className={styles.cta}
              variant={onHero ? 'onDark' : 'primary'}
              target="_blank"
              rel="noreferrer"
            >
              Agendar
            </Button>
            <button
              type="button"
              className={`${styles.menuButton} ${open ? styles.menuOpen : ''}`.trim()}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`${styles.mobileOverlay} ${open ? styles.mobileOpen : ''}`.trim()}
        aria-hidden={!open}
      >
        <nav className={styles.mobileNav} aria-label="Mobile">
          <ul className={styles.mobileList}>
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={styles.mobileLink} onClick={close}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href={clinic.whatsappHref} onClick={close} target="_blank" rel="noreferrer">
            Agendar experiência
          </Button>
        </nav>
      </div>
    </>
  );
}
