'use client';
import React from 'react';
export function Input({label,placeholder,type='text',helpText,error,value,onChange,mono=false,name,required=false}){
const [focused,setFocused]=React.useState(false);
return React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:'6px',fontFamily:'var(--font-body)'}},
label&&React.createElement('label',{style:{fontSize:'var(--text-label)',letterSpacing:'var(--tracking-label)',textTransform:'uppercase',color:'var(--text-tertiary)',fontFamily:'var(--font-mono)'}},label),
React.createElement('input',{type,name,required,placeholder,value,onChange,onFocus:()=>setFocused(true),onBlur:()=>setFocused(false),style:{
background:'var(--bg-1)',border:`1px solid ${error?'var(--status-danger)':focused?'var(--accent-primary)':'var(--border-default)'}`,
borderRadius:'var(--radius-sm)',padding:'11px 14px',color:'var(--text-primary)',fontSize:'var(--text-body-m)',fontFamily:mono?'var(--font-mono)':'var(--font-body)',
outline:'none',boxShadow:focused?'var(--shadow-focus-ring)':'none',transition:'all var(--duration-fast) var(--ease-standard)'}}),
(helpText||error)&&React.createElement('span',{style:{fontSize:'var(--text-body-s)',color:error?'var(--status-danger)':'var(--text-tertiary)'}},error||helpText));
}
