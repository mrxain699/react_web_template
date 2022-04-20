import Navbar from '../Web/Navbar';
import Header from '../Web/Header';
import Sections from '../Web/Sections';
import Contact from '../Web/Contact';
import Footer from '../Web/Footer';
function Home() {
  return (
      <>
        <Navbar />
        <Header />
        <Sections name="about" image='/images/about.svg' />
        <Sections name="services" image='/images/team.svg' />
        <Sections name="help" image='/images/help.svg' />
        <Contact />
        <Footer />
      </>
  );
}

export default Home;
