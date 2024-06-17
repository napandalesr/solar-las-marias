"use client"

import Header from "@/components/Header";
import Image from "next/image";
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import {ArrowDownCircle, ArrowDownSquareFill, Linkedin, TwitterX} from "react-bootstrap-icons";
import 'animate.css';

import 'swiper/css';
import Link from "next/link";
import React, {useEffect, useState} from "react";
import CounterAnimation from "@/components/CounterAnimation";

export default function Home() {
  const [navBar, setNavBar] = useState("top");
  const [scrollValue, setScrollValue] = useState(0);
  const [screenWith, setScreenWith] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [project, setProject] = useState(0);
  const swiper = useSwiper();

  useEffect(() => {
    setScreenWith(window.screen.width);
    if (typeof window !== "undefined") {
      scrollTo({top: -window.scrollY, behavior: "instant"});
    }
  }, []);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();
      const delta = Math.sign(event.deltaY);
      setScrollValue(prev => prev + delta);
    };

    window.addEventListener('wheel', handleScroll, {passive: false});

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  useEffect(() => {
    const viewportHeight = window.innerHeight;
    const dictionary: { [key: number]: string } = {
      0: "top",
      1: "about",
      2: "projects",
      3: "capacity",
      4: "news",
      5: "contact",
      6: "footer"
    }
    let current = currentSlide;
    let MAX = 6;
    if (Math.abs(scrollValue) >= MAX) {
      if (scrollValue > 0) {
        if (current < MAX)
          current += 1;
      } else if (current > 0) {
        current -= 1;
      }
      if (current < 0) current = 0;
      if (current > MAX) current = MAX;
      setNavBar(dictionary[current]);
      scrollTo(0, current * viewportHeight);
      setCurrentSlide(current);
      setScrollValue(0);
    }
  }, [currentSlide, scrollValue]);
