// Renders a button only when it's actually clickable; a static span otherwise.
export function Tag({ children, active = false, onClick }) {
  const className = `tag${active ? ' tag--active' : ''}`;
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={className}>
        {children}
      </button>
    );
  }
  return <span className={className}>{children}</span>;
}
