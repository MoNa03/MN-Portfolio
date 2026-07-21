import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./sections/Hero";
import TrustedTechnologies from "./components/TrustedTechnologies";
import About from "./sections/About";
import CoreExpertise from "./sections/CoreExpertise";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <Hero />

        <TrustedTechnologies />

        <About />

        <CoreExpertise />

        <Experience />

        <Contact />
      </main>
      
      <Footer />

    </div>
  );
}

export default App;