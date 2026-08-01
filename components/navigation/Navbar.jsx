'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LINKS = [
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/work' },
  { label: 'Process', href: '/#process' },
  { label: 'About', href: '/about' },
];

export function Navbar(){
  const [open,setOpen]=React.useState(false);
  return React.createElement('nav',{style:{position:'sticky',top:0,zIndex:50,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'16px 32px',borderBottom:'1px solid var(--border-subtle)',background:'rgba(10,14,19,0.85)',backdropFilter:'blur(8px)',WebkitBackdropFilter:'blur(8px)'}},
    React.createElement(Link,{href:'/',style:{display:'flex',alignItems:'center'}},
      React.createElement(Image,{src:'/assets/logo-full-dark.svg',alt:'THODZ',width:110,height:24,priority:true,style:{height:22,width:'auto'}})),
    React.createElement('div',{style:{display:'flex',gap:'28px',alignItems:'center'},className:'nav-links-desktop'},
      LINKS.map(l=>React.createElement(Link,{key:l.label,href:l.href,style:{color:'var(--text-secondary)',fontSize:'var(--text-body-s)',textDecoration:'none',fontFamily:'var(--font-body)'}},l.label)),
      React.createElement(Link,{href:'/contact',style:{fontFamily:'var(--font-body)',fontWeight:'var(--weight-medium)',fontSize:'var(--text-body-s)',borderRadius:'var(--radius-sm)',padding:'10px 18px',background:'var(--accent-primary)',color:'var(--text-inverse)',textDecoration:'none',border:'1px solid var(--accent-primary)'}},'Start a project')));
}
