export function Textarea({ label, placeholder, value, onChange, name, required = false, rows = 4 }) {
  return (
    <div className="field">
      {label && <label className="field-label">{label}</label>}
      <textarea
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
