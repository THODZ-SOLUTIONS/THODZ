import React from 'react';
export function Badge({children,tone='neutral'}){
const tones={
neutral:{background:'var(--bg-2)',color:'var(--text-secondary)',borderColor:'var(--border-default)'},
accent:{background:'rgba(59,130,246,0.1)',color:'var(--accent-primary)',borderColor:'rgba(59,130,246,0.35)'},
amber:{background:'rgba(255,181,69,0.1)',color:'var(--accent-secondary)',borderColor:'rgba(255,181,69,0.35)'},
danger:{background:'rgba(255,92,92,0.1)',color:'var(--status-danger)',borderColor:'rgba(255,92,92,0.35)'}
};
const t=tones[tone];
return React.createElement('span',{style:{display:'inline-flex',alignItems:'center',gap:'6px',fontFamily:'var(--font-mono)',fontSize:'var(--text-label)',letterSpacing:'var(--tracking-label)',textTransform:'uppercase',padding:'3px 9px',borderRadius:'var(--radius-pill)',border:`1px solid ${t.borderColor}`,background:t.background,color:t.color}},children);
}
