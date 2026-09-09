import { clinic, navigation } from '../data/clinic';
import { Logo } from './Logo';
import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Logo variant="light" />
          <p className={`body ${styles.tagline}`}>{clinic.tagline}</p>
          <p className="body-sm">{clinic.description}</p>
        </div>

        <div>
          <h2 className={styles.heading}>Navegação</h2>
          <ul className={styles.list}>
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={styles.heading}>Contato</h2>
          <ul className={styles.list}>
            <li>
              <a href={clinic.phoneHref}>{clinic.phone}</a>
            </li>
            <li>
              <a href={clinic.whatsappHref}>{clinic.whatsapp}</a>
            </li>
            <li>
              <a href={clinic.emailHref}>{clinic.email}</a>
            </li>
            <li>{clinic.address}</li>
            <li>{clinic.hours}</li>
          </ul>
        </div>

        <div>
          <h2 className={styles.heading}>Redes</h2>
          <ul className={styles.list}>
            <li>
              <a href={clinic.instagramHref} target="_blank" rel="noreferrer">
                {clinic.instagram}
              </a>
            </li>
            <li>
              <a href={clinic.facebookHref} target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {year} {clinic.fullName}. Todos os direitos reservados.
        </p>
        <p className={styles.note}>Conteúdo e contatos editáveis — versão frontend.</p>
      </div>
    </footer>
  );
}
