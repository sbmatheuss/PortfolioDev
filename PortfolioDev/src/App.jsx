import { profile, sections } from './data';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="absolute -left-[999px] top-2 z-50 rounded-lg bg-ink px-3.5 py-2 text-bg focus:left-2"
      >
        Pular para o conteúdo
      </a>
      <div className="mx-auto grid max-w-[1180px] gap-x-[72px] px-5 sm:px-7 min-[960px]:grid-cols-[minmax(300px,0.9fr)_1.4fr]">
        <Sidebar />
        <main id="conteudo" className="pb-16 pt-6 min-[960px]:pt-[72px]">
          <About />
          {sections.some((s) => s.id === 'projetos') && <Projects />}
          <Experience />
          <Contact />
          <footer className="pt-3 font-mono text-[13px] text-muted">
            © {new Date().getFullYear()} {profile.name}
          </footer>
        </main>
      </div>
    </>
  );
}
