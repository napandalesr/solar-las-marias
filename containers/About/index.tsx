import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownCircle } from 'react-bootstrap-icons';

import { Props } from '@/types/props';
import useScreenSize from '@/hooks/useScreenSize';

const About = ({navBar, setNavBar}: Props) => {
  const {width} = useScreenSize();
  return <section className="relative w-full" id="about">
  <span
      className="z-10 w-full absolute top-6 md:top-[20vh] xl:top-[24vh] text-primary left-8 md:left-16 xl:left-24 flex flex-col items-start justify-start gap-8">
    <p className={`md:text-2xl lg:text-3xl 2xl:text-4xl md:mt-4 w-1/2 md:w-[35%] xl:w-[37%] ${width > 760 ? navBar == 'about' ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__slideOutLeft' : ''}`}>
      En una extensión de 200 hectáreas bordeadas por el Río Guachicono, <strong>la Granja Solar Las Marías se reconoce hoy como la solución Solar más grande del Suroccidente colombiano</strong>.
    </p>
    <Link href={"#contact"}
          className={`rounded-3xl bg-primary text-white text-lg xl:text-xl font-medium shadow-lg px-6 py-2 ${width > 760 ? navBar == 'about' ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__slideOutLeft' : ''}`}>Contáctanos</Link>
  </span>
  <Image
      className={`z-0 h-screen object-cover ${width > 760 ? navBar === 'about' ? 'animate__animated animate__fadeInRight' : 'animate__animated animate__fadeOutRight' : ''}`}
      src={'/images/solar2.jpg'} width={6000} height={3600} alt=""/>
  {
      width > 760 &&
    <span className="absolute left-1/2 -translate-x-1/2 bottom-[8vh] md:bottom-[2vh] flex gap-4">
      <Link onClick={() => setNavBar('top')} className="rotate-180" href={'#top'}><ArrowDownCircle
        className="animate__animated animate__fadeInUpBig aspect-square h-10 2xl:h-auto" size={60}
        color="#fff"/> </Link>
      <Link href={'#projects'} onClick={() => setNavBar('projects')}><ArrowDownCircle
        className="animate__animated animate__fadeInUpBig aspect-square h-10 2xl:h-auto" size={60}
        color="#fff"/> </Link>
    </span>
  }
</section>;
}

export default About;