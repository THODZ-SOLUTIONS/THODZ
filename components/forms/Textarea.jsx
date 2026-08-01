'use client';
import React from 'react';
export function Textarea({label,placeholder,value,onChange,name,required=false,rows=4}){
const [focused,setFocused]=React.useState(false);
return React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:'6px',fontFamily:'var(--font-body)'}},
label&&React.createElement('label',{style:{fontSize:'var(--text-label)',letterSpacing:'var(--tracking-label)',textTransform:'uppercase',color:'var(--text-tertiary)',fontFamily:'var(--font-mono)'}},label),
React.createElement('textarea',{name,required,rows,placeholder,value,onChange,onFocus:()=>setFocused(true),onBlur:()=>setFocused(false),style:{
background:'var(--bg-1)',border:`1px solid ${focused?'var(--accent-primary)':'var(--border-default)'}`,
borderRadius:'var(--radius-sm)',padding:'11px 14px',color:'var(--text-primary)',fontSize:'var(--text-body-m)',fontFamily:'var(--font-body)',
outline:'none',resize:'vertical',boxShadow:focused?'var(--shadow-focus-ring)':'none',transition:'all var(--duration-fast) var(--ease-standard)'}}));
}
