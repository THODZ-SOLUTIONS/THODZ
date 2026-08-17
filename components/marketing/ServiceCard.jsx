export function ServiceCard({ icon, title, description, index }) {
  return (
    <div className="card service-card">
      <div className="service-card-top">
        <div className="service-card-icon">{icon}</div>
        {index && <span className="service-card-index">{index}</span>}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
