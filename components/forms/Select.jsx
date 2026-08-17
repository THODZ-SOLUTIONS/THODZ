import { Icon } from '@/components/core/Icon';

// Options are either plain strings or { value, label } pairs: the contact
// form sends stable English values to the API while showing localized labels.
export function Select({ label, options = [], value, onChange, name }) {
  return (
    <div className="field">
      {label && <label className="field-label">{label}</label>}
      <div className="select-wrap">
        <select name={name} value={value} onChange={onChange} className="input">
          {options.map((o) => {
            const opt = typeof o === 'string' ? { value: o, label: o } : o;
            return (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            );
          })}
        </select>
        <span className="select-chevron" aria-hidden="true">
          <Icon name="ChevronDown" size={16} />
        </span>
      </div>
    </div>
  );
}
