import { about } from '../data';
import Section from './Section';
import Tags from './Tags';
import T from './T';

export default function About() {
  return (
    <Section id="sobre" n="01" label="Sobre" title={about.title}>
      <div className="max-w-[62ch] space-y-3.5 text-muted">
        {about.text.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <ul aria-label="Números de impacto" className="mt-7 grid list-none grid-cols-3 gap-2 sm:gap-3">
        {about.metrics.map((m) => (
          <li key={m.label} className="rounded-[14px] border border-line bg-surface px-3 py-3.5 sm:px-[18px] sm:py-[18px]">
            <b className="block font-display text-2xl font-extrabold leading-none tracking-tight sm:text-3xl">
              <T>{m.value}</T>
            </b>
            <span className="mt-1.5 block text-xs leading-snug text-muted sm:text-[13.5px]">
              <T>{m.label}</T>
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {about.skills.map((s) => (
          <div key={s.title} className="rounded-[14px] border border-line bg-surface px-[18px] py-4">
            <h3 className="mb-2 text-sm font-semibold">{s.title}</h3>
            <p className="text-[13.5px] leading-normal text-muted">{s.context}</p>
            <Tags items={s.tags} />
          </div>
        ))}
      </div>
    </Section>
  );
}
