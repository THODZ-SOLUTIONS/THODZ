// A real <input type="radio">, visually hidden: the group gets native
// keyboard navigation and screen-reader semantics for free.
export function Radio({ label, checked, onChange, name }) {
  return (
    <label className="radio">
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={() => onChange && onChange()}
        className="sr-only"
      />
      <span className="radio-dot" aria-hidden="true" />
      {label}
    </label>
  );
}
