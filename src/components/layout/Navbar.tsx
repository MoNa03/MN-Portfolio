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
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">

          <Brand />

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
              >
                {link}
              </a>
            ))}

            <a
              href={profile.resume}
              className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Resume
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}