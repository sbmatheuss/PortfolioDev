import { numberOf } from '../data';
import Reveal from './Reveal';

export default function Section({ id, label, title, children }) {
  return (
    <Reveal id={id}>
      <div className="mb-[18px] flex items-center gap-2.5 font-mono text-[12.5px] font-medium uppercase tracking-[0.14em] text-accent-text after:h-px after:flex-1 after:bg-line">
        {numberOf(id)} · {label}
      </div>
      <h2 className="mb-[18px] font-display text-3xl font-bold leading-[1.15] tracking-tight">{title}</h2>
      {children}
    </Reveal>
  );
}
