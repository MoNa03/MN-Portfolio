import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import TrustedTechnologies from "./components/TrustedTechnologies";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <TrustedTechnologies />
    </div>
  );
}

export default App;