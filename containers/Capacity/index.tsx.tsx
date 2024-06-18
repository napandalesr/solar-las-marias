import React from 'react';

import { ArrowDownCircle } from 'react-bootstrap-icons';
import Image from 'next/image';
import Link from 'next/link';

import useScreenSize from '@/hooks/useScreenSize';
import CounterAnimation from '@/components/CounterAnimation';
import { Props } from '@/types/props';

const Capacity = ({ navBar, setNavBar}: Props) => {
  const {width} = useScreenSize();

  return <section
  className={`md:h-screen relative flex md:text-center justify-start flex-col bg-green md:pt-16 xl:pt-0`}
  id="capacity">
    <span
    className={`lg:h-[40vh] flex flex-col items-center justify-center bg-primary text-white py-8 text-left md:px-8 xl:pt-8 z-10 ${width > 760 ? navBar === 'capacity' ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__fadeOutLeft' : ''}`}>
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
        className={`w-full md:h-[30vh] flex-wrap flex flex-col items-center justify-center bg-tertiary text-white py-8 lg:pt-0 lg:pb-8 text-left md:px-8 lg:px-2 xl:px-8 xl:pt-8 z-10 ${width > 760 ? navBar === 'capacity' ? 'animate__animated animate__fadeInRight' : 'animate__animated animate__fadeOutRight' : ''}`}>
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
        className={`lg:h-[30vh] flex flex-col items-center justify-center bg-green text-white pb-8 pt-8 lg:pb-16 text-left px-4 ${width > 760 ? navBar === 'capacity' ? 'animate__animated animate__fadeInLeft' : ' animate__animated animate__fadeOutLeft' : ''}`}>
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
        width > 760 &&
      <span className="absolute left-1/2 -translate-x-1/2 bottom-[8vh] md:bottom-[2vh] flex gap-4">
        <Link onClick={() => setNavBar('projects')} className="rotate-180" href={'#projects'}><ArrowDownCircle
        className=" animate__fadeInUpBig aspect-square h-10 2xl:h-auto" size={60}
        color="#fff"/> </Link>
        <Link href={'#news'} onClick={() => setNavBar('news')}><ArrowDownCircle
        className="text-white  animate__fadeInUpBig aspect-square h-10 2xl:h-auto"
        size={60}/> </Link>
      </span>
    }

  </section>;
}

export default Capacity;