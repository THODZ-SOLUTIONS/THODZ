'use client';
import React from 'react';
export function CaseStudyCard({tag,title,summary,stack=[],metric}){
return React.createElement('div',{style:{background:'var(--bg-1)',border:'1px solid var(--border-subtle)',borderRadius:'var(--radius-lg)',overflow:'hidden',display:'flex',flexDirection:'column',height:'100%',transition:'all var(--duration-base) var(--ease-standard)'},
onMouseEnter:e=>{e.currentTarget.style.borderColor='var(--border-strong)';},onMouseLeave:e=>{e.currentTarget.style.borderColor='var(--border-subtle)';}},
React.createElement('div',{className:'bg-grid',style:{height:120,background:'linear-gradient(160deg,var(--bg-2),var(--bg-1))',borderBottom:'1px solid var(--border-subtle)',display:'flex',alignItems:'flex-end',padding:'14px'}},
React.createElement('span',{style:{fontFamily:'var(--font-mono)',fontSize:'var(--text-label)',letterSpacing:'var(--tracking-label)',textTransform:'uppercase',color:'var(--accent-primary)'}},tag)),
React.createElement('div',{style:{padding:'22px',display:'flex',flexDirection:'column',gap:'12px',flex:1}},
React.createElement('h3',{style:{fontFamily:'var(--font-display)',fontSize:'var(--text-heading-s)',color:'var(--text-primary)',margin:0}},title),
React.createElement('p',{style:{fontSize:'var(--text-body-s)',color:'var(--text-secondary)',lineHeight:'var(--lh-normal)',margin:0}},summary),
React.createElement('div',{style:{display:'flex',gap:'6px',flexWrap:'wrap',marginTop:'auto'}},
stack.map(s=>React.createElement('span',{key:s,style:{fontFamily:'var(--font-mono)',fontSize:'10px',color:'var(--text-tertiary)',border:'1px solid var(--border-default)',borderRadius:'var(--radius-sm)',padding:'2px 7px'}},s))),
metric&&React.createElement('div',{style:{fontFamily:'var(--font-mono)',fontSize:'var(--text-body-s)',color:'var(--accent-primary)',marginTop:'4px'}},metric)));
}
