import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { About } from './sections/About';
import { ContactCta } from './sections/ContactCta';
import { Hero } from './sections/Hero';
import { Journey } from './sections/Journey';
import { Testimonials } from './sections/Testimonials';
import { Treatments } from './sections/Treatments';

export default function App() {
  return (
    <>
      <a href="#conteudo" className="skip-link">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Treatments />
        <Journey />
        <Testimonials />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
