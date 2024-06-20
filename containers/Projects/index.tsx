import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import { ArrowDownCircle } from 'react-bootstrap-icons';

import useScreenSize from '@/hooks/useScreenSize';
import { Props } from '@/types/props';

import 'swiper/css';


const Projects = ({ navBar, setNavBar }: Props) => {
  const [project, setProject] = useState(0);
  const swiper = useSwiper();
  const {width} = useScreenSize();

  return <section id="projects" className="md:h-screen text-center relative bg-white py-8">
  <section
      className={`hidden md:text-xs xl:text-base md:flex lg:items-center w-screen h-[20vh] border-2 text-left z-10 relative text-primary top-[10vh] ${width > 760 ? navBar == 'projects' ? ' animate__flipInX' : ' animate__flipOutX' : ''}`}>
    <span
        className="w-1/4 flex gap-x-4 flex-col lg:flex-row justify-start lg:justify-center px-4 items-center">
      <Image
          className={`h-auto w-28 ${width > 760 ? navBar == 'projects' && ' animate__swing' : ''}`}
          src="/icons/icon1.png" alt="" width={512} height={512}/>
      <span className="flex flex-col">
        <p className={"text-center lg:text-start"}>Seremos la ventana a la <strong className={"italic"}>transición energética del Departamento del Cauca.</strong></p>
      </span>
    </span>
    <span className={"w-0.5 h-4/5 bg-gray-400 my-6 lg:my-auto"}/>
    <span
        className="w-1/4 flex gap-x-4 flex-col lg:flex-row justify-start lg:justify-center px-4 items-center">
      <Image
          className={`h-auto w-28 ${width > 760 ? navBar == 'projects' && ' animate__swing' : ''}`}
          src="/icons/icon2.png" alt="" width={512} height={512}/>
      <span className="flex flex-col">
        <p className={"text-center lg:text-start"}>
          Con la energía producida <strong className={"italic"}>evitaremos la emisión de 26.209 toneladas de CO2</strong> cada año.
        </p>
      </span>
    </span>
    <span className={"w-0.5 h-4/5 bg-gray-400 my-6 lg:my-auto"}/>
    <span
        className="w-1/4 flex gap-x-4 flex-col lg:flex-row justify-start lg:justify-center px-4 items-center">
      <Image
          className={`h-auto w-28 ${width > 760 ? navBar == 'projects' && ' animate__swing' : ''}`}
          src="/icons/icon3.png" alt="" width={512} height={512}/>
      <span className="flex flex-col">
        <p className={"text-center lg:text-start"}>
          <strong
              className={"italic"}>Nuestra energía será despachada para el sistema interconectado nacional</strong> a través de la subestación El Zaque ubicada a menos de 1 kilómetro de la planta
        </p>
      </span>
    </span>
    <span className={"w-0.5 h-4/5 bg-gray-400 my-6 lg:my-auto"}/>
    <span
        className="w-1/4 flex gap-x-4 flex-col lg:flex-row justify-start lg:justify-center px-4 items-center">
      <Image
          className={`h-auto w-28 ${width > 760 ? navBar == 'projects' && ' animate__swing' : ''}`}
          src="/icons/icon4.png" alt="" width={512} height={512}/>
      <span className="flex flex-col">
        <p className={"text-center lg:text-start"}>
          <strong className={"italic"}>Con 168.000 paneles solares instalados</strong> en los campos de generación eléctrica.
        </p>
    </span>
</span>
  </section>
  <section className="slider-projects pt-1 ml-4 md:hidden">
    <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={"auto"}
        scrollbar={{draggable: true}}
        navigation
        pagination={{clickable: true}}
        mousewheel
        className={` mt-8 text-left w-full ${width > 760 ? navBar === 'projects' ? 'animate__animated animate__fadeInUp' : 'animate__animated animate__fadeOutUpBig' : ''}`}
    >
      <button onClick={() => swiper.slideNext()}></button>
      <SwiperSlide className={`!w-60 md:!w-96 relative`}>
        <p className="bg-secundary text-white font-medium rounded-xl p-4">Seremos la ventana a la transición
          energética del Departamento del Cauca.</p>
      </SwiperSlide>
      <SwiperSlide className={`!w-60 md:!w-96 relative`}>
        <p className="bg-secundary text-white font-medium rounded-xl p-4">Con la energía producida evitaremos
          la emisión de 26.209 toneladas de CO2 cada año.</p>
      </SwiperSlide>
      <SwiperSlide className={`!w-96 md:!w-96 relative`}>
        <p className="bg-secundary text-white font-medium rounded-xl p-4">Nuestra energía será despachada para
          el sistema interconectado nacional a través de la subestación El Zaque ubicada a menos de 1
          kilómetro de la planta.</p>
      </SwiperSlide>
      <SwiperSlide className={`!w-60 md:!w-96 relative`}>
        <p className="bg-secundary text-white font-medium rounded-xl p-4">Con 168.000 paneles solares
          instalados en los campos de generación eléctrica.</p>
      </SwiperSlide>
    </Swiper>
  </section>
  <section className="flex md:flex-col lg:flex-row items-start justify-center gap-6 xl:gap-16 pt-8 md:pt-40 md:px-8 lg:px-0 2xl:pt-32">
    <section className={`flex flex-col items-start justify-start text-primary md:ml-8 px-6 md:px-0 ${width > 760 ? navBar === 'projects' ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__fadeOutLeft' : ''}`}>
      <h4 className="font-black text-2xl xl:text-3xl uppercase">A qué le Apostamos</h4>
      <span className={`md:-ml-80 xl:-ml-72 bg-yelow h-1 rounded-xl w-2/3 md:w-[42rem] ${width > 760 ? navBar === 'projects' ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__fadeOutLeft' : ''}`}/>
      <section className="md:hidden w-full mt-8 text-left mb-10">
        <p className="text-base font-medium">- Compromiso con el medio ambiente</p>
        <p className={"text-sm text-neutral-500 mb-4"}>Diseñada para minimizar el impacto
          ambiental, utilizando tecnología de punta para generar energía renovable de manera eficiente y
          responsable.</p>
        <Image src={"/images/solar1.png"} alt={""} width={1280} height={1536}
               className={"w-full rounded"}/>
        <p className="text-base font-medium mt-4">- Innovación y futuro</p>
        <p className={"text-sm text-neutral-500 mb-4"}>En la Granja Solar Las Marías, apostamos
          por la innovación constante para ofrecer soluciones energéticas avanzadas que no solo
          beneficien a nuestros clientes, sino también a las generaciones futuras.</p>
        <Image src={"/images/solar2.png"} alt={""} width={1280} height={1536}
               className={"w-full rounded"}/>
        <p className="text-base font-medium mt-4">- Compromiso social</p>
        <p className={"text-sm text-neutral-500 mb-4"}>Un proyecto que impulsa el conocimiento,
          hace crecer la economía, contribuye a reducir las brechas de desigualdad, tecnología,
          ambiental y social.</p>
        <Image src={"/images/solar3.png"} alt={""} width={1280} height={1536}
               className={"w-full rounded"}/>
      </section>
      <ul className={"hidden md:flex flex-col items-start justify-start gap-2 list-disc text-lg xl:text-xl mt-4"}>
        <li>
          <button className={`transition-all duration-200 ease-in-out ${project === 0 && "font-bold"}`}
                  onClick={() => setProject(0)}>Compromiso con el medio ambiente
          </button>
        </li>
        <li>
          <button className={`transition-all duration-200 ease-in-out ${project === 1 && "font-bold"}`}
                  onClick={() => setProject(1)}>Innovación y futuro
          </button>
        </li>
        <li>
          <button className={`transition-all duration-200 ease-in-out ${project === 2 && "font-bold"}`}
                  onClick={() => setProject(2)}>Compromiso social
          </button>
        </li>
      </ul>
    </section>
    <div className={"hidden md:flex items-start justify-center gap-6 xl:gap-16"}>
      <section
          className={`relative border-l-8 border-r-8 border-l-yelow border-r-yelow w-[20rem] 2xl:w-[28rem] h-[24rem] 2xl:h-[32rem] overflow-clip rounded-2xl ${width > 760 ? navBar === 'projects' ? 'animate__animated animate__rotateIn' : 'animate__animated animate__rotateOut' : ''}`}>
        {
          project === 0 ? (
              <Image src={"/images/solar1.png"} alt={""} width={1280} height={1536}
                     className={"absolute top-0 left-0 w-full h-full object-cover"}/>
          ) : project === 1 ? (
              <Image src={"/images/solar2.png"} alt={""} width={1280} height={1536}
                     className={"absolute top-0 left-0 w-full h-full object-cover"}/>
          ) : (
              <Image src={"/images/solar3.png"} alt={""} width={1280} height={1536}
                     className={"absolute top-0 left-0 w-full h-full object-cover"}/>
          )
        }
      </section>
      <section className={`hidden md:block ${width > 760 ? navBar === 'projects' ? 'animate__animated animate__fadeInRight' : 'animate__animated animate__fadeOutRight' : ''}`}>
        {
          project === 0 ? (
              <div
                  className={"flex flex-col items-start justify-start gap-6 w-96 lg:w-[28rem] xl:w-[34rem] text-start pt-16"}>
                <h2 className={"font-black text-3xl lg:text-4xl 2xl:text-5xl text-primary"}>Compromiso
                  con<br/>el medio
                  ambiente</h2>
                <p className={"text-lg 2xl:text-2xl text-neutral-500"}>Diseñada para minimizar el impacto
                  ambiental, utilizando tecnología de punta para generar energía renovable de manera eficiente
                  y
                  responsable.</p>
              </div>
          ) : project === 1 ? (
              <div
                  className={"flex flex-col items-start justify-start gap-6 w-96 lg:w-[28rem] xl:w-[34rem] text-start pt-16"}>
                <h2 className={"font-black text-3xl lg:text-4xl 2xl:text-5xl text-primary"}>Innovación<br/>y
                  futuro</h2>
                <p className={"text-lg 2xl:text-2xl text-neutral-500"}>En la Granja Solar Las Marías,
                  apostamos
                  por la innovación constante para ofrecer soluciones energéticas avanzadas que no solo
                  beneficien a nuestros clientes, sino también a las generaciones futuras.</p>
              </div>
          ) : (
              <div
                  className={"flex flex-col items-start justify-start gap-6 w-96 lg:w-[28rem] xl:w-[34rem] text-start pt-16"}>
                <h2 className={"font-black text-3xl lg:text-4xl 2xl:text-5xl text-primary"}>Compromiso<br/>social
                </h2>
                <p className={"text-lg 2xl:text-2xl text-neutral-500"}>Un proyecto que impulsa el
                  conocimiento,
                  hace crecer la economía, contribuye a reducir las brechas de desigualdad, tecnología,
                  ambiental y social.</p>
              </div>
          )
        }
      </section>
    </div>
  </section>
  {
      width > 760 &&
    <span className="absolute right-72 xl:right-[28rem] bottom-[8vh] md:bottom-[4vh] flex gap-4">
      <Link onClick={() => setNavBar('about')} className="rotate-180" href={'#about'}><ArrowDownCircle
        className=" animate__fadeInUpBig aspect-square h-10 2xl:h-auto" size={60}
        color="#19255B"/> </Link>
      <Link href={'#capacity'} onClick={() => setNavBar('capacity')}><ArrowDownCircle
        className="text-white  animate__fadeInUpBig aspect-square h-10 2xl:h-auto" size={60}
        color="#19255B"/> </Link>
    </span>
  }
  <span className={"absolute bottom-0 h-2 left-0 w-full bg-yelow"}/>
</section>;
}

export default Projects;