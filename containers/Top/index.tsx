import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownCircle, ArrowDownSquareFill } from 'react-bootstrap-icons';

import useScreenSize from '@/hooks/useScreenSize';
import { Props } from '@/types/props';

const Top = ({navBar, setNavBar}: Props) => {
  const {width} = useScreenSize();
  return <section className="relative h-screen w-screen" id="top">
    <Link onClick={() => setNavBar('top')}
              className={`${width > 760 && 'animate__animated animate__fadeInUp'} ${navBar === 'top' && 'hidden'} fixed right-12 bottom-12 z-30`}
              href={'#top'}><ArrowDownSquareFill
            className={`transition-all duration-500 ease-in-out ${navBar === "projects" || navBar === "news"  ? "text-tertiary" : "text-secundary"} rotate-180`} size={50}/></Link>
  <Image
      className={`h-screen w-full object-cover hidden md:block ${width > 760 ? navBar == 'top' ? 'animate__animated animate__bounceInUp' : 'animate__animated animate__bounceOutUp' : ''}`}
      src={'/images/solar_better.jpg'} quality={100} width={6000} height={3600} alt=""/>
  <span
      className="absolute mx-14 md:mx-0 mt-8 md:mt-0 md:left-auto md:translate-x-0 top-[20vh] text-white text-center md:text-right md:right-[5vw] z-10 md:w-[60%] md:mr-8">
    <h1 className={`font-bold text-4xl md:text-7xl xl:text-8xl ${width > 760 ? navBar == 'top' && ' animate__fadeInDown' : ''}`}>Solar Las Marías</h1>
    <p className={`md:text-xl xl:text-2xl mt-4 font-medium md:pl-36 max-w-[920px] float-right ${width > 760 ? navBar === 'top' && ' animate__fadeInDown' : ''}`}>
      Una solución energética que se construye aprovechando el poder del sol y las mejores
      tecnologías para dar al servicio de los colombianos 99.5 megas de energía sostenible.
    </p>
  </span>
  <Image
      className={`z-0 h-screen object-cover md:hidden ${width > 760 ? navBar == 'top' ? 'animate__animated animate__bounceInUp' : 'animate__animated animate__bounceOutUp' : ''}`}
      src={'/images/solar11.jpg'} width={6000} height={3600} alt=""/>
  <span
      className="bg-gradient-to-bl from-black/30 to-transparent absolute top-0 left-0 right-0 bottom-0 z-0"/>

  {
      width > 760 &&
    <span className="absolute left-1/2 -translate-x-1/2 bottom-[8vh] md:bottom-[2vh] Z-50">
        <Link href={'#about'} onClick={() => setNavBar('about')}><ArrowDownCircle
          className="text-white animate__animated animate__fadeInUpBig !animate-float-up-sm Z-50"
          size={60}/> </Link>
      </span>
  }
</section>;
}

export default Top;