"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type props = {
  location: string,
  setNavBar: any
}

const Header = ({ location, setNavBar }: props) => {
  const [screenWith, setScreenWith] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(()=>{
    setScreenWith(window.screen.width);
  },[]);

  const classLi = 'p-4 m-auto ';
  return <>
  <header className={`w-screen fixed md:absolute top-0 text-white bg-primary z-50 ${screenWith > 760 ? location == 'top' ? 'animate__animated animate__backInDown': 'animate__animated animate__backOutUp' : ''}`}>
    <section className={`${!show && 'h-[10vh]'} flex w-screen justify-between flex-col md:flex-row z-50 relative transition-all ease-in-out`}>
      <span className='my-auto ml-[5vw] mt-2 flex justify-between'>
        <Link href={''} className='font-bold text-xl'><Image className='h-14 w-auto' src={'/icons/logo-solid.png'} alt='Logo' width={100} height={100}/></Link>
        <button onClick={()=>setShow(!show)} className='font-bold text-xl md:hidden'><Image className='h-8 w-auto mr-4' src={'/icons/menu.png'} alt='Logo' width={100} height={100}/></button>
      </span>
      <ul className={`flex gap-6 flex-col md:flex-row bg-primary z-50 md:bg-transparent ${screenWith < 760 ? show ? 'block' : 'hidden' : ''}`}>
        <li className={`${classLi} border-b-2`}>
          <Link onClick={() => setNavBar('top')} href={'#top'}>Inicio</Link>
        </li>
        <li className={`${classLi} border-b-2 w-full text-center mr-96`}>
          <Link href={'#about'} onClick={() => setNavBar('about')}>Nosotros</Link>
        </li>
        <li className={`${classLi} pr-0`}>
          <Link href={'#projects'} onClick={()=>setNavBar('projects')}>Proyectos</Link>
        </li>
        <li className='w-[5vw]'></li>
      </ul>
    </section>
  </header>
  </>;
}

export default Header;