import T from './T';

export default function Tags({ items, outline }) {
  return (
    <ul className="mt-3 flex list-none flex-wrap gap-1.5">
      {items.map((t) => (
        <li
          key={t}
          className={`rounded-full px-2.5 py-1 font-mono text-xs font-medium ${
            outline ? 'border border-line text-muted' : 'bg-accent-soft text-accent-text'
          }`}
        >
          <T>{t}</T>
        </li>
      ))}
    </ul>
  );
}