/*
  useEffect(() => {
    console.log("Current slide: ", currentSlide);
    console.log("Current navbar: ", navBar);
    console.log("Current scroll val: ", scrollValue);
  }, [currentSlide, navBar, scrollValue]);*/

  return (
      <>
        <Header location={navBar} setNavBar={setNavBar}/>
        <main className="w-screen">
          <Link onClick={() => setNavBar('top')}
                className={`${screenWith > 760 && 'animate__animated animate__fadeInUp'} ${navBar === 'top' && 'hidden'} fixed right-12 bottom-12 z-30`}
                href={'#top'}><ArrowDownSquareFill
              className={`transition-all duration-500 ease-in-out ${navBar === "projects" || navBar === "news"  ? "text-tertiary" : "text-secundary"} rotate-180`} size={50}/></Link>
          <section className="relative h-screen w-screen" id="top">
            <Image
                className={`h-screen w-full object-cover hidden md:block ${screenWith > 760 ? navBar == 'top' ? 'animate__animated animate__bounceInUp' : 'animate__animated animate__bounceOutUp' : ''}`}
                src={'/images/solar_better.jpg'} quality={100} width={6000} height={3600} alt=""/>
            <span
                className="absolute mx-14 md:mx-0 mt-8 md:mt-0 md:left-auto md:translate-x-0 top-[20vh] text-white text-center md:text-right md:right-[5vw] z-10 md:w-[60%] md:mr-8">
              <h1 className={`font-bold text-4xl md:text-7xl xl:text-8xl ${screenWith > 760 ? navBar == 'top' && ' animate__fadeInDown' : ''}`}>Solar Las Marías</h1>
              <p className={`md:text-xl xl:text-2xl mt-4 font-medium md:pl-36 max-w-[920px] float-right ${screenWith > 760 ? navBar === 'top' && ' animate__fadeInDown' : ''}`}>
                Una solución energética que se construye aprovechando el poder del sol y las mejores
                tecnologías para dar al servicio de los colombianos 99.5 megas de energía sostenible.
              </p>
            </span>
            <Image
                className={`z-0 h-screen object-cover md:hidden ${screenWith > 760 ? navBar == 'top' ? 'animate__animated animate__bounceInUp' : 'animate__animated animate__bounceOutUp' : ''}`}
                src={'/images/solar11.jpg'} width={6000} height={3600} alt=""/>
            <span
                className="bg-gradient-to-bl from-black/30 to-transparent absolute top-0 left-0 right-0 bottom-0 z-0"/>

            {
                screenWith > 760 &&
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[8vh] md:bottom-[2vh] Z-50">
                  <Link href={'#about'} onClick={() => setNavBar('about')}><ArrowDownCircle
                    className="text-white animate__animated animate__fadeInUpBig !animate-float-up-sm Z-50"
                    size={60}/> </Link>
                </span>
            }
          </section>
          <section className="relative w-full" id="about">
            <span
                className="z-10 w-full absolute top-6 md:top-[20vh] xl:top-[24vh] text-primary left-8 md:left-16 xl:left-24 flex flex-col items-start justify-start gap-8">
              <p className={`md:text-2xl lg:text-3xl 2xl:text-4xl md:mt-4 w-1/2 md:w-[35%] xl:w-[37%] ${screenWith > 760 ? navBar == 'about' ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__slideOutLeft' : ''}`}>
                En una extensión de 200 hectáreas bordeadas por el Río Guachicono, <strong>la Granja Solar Las Marías se reconoce hoy como la solución Solar más grande del Suroccidente colombiano</strong>.
              </p>
              <Link href={"#contact"}
                    className={`rounded-3xl bg-primary text-white text-lg xl:text-xl font-medium shadow-lg px-6 py-2 ${screenWith > 760 ? navBar == 'about' ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__slideOutLeft' : ''}`}>Contáctanos</Link>
            </span>
            <Image
                className={`z-0 h-screen object-cover ${screenWith > 760 ? navBar === 'about' ? 'animate__animated animate__fadeInRight' : 'animate__animated animate__fadeOutRight' : ''}`}
                src={'/images/solar2.jpg'} width={6000} height={3600} alt=""/>
            {
                screenWith > 760 &&
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[8vh] md:bottom-[2vh] flex gap-4">
                <Link onClick={() => setNavBar('top')} className="rotate-180" href={'#top'}><ArrowDownCircle
                  className="animate__animated animate__fadeInUpBig aspect-square h-10 2xl:h-auto" size={60}
                  color="#fff"/> </Link>
                <Link href={'#projects'} onClick={() => setNavBar('projects')}><ArrowDownCircle
                  className="animate__animated animate__fadeInUpBig aspect-square h-10 2xl:h-auto" size={60}
                  color="#fff"/> </Link>
              </span>
            }
          </section>
          <section id="projects" className="md:h-screen text-center relative bg-white">
            <section
                className={`hidden md:text-xs xl:text-base md:flex lg:items-center w-screen h-[20vh] border-2 text-left z-10 relative text-primary top-[10vh] ${screenWith > 760 ? navBar == 'projects' ? ' animate__flipInX' : ' animate__flipOutX' : ''}`}>
              <span
                  className="w-1/4 flex gap-x-4 flex-col lg:flex-row justify-start lg:justify-center px-4 items-center">
                <Image
                    className={`h-auto w-28 ${screenWith > 760 ? navBar == 'projects' && ' animate__swing' : ''}`}
                    src="/icons/icon1.png" alt="" width={512} height={512}/>
                <span className="flex flex-col">
                  <p className={"text-center lg:text-start"}>Seremos la ventana a la <strong className={"italic"}>transición energética del Departamento del Cauca.</strong></p>
                </span>
              </span>
              <span className={"w-0.5 h-4/5 bg-gray-400 my-6 lg:my-auto"}/>
              <span
                  className="w-1/4 flex gap-x-4 flex-col lg:flex-row justify-start lg:justify-center px-4 items-center">
                <Image
                    className={`h-auto w-28 ${screenWith > 760 ? navBar == 'projects' && ' animate__swing' : ''}`}
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
                    className={`h-auto w-28 ${screenWith > 760 ? navBar == 'projects' && ' animate__swing' : ''}`}
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
                    className={`h-auto w-28 ${screenWith > 760 ? navBar == 'projects' && ' animate__swing' : ''}`}
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
                  className={` mt-8 text-left w-full ${screenWith > 760 ? navBar === 'projects' ? 'animate__animated animate__fadeInUp' : 'animate__animated animate__fadeOutUpBig' : ''}`}
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
              <section className={`flex flex-col items-start justify-start text-primary md:ml-8 px-6 md:px-0 ${screenWith > 760 ? navBar === 'projects' ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__fadeOutLeft' : ''}`}>
                <h4 className="font-black text-2xl xl:text-3xl uppercase">A qué le Apostamos</h4>
                <span className={`md:-ml-80 xl:-ml-72 bg-yelow h-1 rounded-xl w-2/3 md:w-[42rem] ${screenWith > 760 ? navBar === 'projects' ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__fadeOutLeft' : ''}`}/>
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
                    className={`relative border-l-8 border-r-8 border-l-yelow border-r-yelow w-[20rem] 2xl:w-[28rem] h-[24rem] 2xl:h-[32rem] overflow-clip rounded-2xl ${screenWith > 760 ? navBar === 'projects' ? 'animate__animated animate__rotateIn' : 'animate__animated animate__rotateOut' : ''}`}>
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
                <section className={`hidden md:block ${screenWith > 760 ? navBar === 'projects' ? 'animate__animated animate__fadeInRight' : 'animate__animated animate__fadeOutRight' : ''}`}>
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
                screenWith > 760 &&
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
          </section>
          <section
              className={`md:h-screen relative flex md:text-center justify-start flex-col bg-green md:pt-16 xl:pt-0`}
              id="capacity">
      <span
          className={`lg:h-[40vh] flex flex-col items-center justify-center bg-primary text-white py-8 text-left md:px-8 xl:pt-8 z-10 ${screenWith > 760 ? navBar === 'capacity' ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__fadeOutLeft' : ''}`}>
        <h2 className="text-3xl md:text-2xl 2xl:text-3xl my-2 xl:my-4 font-bold">Capacidad</h2>
        <section 
                 className="text-center lg:text-start flex-wrap flex md:grid md:grid-cols-2 lg:grid-cols-4 md:justify-items-center text-xl gap-16 md:gap-12 lg:gap-6 w-full justify-center mt-4 px-4 md:px-0">
          <span
              className="lg:border-r-2 px-4 lg:pr-8 flex justify-center flex-col lg:flex-row items-center 2xl:items-start"> <strong
              className="text-3xl md:text-4xl lg:text-3xl xl:text-4xl lg:mr-4 flex items-end"><CounterAnimation frequency={20} increment={20} numberFinal={1882}/>
            <span
                className="text-lg 2xl:text-xl 2xl:pb-1">kWh/m2</span></strong> <span
              className="text-center lg:text-start lg:w-36 xl:w-24 2xl:w-36 text-base 2xl:text-inherit">Irradiancia solar anual</span></span>
          <span
              className="lg:border-r-2 px-4 lg:pr-8 flex justify-center flex-col lg:flex-row items-center 2xl:items-start"> <strong
              className="text-3xl md:text-4xl lg:text-3xl xl:text-4xl lg:mr-4 flex items-end"><CounterAnimation frequency={45} increment={4} numberFinal={168}/>
            <span
                className="text-lg 2xl:text-xl 2xl:pb-1">MWp</span></strong> <span
              className="text-center lg:text-start lg:w-36 xl:w-24 2xl:w-36 text-base 2xl:text-inherit">Capacidad instalada</span></span>
          <span
              className="lg:border-r-2 px-4 lg:pr-8 flex justify-center flex-col lg:flex-row items-center 2xl:items-start"><strong
              className="text-3xl md:text-4xl lg:text-3xl xl:text-4xl lg:mr-4 flex items-end"><CounterAnimation frequency={40} increment={2} numberFinal={109}/> <span
              className="text-lg 2xl:text-xl 2xl:pb-1">Mil</span></strong> <span
              className="text-center lg:text-start lg:w-28 xl:w-20 2xl:w-28 text-base 2xl:text-inherit">Paneles instalados</span></span>
          <span
              className="px-4 lg:pr-8 flex justify-center flex-col lg:flex-row items-center 2xl:items-start"> <strong
              className="text-3xl md:text-4xl lg:text-3xl xl:text-4xl lg:mr-4 flex items-end"><CounterAnimation frequency={100} increment={1} numberFinal={18}/> <span
              className="text-xl ml-1 md:pb-1">%</span> </strong><span
              className="text-center lg:text-start lg:w-28 xl:w-20 2xl:w-28 text-base 2xl:text-inherit  ">Factor de planta</span></span>
          <div className={"hidden col-span-4 lg:grid grid-cols-2 justify-items-center place-items-center w-1/2 gap-6"}>
            <span
                className="lg:border-r-2 px-4 lg:pr-8 flex justify-center flex-col lg:flex-row items-center 2xl:items-start"><strong
                className="text-3xl md:text-4xl lg:text-3xl xl:text-4xl lg:mr-4 flex items-end"><CounterAnimation frequency={20} increment={1800} numberFinal={170187}/>
              <span
                  className="text-lg 2xl:text-xl 2xl:pb-1">MWh</span></strong> <span
                className="text-center lg:text-start lg:w-28 xl:w-20 2xl:w-28 text-base 2xl:text-inherit">Producción anual</span></span>
            <span
                className="px-4 lg:pr-8 flex justify-center flex-col lg:flex-row items-center 2xl:items-start"><strong
                className="text-3xl md:text-4xl lg:text-3xl xl:text-4xl lg:mr-4 flex items-end"><CounterAnimation frequency={45} increment={2} numberFinal={99.5}/>
              <span
                  className="text-lg 2xl:text-xl 2xl:pb-1">MWn</span></strong></span>
          </div>
          <span
              className="lg:border-r-2 px-4 lg:pr-8 lg:hidden flex justify-center flex-col lg:flex-row items-center 2xl:items-start"><strong
              className="text-3xl md:text-4xl lg:text-3xl xl:text-4xl lg:mr-4 flex items-end"><CounterAnimation frequency={20} increment={1800} numberFinal={170187}/>
            <span
                className="text-lg 2xl:text-xl 2xl:pb-1">MWh</span></strong> <span
              className="text-center lg:text-start lg:w-28 xl:w-20 2xl:w-28 text-base 2xl:text-inherit">Producción anual</span></span>
            <span
                className="px-4 lg:pr-8 lg:hidden flex justify-center flex-col lg:flex-row items-center 2xl:items-start"><strong
                className="text-3xl md:text-4xl lg:text-3xl xl:text-4xl lg:mr-4 flex items-end"><CounterAnimation frequency={45} increment={2} numberFinal={99.5}/>
              <span
                  className="text-lg 2xl:text-xl 2xl:pb-1">MWn</span></strong></span>
        </section>
      </span>
            <span
                className={`w-full md:h-[30vh] flex-wrap flex flex-col items-center justify-center bg-tertiary text-white py-8 lg:pt-0 lg:pb-8 text-left md:px-8 lg:px-2 xl:px-8 xl:pt-8 z-10 ${screenWith > 760 ? navBar === 'capacity' ? 'animate__animated animate__fadeInRight' : 'animate__animated animate__fadeOutRight' : ''}`}>
        <section
                 className="flex-wrap flex lg:grid lg:grid-cols-4 lg:flex-row text-xl gap-y-16 gap-x-2 lg:!gap-6 w-full md:justify-items-center justify-center mt-4 px-4 md:px-0">
          <span
              className="lg:border-r-2 px-4 lg:pr-8 flex justify-center flex-col lg:flex-row items-center 2xl:items-start"> <strong
              className="text-3xl md:text-4xl lg:text-3xl xl:text-4xl lg:mr-4 flex items-end text-nowrap">Fase 2 <span
              className="text-lg 2xl:text-xl 2xl:pb-1"> UPME</span></strong> <span
              className="text-center lg:text-start lg:w-36 xl:w-24 2xl:w-36 text-base 2xl:text-inherit">Conexión a la red</span></span>
          <span
              className="lg:border-r-2 px-4 lg:pr-8 flex justify-center flex-col lg:flex-row items-center 2xl:items-start"> <strong
              className="text-3xl md:text-4xl lg:text-3xl xl:text-4xl mr-4 lg:mr-auto xl:mr-4 flex items-end text-nowrap flex-nowrap">1 Km </strong> <span
              className="text-center lg:text-start lg:w-36 xl:w-24 2xl:w-36 text-base 2xl:text-inherit">Subestación Línea</span></span>
          <span
              className="lg:border-r-2 px-4 lg:pr-8 flex justify-center flex-col lg:flex-row items-center 2xl:items-start"><strong
              className="text-3xl md:text-4xl lg:text-3xl xl:text-4xl mr-4 flex items-end"><CounterAnimation frequency={40} increment={2} numberFinal={115}/> <span
              className="text-lg 2xl:text-xl 2xl:pb-1">kV</span></strong> <span
              className="text-center lg:text-start lg:w-28 xl:w-20 2xl:w-28 text-base 2xl:text-inherit">Subestación el Zaque</span></span>
          <span
              className="px-0 flex justify-center flex-col lg:flex-row items-center 2xl:items-start"> <strong
              className="text-3xl md:text-4xl lg:text-3xl lg:mr-4 flex items-end text-center lg:text-start">Licencia Ambiental </strong><span
              className="text-center lg:text-start text-base 2xl:text-inherit">Corporación Autónoma Regional del Cauca</span></span>
          <div className={"hidden col-span-4 lg:grid grid-cols-1 justify-items-center place-items-center w-1/2 gap-6"}>
            <span
              className="px-4 lg:px-24 flex justify-center flex-col items-center 2xl:items-start text-primary md:border-x-2"> <strong
              className="text-3xl md:text-4xl lg:text-3xl flex items-end text-center lg:text-start">31 Diciembre 2025 </strong><span
              className="text-center lg:text-start text-base 2xl:text-inherit"><strong>FECHA PUESTA EN OPERACIÓN</strong></span></span>
          </div>
            
        </section>
      </span>
            <span
                className={`lg:h-[30vh] flex flex-col items-center justify-center bg-green text-white pb-8 pt-8 lg:pb-16 text-left px-4 ${screenWith > 760 ? navBar === 'capacity' ? 'animate__animated animate__fadeInLeft' : ' animate__animated animate__fadeOutLeft' : ''}`}>
      <h2 className="text-3xl md:text-2xl 2xl:text-3xl my-2 xl:my-4 font-bold">Ubicación</h2>
        <section
            className=" flex flex-col md:flex-row flex-wrap items-center xl:items-start text-xl gap-16 md:gap-4 w-full justify-center">
          <span
              className="lg:border-r-2 md:w-[25%] px-4 md:px-8 flex items-center gap-4 flex-row-reverse lg:flex-row justify-end md:justify-start"><strong>Cauca - Colombia</strong><Image
              className="w-20" src={'/images/mapa.png'} width={1920} height={1920} alt="Cauca"/> </span>
          <span
              className="lg:border-r-2 px-4 lg:pr- 8 flex justify-center flex-col lg:flex-row items-center 2xl:items-start"><strong
              className="text-3xl md:text-4xl lg:text-3xl xl:text-4xl lg:mr-4 flex items-end">+<CounterAnimation frequency={45} increment={700} numberFinal={26209}/>
            <span
                className="text-lg 2xl:text-xl 2xl:pb-1">&nbsp;ton. CO2</span></strong> <span
              className="text-center lg:text-start lg:w-28 xl:w-20 2xl:w-28 md:text-xl 2xl:text-inherit">Prevenidas</span></span>
          <span
              className="md:w-[25%] px-4 md:px-8 flex flex-col lg:flex-row items-center text-center lg:text-start justify-center lg:justify-end gap-2 lg:gap-0"><strong
              className="text-4xl lg:text-3xl xl:text-4xl lg:mr-4"><CounterAnimation frequency={45} increment={10} numberFinal={216}/> </strong> Hectáreas de terreno</span>
        </section>
      </span>
            {
                screenWith > 760 &&
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[8vh] md:bottom-[2vh] flex gap-4">
          <Link onClick={() => setNavBar('projects')} className="rotate-180" href={'#projects'}><ArrowDownCircle
            className=" animate__fadeInUpBig aspect-square h-10 2xl:h-auto" size={60}
            color="#fff"/> </Link>
          <Link href={'#news'} onClick={() => setNavBar('news')}><ArrowDownCircle
            className="text-white  animate__fadeInUpBig aspect-square h-10 2xl:h-auto"
            size={60}/> </Link>
        </span>
            }

          </section>
          <section id="news" className="h-screen w-screen flex relative flex-col-reverse md:flex-row bg-white">
            <section
                className={`w-full flex flex-row ${screenWith > 760 ? navBar === 'contact' ? ' animate__slideInRight' : ' animate__slideOutRight' : ''}`}>
              <div className={"flex flex-col items-start justify-start gap-8 2xl:gap-12 w-full pt-44 lg:pt-32 pb-32 2xl:py-44 px-16 xl:px-32 relative z-20"}>
                <h2 className={`text-primary font-bold text-3xl md:text-5xl 2xl:text-6xl ${screenWith > 760 ? navBar == 'top' && ' animate__fadeInDown' : ''}`}>Tras
                  las huellas del Paraíso: Co-creamos la primera marca de territorio de Colombia</h2>
                <p className={"text-neutral-500 text-lg md:text-xl 2xl:text-2xl max-w-[38rem]"}>En Marabunta Agencia Creativa seguimos muy de cerca el proceso legislativo que finalizó con la firma
                  de la Ley 2345 en diciembre del 2023. Esta sentencia la conocimos mejor como “Ley Chao Marcas de
                  Gobierno”, una iniciativa para evitar el gasto de presupuesto público en nuevas marcas para
                  gobernaciones y municipios por cada mandato de turno.</p>
                <ul className={"flex flex-col items-center justify-center gap-6 absolute top-1/2 lg:top-[55%] -translate-y-1/2 right-6 xl:right-16"}>
                  <li className={"bg-primary font-semibold text-white p-3 rounded-xl box-border"}><Link
                      className={"flex items-center justify-center gap-4"} href={"https://linkedin.com"}><Linkedin size={20}/></Link></li>
                  <li className={"bg-primary font-semibold text-white p-3 rounded-xl box-border"}><Link
                      className={"flex items-center justify-center gap-4"} href={"https://twitter.com"}><TwitterX size={20}/></Link></li>
                </ul>
                <button className={"bg-primary font-semibold text-white px-16 py-2 rounded-xl box-border"}>Lee más</button>
              </div>
              <div className={"w-full h-[40%] lg:h-full lg:w-[60%] absolute bottom-0 left-0 lg:relative select-none pointer-events-none overflow-clip"}>
                <Image src={"/images/solar11.jpg"} alt={"No c"} height={3012} width={2200} quality={100}
                       className={"absolute object-cover top-0 left-0 h-full"}/>
                <span className={"absolute w-full h-full bg-gradient-to-t lg:bg-gradient-to-l from-black/50 via-black/10"}/>
              </div>
            </section>
            {
                screenWith > 760 &&
              <span className="absolute lg:left-[56%] xl:left-1/2 left-1/2 -translate-x-1/2 bottom-[8vh] md:bottom-[2vh] flex gap-4">
          <Link className="rotate-180" href={'#capacity'} onClick={() => setNavBar('capacity')}><ArrowDownCircle
            className="text-white lg:text-primary animate__fadeInUpBig aspect-square h-10 2xl:h-auto"
            size={60}/> </Link>
          <Link href={'#contact'} onClick={() => setNavBar('contact')}><ArrowDownCircle
            className="text-white lg:text-primary animate__fadeInUpBig aspect-square h-10 2xl:h-auto"
            size={60}/> </Link>
        </span>
            }

          </section>
          <section id="contact" className="h-screen w-screen flex relative flex-col-reverse md:flex-row">
            <section
                className="w-full md:w-1/2 h-full px-14 my-auto relative flex flex-col md:flex-row justify-center items-center bg-primary gap-6 md:gap-0">
              <Image
                  className={`h-32 w-auto md:absolute top-24 md:top-44 lg:top-24 left-1/2 md:-translate-x-1/2 ${screenWith > 760 ? navBar === 'contact' ? 'animate__animated animate__zoomIn' : 'animate__animated animate__rollOut' : ''}`}
                  src={'/icons/logo-ligth.png'} width={620} height={449} alt=""/>
              <form
                  className={`flex flex-col gap-1 md:gap-8 w-full ${screenWith > 760 ? navBar === 'contact' ? 'animate__animated animate__slideInLeft' : 'animate__animated animate__slideOutLeft' : ''}`}>
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
                className={`w-[65%] hidden md:block ${screenWith > 760 ? navBar === 'contact' ? 'animate__animated animate__slideInRight' : 'animate__animated animate__slideOutRight' : ''}`}>
              <video className="object-cover h-screen  brightness-50 object-top" muted autoPlay loop
                     src="/videos/solar2.mp4"></video>
            </section>
            {
                screenWith > 760 &&
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[8vh] md:bottom-[2vh] flex gap-4">
          <Link className="rotate-180" href={'#news'} onClick={() => setNavBar('news')}><ArrowDownCircle
            className="text-white  animate__fadeInUpBig aspect-square h-10 2xl:h-auto"
            size={60}/> </Link>
          <Link href={'#footer'} onClick={() => setNavBar('footer')}><ArrowDownCircle
            className="text-white  animate__fadeInUpBig aspect-square h-10 2xl:h-auto"
            size={60}/> </Link>
        </span>
            }

          </section>
        </main>
        <footer className="h-[60vh] md:h-screen flex flex-col relative" id="footer">
      <span
          className={`bg-primary border-b-2 md:h-[40vh] relative px-2 ${screenWith > 760 ? navBar == 'footer' ? ' animate__zoomIn' : ' animate__zoomOut' : ''}`}>
        {
            screenWith > 760 && <>
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
              className={`bg-primary h-[70vh] md:h-[60vh] absolute w-full bottom-0 p-4 md:p-20 flex flex-col md:flex-row text-white ${screenWith > 760 ? navBar == 'footer' ? ' animate__zoomIn' : ' animate__zoomOut' : ''}`}>
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
        </footer>
      </>
  );
}
