'use client';
import React from 'react';
export function Button({variant='primary',size='md',icon=null,iconPosition='left',disabled=false,children,onClick,type='button'}){
const pad={sm:'8px 14px',md:'11px 20px',lg:'14px 26px'}[size];
const fontSize={sm:'var(--text-body-s)',md:'var(--text-body-m)',lg:'var(--text-body-l)'}[size];
const base={fontFamily:'var(--font-body)',fontWeight:'var(--weight-medium)',fontSize,borderRadius:'var(--radius-sm)',padding:pad,display:'inline-flex',alignItems:'center',gap:'8px',cursor:disabled?'not-allowed':'pointer',border:'1px solid transparent',transition:'all var(--duration-base) var(--ease-standard)',opacity:disabled?0.45:1,letterSpacing:'var(--tracking-normal)'};
const variants={
primary:{background:'var(--accent-primary)',color:'var(--text-inverse)',borderColor:'var(--accent-primary)'},
secondary:{background:'transparent',color:'var(--text-primary)',borderColor:'var(--border-strong)'},
ghost:{background:'transparent',color:'var(--text-secondary)',borderColor:'transparent'},
danger:{background:'transparent',color:'var(--status-danger)',borderColor:'var(--status-danger)'}
};
const style={...base,...variants[variant]};
return React.createElement('button',{type,disabled,onClick,style,onMouseEnter:e=>{if(disabled)return;if(variant==='primary'){e.currentTarget.style.background='var(--accent-primary-hover)';e.currentTarget.style.borderColor='var(--accent-primary-hover)';e.currentTarget.style.boxShadow='var(--glow-cyan-sm)';}else if(variant==='secondary'){e.currentTarget.style.borderColor='var(--accent-primary)';e.currentTarget.style.color='var(--accent-primary)';}else if(variant==='ghost'){e.currentTarget.style.color='var(--text-primary)';e.currentTarget.style.background='var(--bg-2)';}else if(variant==='danger'){e.currentTarget.style.background='var(--status-danger)';e.currentTarget.style.color='var(--text-inverse)';}},
onMouseLeave:e=>{if(disabled)return;Object.assign(e.currentTarget.style,{background:variants[variant].background,color:variants[variant].color,borderColor:variants[variant].borderColor,boxShadow:'none'});}},
icon&&iconPosition==='left'?icon:null,children,icon&&iconPosition==='right'?icon:null);
}
