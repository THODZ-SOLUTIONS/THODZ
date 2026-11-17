import { useId } from 'react';

// Same fix as Input and Select: the label sat next to the control instead of
// being associated with it. Lighthouse did not flag this one — a placeholder
// can stand in as an accessible name of last resort — but a placeholder
// disappears the moment someone types, so the field ends up unnamed exactly
// when a screen reader user is reviewing what they wrote.
export function Textarea({ label, placeholder, value, onChange, name, required = false, rows = 4 }) {
  const id = useId();

  return (
    <div className="field">
      {label && (
        <label className="field-label" htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        required={required}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input"
      />
    </div>
  );
}
