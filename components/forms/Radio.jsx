'use client';
import React from 'react';
export function Radio({label,checked,onChange,name}){
return React.createElement('label',{style:{display:'inline-flex',alignItems:'center',gap:'10px',cursor:'pointer',fontSize:'var(--text-body-m)',color:'var(--text-secondary)'}},
React.createElement('span',{onClick:()=>onChange&&onChange(),style:{width:18,height:18,borderRadius:'50%',border:`1.5px solid ${checked?'var(--accent-primary)':'var(--border-strong)'}`,display:'inline-flex',alignItems:'center',justifyContent:'center',flexShrink:0}},
checked&&React.createElement('span',{style:{width:9,height:9,borderRadius:'50%',background:'var(--accent-primary)'}})),
label);
}
