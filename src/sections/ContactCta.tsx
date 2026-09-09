import ctaImage from '../assets/images/cta-lounge.jpg';
import { clinic } from '../data/clinic';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import styles from './ContactCta.module.css';

export function ContactCta() {
  return (
    <section id="contato" className={styles.section} aria-labelledby="contact-title">
      <div className={styles.media}>
        <img
          src={ctaImage}
          alt="Lounge sofisticado da clínica Essenza com luz natural e flor delicada"
          loading="lazy"
          decoding="async"
          className={styles.image}
        />
        <div className={styles.overlay} aria-hidden="true" />
      </div>

      <div className={`container ${styles.content}`}>
        <Reveal>
          <p className="eyebrow">Agendamento</p>
          <h2 id="contact-title" className={`heading-lg ${styles.title}`}>
            Reserve o seu momento Essenza
          </h2>
          <hr className="gold-line" aria-hidden="true" />
          <p className={`body-lg ${styles.lead}`}>
            Uma experiência pensada para acolher a sua beleza com delicadeza,
            privacidade e sofisticação.
          </p>
          <div className={styles.actions}>
            <Button href={clinic.whatsappHref} variant="ghost">
              Falar no WhatsApp
            </Button>
            <Button href={clinic.phoneHref} variant="ghost">
              Ligar agora
            </Button>
          </div>
          <p className={styles.meta}>
            {clinic.address} · {clinic.hours}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
