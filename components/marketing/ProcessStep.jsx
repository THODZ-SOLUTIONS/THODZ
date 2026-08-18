export function ProcessStep({ index, title, description, isLast }) {
  return (
    <div className="process-step">
      <div className="process-step-rail">
        <div className="process-step-index">{index}</div>
        {!isLast && <div className="process-step-line" />}
      </div>
      <div className="process-step-body">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
