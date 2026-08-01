import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer(){
  return React.createElement('footer',{style:{borderTop:'1px solid var(--border-subtle)',background:'var(--bg-void)',padding:'56px 32px 32px'}},
    React.createElement('div',{style:{maxWidth:'var(--container-max)',margin:'0 auto',display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:40}},
      React.createElement('div',{style:{maxWidth:320}},
        React.createElement(Image,{src:'/assets/logo-full-dark.svg',alt:'THODZ',width:110,height:24,style:{height:22,width:'auto',marginBottom:16}}),
        React.createElement('p',{style:{fontSize:'var(--text-body-s)',color:'var(--text-tertiary)',lineHeight:'var(--lh-normal)',margin:0}},'A full-stack engineering studio. Web, mobile, desktop, and infrastructure systems, built and operated by one accountable team.')),
      React.createElement('div',{style:{display:'flex',gap:64,flexWrap:'wrap'}},
        React.createElement(FooterCol,{title:'Company',links:[{label:'Services',href:'/#services'},{label:'Work',href:'/work'},{label:'About',href:'/about'},{label:'Contact',href:'/contact'}]}),
        React.createElement(FooterCol,{title:'Contact',links:[{label:'support@thodz.com',href:'mailto:support@thodz.com'},{label:'+213 783 85 35 44',href:'tel:+213783853544'}]}))),
    React.createElement('div',{style:{maxWidth:'var(--container-max)',margin:'40px auto 0',paddingTop:24,borderTop:'1px solid var(--border-subtle)',display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:12}},
      React.createElement('span',{style:{fontFamily:'var(--font-mono)',fontSize:'var(--text-label)',color:'var(--text-tertiary)'}},'© '+new Date().getFullYear()+' THODZ SOLUTIONS. All rights reserved.'),
      React.createElement('span',{style:{fontFamily:'var(--font-mono)',fontSize:'var(--text-label)',color:'var(--text-tertiary)'}},'thodz.com')));
}

function FooterCol({title,links}){
  return React.createElement('div',null,
    React.createElement('div',{style:{fontFamily:'var(--font-mono)',fontSize:'var(--text-label)',letterSpacing:'var(--tracking-label)',textTransform:'uppercase',color:'var(--text-tertiary)',marginBottom:14}},title),
    React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:10}},
      links.map(l=>React.createElement(Link,{key:l.label,href:l.href,style:{color:'var(--text-secondary)',fontSize:'var(--text-body-s)',textDecoration:'none'}},l.label))));
}
