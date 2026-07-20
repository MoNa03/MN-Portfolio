import Navbar from "./components/layout/Navbar";

import Hero from "./sections/Hero";
import TrustedTechnologies from "./components/TrustedTechnologies";
import About from "./sections/About";
import CoreExpertise from "./sections/CoreExpertise";
import Experience from "./sections/Experience";

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
      </main>
    </div>
  );
}

export default App;