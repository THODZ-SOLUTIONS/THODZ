import { useId } from 'react';

// The label used to be rendered next to the input with nothing connecting the
// two. It looked right and announced wrong: a screen reader reaching the field
// found an unnamed text box, and Lighthouse flagged every input on the contact
// form. useId gives a stable id across server render and hydration, which a
// hand-rolled counter or the `name` prop would not — two forms on one page
// would collide, and a mismatched id is a hydration error.
export function Input({
  label,
  placeholder,
  type = 'text',
  helpText,
  error,
  value,
  onChange,
  mono = false,
  name,
  required = false,
}) {
  const id = useId();
  const noteId = `${id}-note`;
  const note = error || helpText;

  return (
    <div className="field">
      {label && (
        <label className="field-label" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        // The help text and the error share one element, so pointing at it
        // covers both; aria-invalid is what tells a screen reader the field is
        // the problem rather than just carrying a note.
        aria-describedby={note ? noteId : undefined}
        aria-invalid={error ? true : undefined}
        className={`input${error ? ' input--error' : ''}${mono ? ' input--mono' : ''}`}
      />
      {note && (
        <span id={noteId} className={`field-note${error ? ' field-note--error' : ''}`}>
          {note}
        </span>
      )}
    </div>
  );
}
