"use client"

import Header from "@/components/Header";
import Image from "next/image";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import {
  ArrowDownCircle,
  ArrowDownSquareFill,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Whatsapp,
  Youtube
} from "react-bootstrap-icons";
import 'animate.css';

import 'swiper/css';
import Link from "next/link";
import React, {useEffect, useRef, useState} from "react";

export default function Home() {
  const [navBar, setNavBar] = useState("top");
  const elementRef = useRef(null);
  const [paneles, setPaneles] = useState(0);
  const [irradiancia, setIrradiancia] = useState(0);
  const [factor, setFactor] = useState(0);
  const [produccion, setProduccion] = useState(0);
  const [hectareas, setHectareas] = useState(0);
  const [capex, setCapex] = useState(0);
  const [opex, setOpex] = useState(0);
  const [garantia, setGarantia] = useState(0);
  const [tir, setTir] = useState(0);
  const [screenWith, setScreenWith] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const animationPaneles = (increment: number = 0) => {
    if (increment < 168) {
      setPaneles(increment);
      setTimeout(() => {
        animationPaneles(increment + 2)
      }, 10)
    } else {
      setPaneles(168);
    }
  }

  const animationIrradiancia = (increment: number = 0) => {
    if (increment < 1882) {
      setIrradiancia(increment);
      setTimeout(() => {
        animationIrradiancia(increment + 20)
      }, 10)
    } else {
      setIrradiancia(1882);
    }
  }

  const animationFactor = (increment: number = 0) => {
    if (increment < 18) {
      setFactor(increment);
      setTimeout(() => {
        animationFactor(increment + 1)
      }, 100)
    } else {
      setFactor(18);
    }
  }

  const animationProduccion = (increment: number = 0) => {
    if (increment < 170187) {
      setProduccion(increment);
      setTimeout(() => {
        animationProduccion(increment + 1000)
      }, 10)
    } else {
      setProduccion(170187);
    }
  }

  const animationHectareas = (increment: number = 0) => {
    if (increment < 216) {
      setHectareas(increment);
      setTimeout(() => {
        animationHectareas(increment + 2)
      }, 10)
    } else {
      setHectareas(216);
    }
  }

  const animationCapex = (increment: number = 0) => {
    if (increment < 961) {
      setCapex(increment);
      setTimeout(() => {
        animationCapex(increment + 15)
      }, 10)
    } else {
      setCapex(216);
    }
  }

  const animationOpex = (increment: number = 0) => {
    if (increment < 961) {
      setOpex(increment);
      setTimeout(() => {
        animationOpex(increment + 12)
      }, 10)
    } else {
      setOpex(673);
    }
  }

  const animationGarantia = (increment: number = 0) => {
    if (increment < 5500) {
      setGarantia(increment);
      setTimeout(() => {
        animationGarantia(increment + 500)
      }, 10)
    } else {
      setGarantia(5500);
    }
  }

  const animationTir = (increment: number = 0) => {
    if (increment < 16) {
      setTir(increment);
      setTimeout(() => {
        animationTir(increment + 1)
      }, 10)
    } else {
      setTir(16);
    }
  }


  useEffect(() => {
    setScreenWith(window.screen.width);
    const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              if (paneles === 0) {
                animationPaneles();
                animationIrradiancia();
                animationFactor();
                animationProduccion();
                animationHectareas();
                animationCapex();
                animationOpex();
                animationGarantia();
                animationTir();
              }
              observer.disconnect(); // Deja de observar después de la primera intersección
            }
          });
        },
        {
          threshold: 0.1 // El 10% del elemento tiene que estar visible para considerarlo "visible"
        }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };

  }, [animationCapex, animationFactor, animationGarantia, animationHectareas, animationIrradiancia, animationOpex, animationPaneles, animationProduccion, animationTir, paneles]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      scrollTo({top: -window.scrollY, behavior: "instant"});
    }
  }, []);

  const [scrollValue, setScrollValue] = useState(0);

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
      4: "contact",
      5: "footer"
    }
    let current = currentSlide;
    if (Math.abs(scrollValue) >= 5) {
      if (scrollValue > 0) {
        if (current < 5)
          current += 1;
      } else {
        current -= 1;
      }
      if (current < 0) current = 0;
      if (current > 5) current = 5;
      setNavBar(dictionary[current]);
      scrollTo(0, current * viewportHeight);
      setCurrentSlide(current);
      setScrollValue(0);
    }
  }, [currentSlide, scrollValue]);

  useEffect(() => {
    console.log("Current slide: ", currentSlide);
    console.log("Current navbar: ", navBar);
    console.log("Current scroll val: ", scrollValue);
  }, [currentSlide, navBar, scrollValue]);

  return (
      <>
        <Header location={navBar} setNavBar={setNavBar}/>
        <main className="w-screen">
          <Link onClick={() => setNavBar('top')}
                className={`${screenWith > 760 && 'animate__animated animate__fadeInUp'} ${navBar === 'top' && 'hidden'} fixed right-12 bottom-12 z-30`}
                href={'#top'}><ArrowDownSquareFill className='text-secundary rotate-180' size={50}/></Link>
          <section className="relative h-screen w-screen" id="top">
            <Image
                className={`h-screen w-full object-cover hidden md:block ${screenWith > 760 ? navBar == 'top' ? 'animate__animated animate__bounceInUp' : 'animate__animated animate__bounceOutUp' : ''}`}
                src={'/images/solar.jpg'} width={6000} height={3600} alt=""/>
            <span
                className="absolute mx-14 md:mx-0 mt-8 md:mt-0 md:left-auto md:translate-x-0 top-[20vh] text-white text-center md:text-right md:right-[5vw] z-10 md:w-[60%] md:mr-4">
        <h1 className={`font-bold text-4xl md:text-8xl ${screenWith > 760 ? navBar == 'top' && 'animate__animated animate__fadeInDown' : ''}`}>Solar Las Marías</h1>
        <p className={`md:text-2xl mt-4 font-medium md:pl-36 max-w-[920px] float-right ${screenWith > 760 ? navBar === 'top' && 'animate__animated animate__fadeInDown' : ''}`}>
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
                screenWith > 760 && <span className="absolute left-1/2 -translate-x-1/2 bottom-[8vh] md:bottom-[2vh]">
          <Link href={'#about'} onClick={() => setNavBar('about')}><ArrowDownCircle
            className="text-white animate__animated animate__fadeInUpBig" size={60}/> </Link>
        </span>
            }

          </section>
          <section className="relative w-full" id="about">
            <span className="z-10 w-full absolute top-6 md:top-[15vh] !text-primary left-8 md:left-14"
                  style={{color: '#19255B !important'}}>
        <p className={`md:text-4xl md:mt-4 w-1/2 md:w-[40%] ${screenWith > 760 ? navBar == 'about' ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__slideOutLeft' : ''}`}
           style={{color: '#19255B !important'}}>
          En una extensión de 200 hectáreas bordeadas por el Río Guachicono, <strong>la Granja Solar Las Marías se reconoce hoy como la solución Solar más grande del Suroccidente colombiano</strong>.
        </p>
        <button
            className={`mt-8 rounded-3xl bg-primary text-white text-xl font-medium shadow-lg px-6 py-2 ${screenWith > 760 ? navBar == 'about' ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__slideOutLeft' : ''}`}>Contáctanos</button>
      </span>
            <Image
                className={`z-0 h-screen object-cover ${screenWith > 760 ? navBar === 'about' ? 'animate__animated animate__fadeInRight' : 'animate__animated animate__fadeOutRight' : ''}`}
                src={'/images/solar2.jpg'} width={6000} height={3600} alt=""/>
            {
                screenWith > 760 &&
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[8vh] md:bottom-[2vh] flex gap-4">
          <Link onClick={() => setNavBar('top')} className="rotate-180" href={'#top'}><ArrowDownCircle
            className="animate__animated animate__fadeInUpBig" size={60} color="#fff"/> </Link>
          <Link href={'#projects'} onClick={() => setNavBar('projects')}><ArrowDownCircle
            className="animate__animated animate__fadeInUpBig" size={60} color="#fff"/> </Link>
        </span>
            }
          </section>
          <section id="projects" className="h-screen text-center relative">
            <section
                className={`hidden md:flex w-screen h-[20vh] border-2 text-left z-10 relative text-white ${screenWith > 760 ? navBar == 'projects' ? 'animate__animated animate__flipInX' : 'animate__animated animate__flipOutX' : ''}`}>
        <span className="w-1/3 bg-secundary flex justify-center px-4 items-center">
          <Image
              className={`h-20 w-auto mr-4 ${screenWith > 760 ? navBar == 'projects' && 'animate__animated animate__swing' : ''}`}
              src="/icons/icon1.png" alt="" width={512} height={512}/>
          <span className="flex flex-col">
            {/*<strong className="text-2xl text-orange">Energía Renovable</strong>*/}
            <p>Seremos la ventana a la transición energética del Departamento del Cauca.</p>
          </span>
          
        </span>
              <span className="w-1/3 bg-green flex justify-center px-4 items-center">
          <Image
              className={`h-20 w-auto mr-4 ${screenWith > 760 ? navBar == 'projects' && 'animate__animated animate__swing' : ''}`}
              src="/icons/icon2.png" alt="" width={512} height={512}/>
          <span className="flex flex-col">
            {/*<strong className="text-2xl text-primary">Ahorro Económico</strong>*/}
            <p>
              Con la energía producida evitaremos la emisión de 26.209 toneladas de CO2 cada año.
            </p>
          </span>
        </span>
              <span className="w-1/3 bg-secundary flex justify-center px-4 items-center">
          <Image
              className={`h-20 w-auto mr-4 ${screenWith > 760 ? navBar == 'projects' && 'animate__animated animate__swing' : ''}`}
              src="/icons/icon3.png" alt="" width={512} height={512}/>
          <span className="flex flex-col">
            {/*<strong className="text-2xl text-orange">Tecnología Avanzada</strong>*/}
            <p>
              Nuestra energía será despachada para el sistema interconectado nacional a través de la subestación El Zaque ubicada a menos de 1 kilómetro de la planta
            </p>
          </span>
        </span>
              <span className="w-1/3 bg-green flex justify-center px-4 items-center">
          <Image
              className={`h-20 w-auto mr-4 ${screenWith > 760 ? navBar == 'projects' && 'animate__animated animate__swing' : ''}`}
              src="/icons/icon4.png" alt="" width={512} height={512}/>
          <span className="flex flex-col">
            {/*<strong className="text-2xl text-primary">Experiencia y Profesionalismo</strong>*/}
            <p>
              Con 168.000 paneles solares instalados en los campos de generación eléctrica.
            </p>
          </span>
        </span>
            </section>
            <section className="pt-1 ml-4 md:hidden">
              <Swiper
                  modules={[Navigation]}
                  spaceBetween={30}
                  slidesPerView={"auto"}
                  scrollbar={{draggable: true}}
                  navigation
                  pagination={{clickable: true}}
                  mousewheel
                  className={`mt-8 text-left w-full ${screenWith > 760 ? navBar === 'projects' ? 'animate__animated animate__fadeInUp' : 'animate__animated animate__fadeOutUpBig' : ''}`}
              >
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
            <section className="h-60vh mt-[3vh] z-10 relative ml-4">
              <h4 className="font-bold text-3xl md:text-5xl text-white">Nuestros Proyectos</h4>
              <Swiper
                  modules={[Navigation]}
                  spaceBetween={30}
                  slidesPerView={'auto'}
                  scrollbar={{draggable: true}}
                  navigation
                  pagination={{clickable: true}}
                  mousewheel
                  className={`mt-8 mx-auto ${screenWith > 760 ? navBar === 'projects' ? 'animate__animated animate__fadeInUp' : 'animate__animated animate__fadeOutUpBig' : ''}`}
              >
                <SwiperSlide className={`!w-80 md:!w-96 relative`}>
                  <section className="w-full h-[55vh] bg-white rounded-xl relative py-5 transition-all ease-out">
                    <Image
                        className="absolute top-0 object-cover h-full brightness-50 rounded-xl transition-all ease-in object-top"
                        src={'/images/solar9.jpg'} alt="" width={4034} height={6048}/>
                    <span className='absolute top-12 left-8 w-[80%]'>
                <p className="text-2xl pt-2 font-bold rounded-t-xl text-yelow w-64 mx-auto">Compromiso con el Medio Ambiente</p>
                <p className="h-full text-left rounded-b-xl py-4 text-xl text-white font-medium">
                  Diseñada para minimizar el impacto ambiental, utilizando tecnología de punta para generar energía renovable de manera eficiente y responsable.
                </p>
              </span>
                  </section>
                </SwiperSlide>
                <SwiperSlide className={`!w-80 md:!w-96 relative`}>
                  <section className="w-full h-[55vh] bg-white rounded-xl text-white relative transition-all ease-out">
                    <Image className="absolute top-0 object-cover h-full brightness-50 rounded-xl object-top"
                           src={'/images/solar6.jpg'} alt="" width={4034} height={6048}/>
                    <span className='absolute top-12 left-8 text-white font-medium w-[80%]'>
                <p className="text-2xl font-bold rounded-t-xl text-yelow">Innovación y Futuro</p>
                <p className="h-full text-left rounded-b-xl p-4 text-xl">
                  En la Granja Solar Las Marías, apostamos por la innovación constante para ofrecer soluciones energéticas avanzadas que no solo beneficien a nuestros clientes, sino también a las generaciones futuras.
                </p>
              </span>
                  </section>
                </SwiperSlide>
                <SwiperSlide className={`!w-80 md:!w-96 relative`}>
                  <section className="w-full h-[55vh] bg-white rounded-xl text-white relative transition-all ease-out">
                    <Image className="absolute top-0 object-cover h-full brightness-50 rounded-xl object-top"
                           src={'/images/solar10.jpg'} alt="" width={4034} height={6048}/>
                    <span className='absolute top-12 left-8 text-white w-[80%]'>
                <p className="text-2xl font-bold rounded-t-xl text-yelow">Compromiso social</p>
                <p className="h-full text-left rounded-b-xl p-4 text-xl font-medium">
                  Un proyecto que impulsa el conocimiento, hace crecer la economía, contribuye a reducir las brechas de desigualdad, tecnología, ambiental y social.
                </p>
              </span>
                  </section>
                </SwiperSlide>
              </Swiper>
            </section>
            {/**<video className="w-screen object-cover h-screen absolute bottom-0 z-0 brightness-50 object-top" muted autoPlay loop src="/videos/solar2.mp4"></video> */}
            <span className="w-screen absolute bottom-0 top-0 left-0 right-0 bg-primary">
        <Image
            className={`w-screen object-cover h-screen z-0 saturate-0 brightness-50 opacity-80 ${screenWith > 760 ? navBar === 'projects' ? 'animate__animated animate__zoomIn' : 'animate__animated animate__zoomOut' : ''}`}
            src={'/images/solar4.jpg'} width={6000} height={3600} alt=""/>
      </span>
            {
                screenWith > 760 &&
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[8vh] md:bottom-[2vh] flex gap-4">
          <Link onClick={() => setNavBar('about')} className="rotate-180" href={'#about'}><ArrowDownCircle
            className="animate__animated animate__fadeInUpBig" size={60} color="#fff"/> </Link>
          <Link href={'#capacity'} onClick={() => setNavBar('capacity')}><ArrowDownCircle
            className="text-white animate__animated animate__fadeInUpBig" size={60}/> </Link>
        </span>
            }
          </section>
          <section className="md:h-screen relative flex md:text-center justify-start flex-col bg-green" id="capacity">
      <span
          className="md:h-[30vh] flex flex-col items-center justify-center bg-primary text-white pb-8 md:pb-0 text-left md:px-8">
        <h2 className="text-3xl my-4 font-bold">Capacidad</h2>
        <section ref={elementRef}
                 className="grid md:flex grid-cols-[40%_60%] md:flex-row text-xl gap-y-8 gap-x-2 md:!gap-4 w-full justify-center mt-4 px-4 md:px-0 md:mr-4">
          <span className="md:border-r-2 md:w-[20%] px-4 flex justify-center flex-col md:flex-row"><strong
              className="text-4xl md:text-6xl mr-4 flex items-end">{paneles} <span
              className="text-xl md:pb-1">Mil</span></strong> <span className="w-28">Paneles instalados</span></span>
          <span className="md:border-r-2 md:w-[28%] px-4 flex justify-center flex-col md:flex-row"> <strong
              className="text-4xl md:text-6xl mr-4 flex items-end">{irradiancia} <span
              className="text-xl md:pb-1">kWh/m2</span></strong> <span
              className="w-36">Irradiancia solar anual</span></span>
          <span className="md:border-r-2 md:w-[19%] px-4 flex justify-center flex-col md:flex-row"> <strong
              className="text-4xl md:text-6xl mr-4 flex items-end">{factor} <span
              className="text-xl ml-1 md:pb-1">%</span> </strong><span className="w-28">Factor de planta</span></span>
          <span className="md:w-[25%] px-4 md:px-8 flex justify-center flex-col md:flex-row md:ml-2"><strong
              className="text-4xl md:text-6xl mr-4 flex items-end">{produccion} <span
              className="text-xl md:pb-1">MWh</span></strong> <span className="w-36">Producción anual</span></span>
        </section>
      </span>
            <span
                className="md:h-[30vh] flex flex-col items-center justify-center bg-tertiary text-white pb-8 md:pb-0 md:px-14 px-4">
      <h2 className="text-3xl my-4 font-bold">Recursos</h2>
        <section
            className="grid md:flex grid-cols-[40%_60%] md:flex-row text-xl gap-2 gap-y-8 gap-x-2 md:!gap-4 w-full justify-center mt-4 text-left">
          <span className="md:border-r-2 md:w-[22%] px-4 md:px-8 flex justify-center flex-col md:flex-row"><strong
              className="text-4xl md:text-6xl mr-4 flex items-end">{capex} <span
              className="text-xl md:pb-1">k</span> </strong><span>CAPEX</span></span>
          <span className="md:border-r-2 md:w-[25%] px-4 md:px-8 flex justify-center flex-col md:flex-row"><strong
              className="text-4xl md:text-6xl mr-4 flex items-end">{opex} <span
              className="text-xl md:pb-1">k</span> </strong>OPEX Año</span>
          <span className="md:border-r-2 md:w-[16%] px-4 md:px-8 flex justify-center flex-col md:flex-row"><strong
              className="text-4xl md:text-6xl mr-4 flex items-end">{tir} <span className="text-xl ml-1 md:pb-1">%</span> </strong>TIR </span>
          <span className=" md:w-[34%] px-4 flex justify-center flex-col md:flex-row"><span
              className="hidden md:block">$</span> <strong className="text-4xl md:text-6xl mr-2 flex items-end"><span
              className="md:hidden text-xl">$</span>{garantia}M<span
              className="text-xl md:pb-1">Cop</span></strong> <span className="w-40">Garantía de conexión</span></span>
        </section>
      </span>
            <span
                className="md:h-[30vh] flex flex-col items-center justify-center bg-green text-white pb-8 md:py-0 text-left px-4">
      <h2 className="text-3xl my-4 font-bold">Ubicación</h2>
        <section
            className="grid grid-cols-2 md:flex flex-col md:flex-row text-xl gap-4 w-full justify-center items-center">
          <span
              className="md:border-r-2 md:w-[25%] px-4 md:px-8 flex items-center gap-4"><strong>Cauca - Colombia</strong><Image
              className="w-20" src={'/icons/cauca.png'} width={1920} height={1920} alt="Cauca"/> </span>
          <span className="md:w-[25%] px-4 md:px-8 flex justify-center"><strong
              className="text-6xl mr-4 flex">{hectareas} </strong>Hectáreas de terreno</span>
        </section>
      </span>
            {
                screenWith > 760 &&
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[8vh] md:bottom-[2vh] flex gap-4">
          <Link onClick={() => setNavBar('projects')} className="rotate-180" href={'#projects'}><ArrowDownCircle
            className="animate__animated animate__fadeInUpBig" size={60} color="#fff"/> </Link>
          <Link href={'#contact'} onClick={() => setNavBar('contact')}><ArrowDownCircle
            className="text-white animate__animated animate__fadeInUpBig" size={60}/> </Link>
        </span>
            }

          </section>
          <section id="contact" className="h-screen w-screen flex relative flex-col-reverse md:flex-row">
            <section className="md:w-1/2 h-full px-14 my-auto relative flex justify-center items-center bg-primary">
              <Image
                  className={`h-20 md:h-36 w-auto absolute top-8 left-1/2 -translate-x-1/2 ${screenWith > 760 ? navBar === 'contact' ? 'animate__animated animate__zoomIn' : 'animate__animated animate__rollOut' : ''}`}
                  src={'/icons/logo-ligth.png'} width={620} height={449} alt=""/>
              <form
                  className={`flex flex-col gap-1 md:gap-4 md:w-2/3 ${screenWith > 760 ? navBar === 'contact' ? 'animate__animated animate__slideInLeft' : 'animate__animated animate__slideOutLeft' : ''}`}>
                <h4 className="text-center mt-0 md:mt-32 text-2xl md:text-4xl text-white">Contáctanos</h4>
                <input className="px-4 py-2 bg-transparent border-b-2 border-tertiary rounded-tr-xl text-white"
                       type="text" placeholder="Nombre"/>
                <input className="px-4 py-2 bg-transparent border-b-2 border-tertiary rounded-tr-xl" type="text"
                       placeholder="Correo"/>
                <input className="px-4 py-2 bg-transparent border-b-2 border-tertiary rounded-tr-xl" type="text"
                       placeholder="Número de contacto"/>
                <button className="text-2xl text-white px-8 py-2 mx-auto my-2 w-min rounded-3xl bg-secundary">Enviar
                </button>
                <span>
          <iframe className="w-full -mb-8"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15930.540821641522!2d-76.5475123!3d3.4386079!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a681f2d96d95%3A0x8bb15a936fe040ca!2sMarabunta%20Agencia%20Creativa!5e0!3m2!1ses-419!2sco!4v1716497157505!5m2!1ses-419!2sco"
                  height="150" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </span>
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
          <Link className="rotate-180" href={'#capacity'} onClick={() => setNavBar('capacity')}><ArrowDownCircle
            className="text-white animate__animated animate__fadeInUpBig" size={60}/> </Link>
          <Link href={'#footer'} onClick={() => setNavBar('footer')}><ArrowDownCircle
            className="text-white animate__animated animate__fadeInUpBig" size={60}/> </Link>
        </span>
            }

          </section>
        </main>
        <footer className="h-[70vh] md:h-screen flex flex-col relative" id="footer">
      <span
          className={`bg-primary border-b-2 md:h-[40vh] relative px-2 ${screenWith > 760 ? navBar == 'footer' ? 'animate__animated animate__zoomIn' : 'animate__animated animate__zoomOut' : ''}`}>
        {
            screenWith > 760 && <>
            <Link className="rotate-180 hidden md:block absolute left-1/2 -translate-x-1/2 top-[10vh]" href={'#contact'}
                  onClick={() => setNavBar('contact')}>
              <ArrowDownCircle className="text-white animate__animated animate__fadeInUpBig" size={180}/>
            </Link>
            <Link className="rotate-180 absolute left-1/2 -translate-x-1/2 top-8 md:top-[10vh] md:hidden"
                  href={'#contact'} onClick={() => setNavBar('contact')}>
              <ArrowDownCircle className="text-white animate__animated animate__fadeInUpBig" size={80}/>
            </Link>
          </>
        }
      </span>
          <section
              className={`bg-primary h-[80vh] md:h-[60vh] absolute w-full bottom-0 p-4 md:p-20 flex flex-col md:flex-row text-white ${screenWith > 760 ? navBar == 'footer' ? 'animate__animated animate__zoomIn' : 'animate__animated animate__zoomOut' : ''}`}>
        <span className="md:w-1/2 absolute md:relative right-4 flex flex-col md:flex-col">
          <Image className="w-24 md:w-60" src={'/icons/logo-ligth.png'} width={620} height={449} alt="Logo"/>
          <span className="flex flex-col items-end md:flex-row gap-3 md:gap-5 mt-4">
            <Link href={''}><Whatsapp color="#fff" size={25}/></Link>
            <Link href={''}><Youtube color="#fff" size={25}/></Link>
            <Link href={''}><Facebook color="#fff" size={25}/></Link>
            <Link href={''}><Linkedin color="#fff" size={25}/></Link>
            <Link href={''}><Instagram color="#fff" size={25}/></Link>
            <Link href={''}><Twitter color="#fff" size={25}/></Link>
          </span>
        </span>
            <span className="flex flex-col gap-8 text-xl w-1/3">
          <Link href={''}>Sobre nosotros</Link>
          <Link href={''}>Nuestros Proyectos</Link>
          <Link href={''}>Contáctanos</Link>
          <Link href={''}>PQRS</Link>
        </span>
            <span className="flex flex-col gap-2 md:text-2xl">
          <p>contacto@solarlasmarias.com</p>
          <p>300 000 0000</p>
        </span>
            <section
                className="absolute bottom-0 left-0 z-0 w-full h-24 bg-primary brightness-75 flex items-center px-8">
              Derechos reservados
            </section>
          </section>
        </footer>
      </>
  );
}
