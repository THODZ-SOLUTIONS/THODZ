import { useId } from 'react';
import { Icon } from '@/components/core/Icon';

// Options are either plain strings or { value, label } pairs: the contact
// form sends stable English values to the API while showing localized labels.
//
// Same fix as Input: the label was adjacent to the control rather than
// associated with it, so the select announced as unnamed.
export function Select({ label, options = [], value, onChange, name }) {
  const id = useId();

  return (
    <div className="field">
      {label && (
        <label className="field-label" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="select-wrap">
        <select id={id} name={name} value={value} onChange={onChange} className="input">
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
