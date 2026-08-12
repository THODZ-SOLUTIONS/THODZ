import React from 'react';
export function ProcessStep({index,title,description,isLast}){
return React.createElement('div',{style:{display:'flex',gap:'20px'}},
React.createElement('div',{style:{display:'flex',flexDirection:'column',alignItems:'center'}},
React.createElement('div',{style:{width:36,height:36,borderRadius:'50%',border:'1px solid var(--accent-primary)',color:'var(--accent-primary)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-mono)',fontSize:'var(--text-mono-s)',flexShrink:0}},index),
!isLast&&React.createElement('div',{style:{width:1,flex:1,background:'var(--border-default)',marginTop:'4px'}})),
React.createElement('div',{style:{paddingBottom:'32px'}},
React.createElement('h4',{style:{fontFamily:'var(--font-display)',fontSize:'var(--text-heading-s)',color:'var(--text-primary)',margin:'4px 0 8px'}},title),
React.createElement('p',{style:{fontSize:'var(--text-body-s)',color:'var(--text-secondary)',lineHeight:'var(--lh-normal)',margin:0,maxWidth:440}},description)));
}
