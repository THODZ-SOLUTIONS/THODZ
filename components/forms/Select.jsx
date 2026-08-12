'use client';
import React from 'react';
export function Select({label,options=[],value,onChange,name}){
return React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:'6px'}},
label&&React.createElement('label',{style:{fontSize:'var(--text-label)',letterSpacing:'var(--tracking-label)',textTransform:'uppercase',color:'var(--text-tertiary)',fontFamily:'var(--font-mono)'}},label),
React.createElement('select',{value,onChange,name,style:{background:'var(--bg-1)',border:'1px solid var(--border-default)',borderRadius:'var(--radius-sm)',padding:'11px 14px',color:'var(--text-primary)',fontSize:'var(--text-body-m)',fontFamily:'var(--font-body)',outline:'none',appearance:'none'}},
options.map(o=>React.createElement('option',{key:o,value:o,style:{background:'var(--bg-1)'}},o))));
}
