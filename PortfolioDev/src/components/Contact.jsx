import { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { contact, numberOf, profile } from '../data';
import Reveal from './Reveal';

const btn =
  'inline-flex items-center gap-2 rounded-[10px] border px-[18px] py-[11px] text-[14.5px] font-semibold no-underline transition hover:-translate-y-px';

export default function Contact() {
  const { email, linkedin } = profile;
  const [msg, setMsg] = useState('');

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setMsg('Copiado ✓');
    } catch {
      setMsg(`Selecione e copie: ${email}`);
    }
    setTimeout(() => setMsg(''), 2200);
  };

  return (
    <Reveal id="contato">
      <div className="rounded-[22px] bg-ink p-7 text-bg sm:p-10">
        <div className="mb-[18px] font-mono text-[12.5px] font-medium uppercase tracking-[0.14em] opacity-70">{numberOf('contato')} · Contato</div>
        <h2 className="mb-4 max-w-[16ch] font-display text-[clamp(28px,3.4vw,40px)] font-bold leading-[1.15] tracking-tight">
          {contact.title}
        </h2>
        <p className="mb-6 max-w-[46ch] opacity-75">{contact.text}</p>
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="rounded-[10px] border border-bg/25 bg-bg/10 px-4 py-3 font-mono text-[15px] font-medium">{email}</span>
          <button type="button" onClick={copy} className={`${btn} cursor-pointer border-accent-btn bg-accent-btn text-accent-ink`}>
            Copiar e-mail
          </button>
          <a href={linkedin} target="_blank" rel="noreferrer" className={`${btn} border-bg/30 hover:border-bg`}>
            <FaLinkedin size={16} aria-hidden /> LinkedIn
          </a>
          <span role="status" aria-live="polite" className="font-mono text-[13px] font-medium">
            {msg}
          </span>
        </div>
      </div>
    </Reveal>
  );
}
