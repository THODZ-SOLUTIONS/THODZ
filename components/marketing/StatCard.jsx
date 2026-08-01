import React from 'react';
export function StatCard({value,label}){
return React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:'4px',padding:'0 24px',borderLeft:'1px solid var(--border-subtle)'}},
React.createElement('div',{style:{fontFamily:'var(--font-mono)',fontSize:'var(--text-display-m)',color:'var(--accent-primary)',fontWeight:'var(--weight-medium)',lineHeight:'var(--lh-tight)'}},value),
React.createElement('div',{style:{fontSize:'var(--text-body-s)',color:'var(--text-tertiary)',fontFamily:'var(--font-mono)',letterSpacing:'var(--tracking-wide)'}},label));
}
