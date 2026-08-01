'use client';
import React from 'react';
export function Switch({checked,onChange,label}){
return React.createElement('label',{style:{display:'inline-flex',alignItems:'center',gap:'10px',cursor:'pointer'}},
React.createElement('span',{onClick:()=>onChange&&onChange(!checked),style:{width:38,height:22,borderRadius:'var(--radius-pill)',background:checked?'var(--accent-primary)':'var(--bg-2)',border:`1px solid ${checked?'var(--accent-primary)':'var(--border-default)'}`,position:'relative',transition:'all var(--duration-base) var(--ease-standard)',flexShrink:0}},
React.createElement('span',{style:{position:'absolute',top:2,left:checked?18:2,width:16,height:16,borderRadius:'50%',background:checked?'var(--bg-void)':'var(--fg-3)',transition:'all var(--duration-base) var(--ease-standard)'}})),
label&&React.createElement('span',{style:{fontSize:'var(--text-body-m)',color:'var(--text-secondary)'}},label));
}
