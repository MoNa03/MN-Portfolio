export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto max-w-7xl px-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Mohan Nagaraj. All rights reserved.
      </div>
    </footer>
  );
}