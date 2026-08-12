import React from 'react';
export function Toast({tone='accent',title,message}){
const colors={accent:'var(--accent-primary)',amber:'var(--accent-secondary)',danger:'var(--status-danger)'}[tone];
return React.createElement('div',{style:{display:'flex',gap:'12px',alignItems:'flex-start',background:'var(--bg-2)',border:'1px solid var(--border-default)',borderLeft:`2px solid ${colors}`,borderRadius:'var(--radius-md)',padding:'14px 16px',width:'100%',maxWidth:320,boxShadow:'var(--shadow-raised)'}},
React.createElement('div',{style:{width:8,height:8,borderRadius:'50%',background:colors,marginTop:6,flexShrink:0}}),
React.createElement('div',null,
React.createElement('div',{style:{fontFamily:'var(--font-body)',fontWeight:'var(--weight-semibold)',fontSize:'var(--text-body-m)',color:'var(--text-primary)'}},title),
message&&React.createElement('div',{style:{fontSize:'var(--text-body-s)',color:'var(--text-secondary)',marginTop:2}},message)));
}
