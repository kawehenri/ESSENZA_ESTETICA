import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { About } from './sections/About';
import { Beauty } from './sections/Beauty';
import { ContactCta } from './sections/ContactCta';
import { Environment } from './sections/Environment';
import { Experience } from './sections/Experience';
import { Hero } from './sections/Hero';
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
        <Experience />
        <Environment />
        <Beauty />
        <Testimonials />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
