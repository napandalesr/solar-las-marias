import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownCircle } from 'react-bootstrap-icons';

import { Props } from '@/types/props';
import useScreenSize from '@/hooks/useScreenSize';

const Footer = ({ navBar, setNavBar }: Props) => {
  const { width } = useScreenSize();

  return <footer className="h-[60vh] md:h-screen flex flex-col relative" id="footer">
  <span
      className={`bg-primary border-b-2 md:h-[40vh] relative px-2 ${width > 760 ? navBar == 'footer' ? ' animate__zoomIn' : ' animate__zoomOut' : ''}`}>
    {
        width > 760 && <>
        <Link className="rotate-180 hidden md:block absolute left-1/2 -translate-x-1/2 top-[10vh]" href={'#contact'}
              onClick={() => setNavBar('contact')}>
          <ArrowDownCircle
            className="h-32 xl:h-auto text-white  animate__fadeInUpBig !animate-float-up-sm" size={180}/>
        </Link>
        <Link className="rotate-180 absolute left-1/2 -translate-x-1/2 top-8 md:top-[10vh] md:hidden"
              href={'#contact'} onClick={() => setNavBar('contact')}>
          <ArrowDownCircle className="text-white  animate__fadeInUpBig" size={80}/>
        </Link>
      </>
    }
  </span>
      <section
          className={`bg-primary h-[70vh] md:h-[60vh] absolute w-full bottom-0 p-4 md:p-20 flex flex-col md:flex-row text-white ${width > 760 ? navBar == 'footer' ? ' animate__zoomIn' : ' animate__zoomOut' : ''}`}>
    <span className="md:w-1/2 absolute bottom-56 md:bottom-auto right-4 md:right-auto top-0 md:top-auto md:relative flex flex-col md:flex-col">
      <Image className="w-32 md:w-40 xl:w-60" src={'/icons/logo-ligth.png'} width={620} height={449} alt="Logo"/>
    </span>
        <span className="flex flex-col gap-8 md:text-base xl:text-xl w-1/3">
      <Link href={''}>Sobre nosotros</Link>
      <Link href={''}>Nuestros Proyectos</Link>
      <Link href={''}>Contáctanos</Link>
      <Link href={''}>PQRS</Link>
    </span>
        <span className="flex flex-col gap-2 md:text-lg xl:text-2xl">
      <p>contacto@solarlasmarias.com</p>
    </span>
        <section
            className="absolute bottom-0 left-0 z-0 w-full text-sm xl:text-inherit h-16 xl:h-24 bg-primary brightness-75 flex items-center px-8">
          Derechos reservados
        </section>
      </section>
    </footer>;
}

export default Footer;