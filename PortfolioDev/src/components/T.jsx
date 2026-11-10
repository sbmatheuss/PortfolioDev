// Renderiza texto destacando trechos "[ADICIONAR: ...]" para não passarem despercebidos.
const RE = /(\[ADICIONAR:[^\]]*\])/g;

export default function T({ children }) {
  return String(children)
    .split(RE)
    .map((part, i) =>
      part.startsWith('[ADICIONAR:') ? (
        <mark key={i} className="rounded bg-yellow-300 px-1 font-mono text-[0.85em] font-medium text-black">
          {part}
        </mark>
      ) : (
        part
      ),
    );
}
