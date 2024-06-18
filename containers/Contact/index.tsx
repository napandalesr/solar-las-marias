
import React from 'react';
import { ArrowDownCircle } from 'react-bootstrap-icons';
import Image from 'next/image';
import Link from 'next/link';

import { Props } from '@/types/props';
import useScreenSize from '@/hooks/useScreenSize';

const Contact = ({ navBar, setNavBar }: Props) => {
  const { width } = useScreenSize();

  return <section id="contact" className="h-screen w-screen flex relative flex-col-reverse md:flex-row">
  <section
      className="w-full md:w-1/2 h-full px-14 my-auto relative flex flex-col md:flex-row justify-center items-center bg-primary gap-6 md:gap-0">
    <Image
        className={`h-32 w-auto md:absolute top-24 md:top-44 lg:top-24 left-1/2 md:-translate-x-1/2 ${width > 760 ? navBar === 'contact' ? 'animate__animated animate__zoomIn' : 'animate__animated animate__rollOut' : ''}`}
        src={'/icons/logo-ligth.png'} width={620} height={449} alt=""/>
    <form
        className={`flex flex-col gap-1 md:gap-8 w-full ${width > 760 ? navBar === 'contact' ? 'animate__animated animate__slideInLeft' : 'animate__animated animate__slideOutLeft' : ''}`}>
      <h4 className="text-center mt-0 md:mt-56 xl:mt-32 text-xl md:text-2xl xl:text-3xl text-white">Contáctanos</h4>
      <input className="px-4 py-2 bg-transparent border-b-2 border-tertiary rounded-tr-xl text-white"
             type="text" placeholder="Nombre"/>
      <input className="px-4 py-2 bg-transparent border-b-2 border-tertiary rounded-tr-xl" type="text"
             placeholder="Correo"/>
      <input className="px-4 py-2 bg-transparent border-b-2 border-tertiary rounded-tr-xl" type="text"
             placeholder="Número de contacto"/>
      <button
          className="text-xl text-white px-8 py-2 mx-auto my-8 md:my-2 w-min rounded-3xl bg-secundary">Enviar
      </button>
    </form>
  </section>
  <section
      className={`w-[65%] hidden md:block ${width > 760 ? navBar === 'contact' ? 'animate__animated animate__slideInRight' : 'animate__animated animate__slideOutRight' : ''}`}>
    <video className="object-cover h-screen  brightness-50 object-top" muted autoPlay loop
           src="/videos/solar2.mp4"></video>
  </section>
  {
      width > 760 &&
    <span className="absolute left-1/2 -translate-x-1/2 bottom-[8vh] md:bottom-[2vh] flex gap-4">
      <Link className="rotate-180" href={'#news'} onClick={() => setNavBar('news')}><ArrowDownCircle
        className="text-white  animate__fadeInUpBig aspect-square h-10 2xl:h-auto"
        size={60}/> </Link>
      <Link href={'#footer'} onClick={() => setNavBar('footer')}><ArrowDownCircle
        className="text-white  animate__fadeInUpBig aspect-square h-10 2xl:h-auto"
        size={60}/> </Link>
    </span>
  }

  </section>;
}

export default Contact;