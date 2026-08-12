'use client';
import React from 'react';
export function ServiceCard({icon,title,description,index}){
return React.createElement('div',{style:{background:'var(--bg-1)',border:'1px solid var(--border-subtle)',borderRadius:'var(--radius-lg)',padding:'28px',display:'flex',flexDirection:'column',gap:'16px',position:'relative',transition:'all var(--duration-base) var(--ease-standard)',cursor:'default'},
onMouseEnter:e=>{e.currentTarget.style.borderColor='var(--accent-primary)';e.currentTarget.style.boxShadow='var(--glow-cyan-sm)';e.currentTarget.style.transform='translateY(-2px)';},
onMouseLeave:e=>{e.currentTarget.style.borderColor='var(--border-subtle)';e.currentTarget.style.boxShadow='none';e.currentTarget.style.transform='none';}},
React.createElement('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}},
React.createElement('div',{style:{width:44,height:44,borderRadius:'var(--radius-md)',background:'rgba(59,130,246,0.08)',border:'1px solid rgba(59,130,246,0.25)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--accent-primary)'}},icon),
index&&React.createElement('span',{style:{fontFamily:'var(--font-mono)',fontSize:'var(--text-label)',color:'var(--text-tertiary)'}},index)),
React.createElement('h3',{style:{fontFamily:'var(--font-display)',fontSize:'var(--text-heading-s)',color:'var(--text-primary)',margin:0}},title),
React.createElement('p',{style:{fontSize:'var(--text-body-s)',lineHeight:'var(--lh-normal)',color:'var(--text-secondary)',margin:0}},description));
}
