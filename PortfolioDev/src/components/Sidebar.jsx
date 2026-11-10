import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiDownload, FiMail } from 'react-icons/fi';
import { profile, sections } from '../data';
import useScrollSpy from '../hooks/useScrollSpy';
import ThemeToggle from './ThemeToggle';
import T from './T';

const ids = sections.map((s) => s.id);
const btn =
  'inline-flex items-center gap-2 rounded-[10px] border px-[18px] py-[11px] text-[14.5px] font-semibold no-underline transition hover:-translate-y-px';
const iconLink =
  'grid size-10 place-items-center rounded-[10px] text-muted transition-colors hover:bg-surface hover:text-ink';

export default function Sidebar() {
  const active = useScrollSpy(ids);
  const { name, role, stack, status, pitch, github, linkedin, cv, cvPlaceholder } = profile;

  return (
    <header className="flex flex-col py-14 min-[960px]:sticky min-[960px]:top-0 min-[960px]:h-screen min-[960px]:overflow-y-auto">
      <span className="inline-flex w-max items-center gap-2 rounded-full border border-line bg-surface py-1.5 pl-2.5 pr-3 font-mono text-[12.5px] font-medium text-muted">
        <i className="size-2 rounded-full bg-ok [animation:pulse-ring_2.2s_infinite]" aria-hidden />
        <T>{status}</T>
      </span>

      <h1 className="mb-2.5 mt-5 font-display text-[clamp(40px,5vw,58px)] font-extrabold leading-[1.02] tracking-tight">
        {name}
      </h1>
      <p className="mb-3.5 text-lg font-semibold">
        {role} <span className="text-accent-text">·</span> {stack}
      </p>
      <p className="max-w-[34ch] text-[16.5px] text-muted">{pitch}</p>

      <div className="mt-6 flex flex-wrap items-center gap-2.5">
        <a href="#projetos" className={`${btn} border-accent-btn bg-accent-btn text-accent-ink hover:brightness-110`}>
          Ver projetos
        </a>
        {cv ? (
          <a href={cv} download className={`${btn} border-line bg-surface hover:border-ink`}>
            <FiDownload size={16} aria-hidden /> Baixar CV
          </a>
        ) : (
          <span aria-disabled="true" className={`${btn} cursor-not-allowed border-line bg-surface text-muted`}>
            <FiDownload size={16} aria-hidden /> Baixar CV
          </span>
        )}
      </div>
      {!cv && (
        <p className="mt-2 text-xs">
          <T>{cvPlaceholder}</T>
        </p>
      )}

      <nav aria-label="Seções" className="mt-10 hidden min-[960px]:block">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            aria-current={active === id ? 'true' : undefined}
            className={`flex items-center gap-3.5 py-2 font-mono text-[12.5px] font-medium uppercase tracking-[0.12em] no-underline transition-colors before:h-px before:bg-current before:transition-all hover:text-ink hover:before:w-14 hover:before:bg-accent ${
              active === id ? 'text-ink before:w-14 before:bg-accent' : 'text-muted before:w-7'
            }`}
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="mt-auto flex items-center gap-1.5 pt-7">
        <a className={iconLink} href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub size={20} aria-hidden />
        </a>
        <a className={iconLink} href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={20} aria-hidden />
        </a>
        <a className={iconLink} href="#contato" aria-label="E-mail">
          <FiMail size={20} aria-hidden />
        </a>
        <span className="mx-1.5 h-[22px] w-px bg-line" aria-hidden />
        <ThemeToggle />
      </div>
    </header>
  );
}
