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
  return (
    <div className="field">
      {label && <label className="field-label">{label}</label>}
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`input${error ? ' input--error' : ''}${mono ? ' input--mono' : ''}`}
      />
      {(helpText || error) && (
        <span className={`field-note${error ? ' field-note--error' : ''}`}>{error || helpText}</span>
      )}
    </div>
  );
}
