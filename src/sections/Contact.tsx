import { Mail, MapPin, Download } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
//import { FaGithub, FaLinkedin } from "react-icons/fa";

import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import ContactCard from "../components/ContactCard";
import contact from "../data/contact";

export default function Contact() {
  return (
    <Section
      id="contact"
      spacing="sm"
    >
      <Container>

  <div className="grid items-center gap-8 lg:grid-cols-5">

  {/* Left Column */}
  <div className="lg:col-span-3">

    <h2 className="text-5xl font-bold leading-tight">
      Let's Build the
      <span className="block text-cyan-400">
        Future Together
      </span>
    </h2>

    <p className="mt-5 max-w-xl text-lg leading-8 text-slate-400">
      Whether you're building Software Defined Vehicles, intelligent embedded systems, or leading digital transformation initiatives, I'd welcome the opportunity to connect.
    </p>

    <p className="mt-4 max-w-xl text-lg leading-8 text-slate-500">
      Based in Munich, Germany and open to opportunities
      across Germany, India, UK and USA.
    </p>
 </div>

        {/* Contact Cards */}

          {/* Right Column */}

  <div className="lg:col-span-2">

    <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-sm">

      <ContactCard
        icon={<MapPin size={22} />}
        title="Location"
        value={contact.location}
      />

      <ContactCard
        icon={<Mail size={22} />}
        title="Email"
        value={contact.email}
        href={`mailto:${contact.email}`}
      />

      <ContactCard
        icon={<FaLinkedin size={22} />}
        title="LinkedIn"
        value="Connect with me"
        href={contact.linkedin}
      />

      <ContactCard
        icon={<Download size={22} />}
        title="Resume"
        value="Download Resume"
        href={contact.resume}
      />

    </div>

  </div>

  </div>

      </Container>
    </Section>
  );
}