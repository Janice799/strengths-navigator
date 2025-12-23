import './index.css';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { demoCoach } from './data/strengthsData';

function App() {
  return (
    <div className="app">
      <Hero coach={demoCoach} />
      <About coach={demoCoach} />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
