'use client';
import React from 'react';
export function Tag({children,active=false,onClick}){
return React.createElement('button',{onClick,style:{fontFamily:'var(--font-mono)',fontSize:'var(--text-mono-s)',padding:'6px 12px',borderRadius:'var(--radius-sm)',border:`1px solid ${active?'var(--accent-primary)':'var(--border-default)'}`,background:active?'rgba(59,130,246,0.08)':'transparent',color:active?'var(--accent-primary)':'var(--text-secondary)',cursor:onClick?'pointer':'default',transition:'all var(--duration-fast) var(--ease-standard)'}},children);
}
