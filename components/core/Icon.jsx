import * as Icons from 'lucide-react';

export function Icon({ name, size = 20, ...rest }) {
  const Cmp = Icons[name];
  if (!Cmp) return null;
  return <Cmp size={size} strokeWidth={1.75} {...rest} />;
}
