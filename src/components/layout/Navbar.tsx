import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import Brand from "./Brand";
import Container from "../ui/Container";
import profile from "../../data/profile";

const links = [
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Contact",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">

          <Brand />

          <button onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-slate-300 transition hover:bg-slate-800 md:hidden"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="border-t border-white/10 bg-slate-950 md:hidden"
            >
              <nav className="flex flex-col px-6 py-6">
                {links.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="py-3 text-slate-300 transition hover:text-cyan-400"
                  >
                    {link}
                  </a>
                ))}

                <a
                  href={profile.resume}
                  className="mt-4 rounded-xl bg-cyan-500 px-5 py-3 text-center font-semibold text-slate-950 hover:bg-cyan-400"
                >
                  Resume
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}