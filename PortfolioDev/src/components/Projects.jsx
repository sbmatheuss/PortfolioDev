import { FaGithub } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { projects } from '../data';
import Section from './Section';
import Tags from './Tags';
import T from './T';

const iconLink =
  'grid size-10 place-items-center rounded-[10px] text-muted transition-colors hover:bg-bg hover:text-ink';

function Featured({ p }) {
  return (
    <article className="mb-5 overflow-hidden rounded-[18px] border border-line bg-surface transition duration-200 hover:-translate-y-0.5 hover:border-accent">
      {p.image && (
        <img src={p.image} alt={p.imageAlt} loading="lazy" className="aspect-[16/7] w-full border-b border-line object-cover" />
      )}
      <div className="px-6 pb-6 pt-[22px]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-[22px] font-bold leading-tight tracking-tight">{p.title}</h3>
            <p className="mt-1 font-mono text-xs text-muted">
              <T>{p.kind}</T>
            </p>
          </div>
          <div className="flex shrink-0 gap-1">
            {p.live && (
              <a className={iconLink} href={p.live} target="_blank" rel="noreferrer" aria-label={`Ver o site ${p.title} ao vivo`}>
                <FiArrowUpRight size={20} aria-hidden />
              </a>
            )}
            {p.code && (
              <a className={iconLink} href={p.code} target="_blank" rel="noreferrer" aria-label={`Ver o código de ${p.title} no GitHub`}>
                <FaGithub size={20} aria-hidden />
              </a>
            )}
          </div>
        </div>

        {p.description && <p className="mt-4 text-[15px] leading-relaxed text-muted">{p.description}</p>}

        {p.problem && (
          <dl className="mt-[18px] grid gap-3.5 sm:grid-cols-3">
            {[
              ['Problema', p.problem],
              ['Solução', p.solution],
              ['Resultado', p.result],
            ]
              .filter(([, desc]) => desc)
              .map(([term, desc], i, arr) => (
                <div key={term} className={`border-t-2 pt-2.5 ${i === arr.length - 1 ? 'border-accent' : 'border-line'}`}>
                  <dt className="mb-1 font-mono text-[11.5px] font-medium uppercase tracking-[0.12em] text-muted">{term}</dt>
                  <dd className="text-sm leading-normal">
                    <T>{desc}</T>
                  </dd>
                </div>
              ))}
          </dl>
        )}
        <Tags items={p.tags} />
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projetos" label="Projetos" title="Trabalho selecionado">
      {projects.featured.map((p) => (
        <Featured key={p.title} p={p} />
      ))}

      <div className="mt-2 grid gap-3 sm:grid-cols-2">
        {projects.more.map((m) => {
          const Wrap = m.href ? 'a' : 'div';
          return (
            <Wrap
              key={m.title}
              {...(m.href && { href: m.href, target: '_blank', rel: 'noreferrer' })}
              className="flex flex-col rounded-[14px] border border-line bg-surface p-[18px] no-underline transition-colors hover:border-ink"
            >
              <h4 className="flex justify-between gap-2 text-[15.5px] font-semibold">
                <T>{m.title}</T>
                {m.href && <FiArrowUpRight size={16} className="shrink-0 text-muted" aria-hidden />}
              </h4>
              <p className="mt-1.5 flex-1 text-[13.5px] leading-normal text-muted">
                <T>{m.text}</T>
              </p>
              <Tags items={m.tags} outline />
            </Wrap>
          );
        })}
      </div>
    </Section>
  );
}
