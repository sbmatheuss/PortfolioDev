import { experience } from '../data';
import Section from './Section';
import T from './T';

export default function Experience() {
  return (
    <Section id="experiencia" label="Experiência" title="Onde estou aprendendo na prática">
      {experience.map((job) => (
        <div
          key={job.title}
          className="grid gap-1.5 border-t border-line py-[22px] first:border-t-0 first:pt-1 sm:grid-cols-[150px_1fr] sm:gap-6"
        >
          <time className="pt-1 font-mono text-[12.5px] text-muted">
            <T>{job.period}</T>
          </time>
          <div>
            <h3 className="text-[17px] font-semibold">
              {job.title}{job.org && <em className="not-italic text-accent-text"> · {job.org}</em>}
            </h3>
            {job.bullets.length > 0 && (
              <ul className="ml-[18px] mt-2.5 list-disc text-[14.5px] text-muted">
                {job.bullets.map((b) => (
                  <li key={b} className="mb-1.5">
                    <T>{b}</T>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </Section>
  );
}
