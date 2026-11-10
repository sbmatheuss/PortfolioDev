import { useEffect, useRef, useState } from 'react';

// <section> com entrada suave ao rolar. prefers-reduced-motion zera a transição em index.css.
export default function Reveal({ id, children }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`mb-24 scroll-mt-8 transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
        shown ? 'translate-y-0 opacity-100' : 'translate-y-3.5 opacity-0'
      }`}
    >
      {children}
    </section>
  );
}
