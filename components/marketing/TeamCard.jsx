import Image from 'next/image';

// The person who will actually answer your email.
export function TeamCard({ name, role, photo, bio, credentials = [], links = [] }) {
  const live = links.filter((l) => l.href);

  return (
    <div className="card team-card">
      <div className="team-card-photo">
        {photo ? (
          <Image src={photo} alt={name} width={360} height={360} sizes="180px" />
        ) : (
          <span className="team-card-initials">
            {name
              .split(' ')
              .map((p) => p[0])
              .join('')}
          </span>
        )}
      </div>

      <div className="team-card-main">
        <div>
          <h3>{name}</h3>
          <div className="team-card-role">{role}</div>
        </div>

        <p className="team-card-bio">{bio}</p>

        {credentials.length > 0 && (
          <ul className="dash-list">
            {credentials.map((c) => (
              <li key={c}>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        )}

        {live.length > 0 && (
          <div className="team-card-links">
            {live.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                {`${l.label} →`}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
