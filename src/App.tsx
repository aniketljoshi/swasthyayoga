import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Schedule from './components/Schedule';
import Teacher from './components/Teacher';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen smooth-scroll">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Schedule />
        <Teacher />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
