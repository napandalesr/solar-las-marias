import React from 'react';

import Link from 'next/link';
import { ArrowDownCircle, Linkedin, TwitterX } from 'react-bootstrap-icons';
import Image from 'next/image';

import { Props } from '@/types/props';
import useScreenSize from '@/hooks/useScreenSize';

const News = ({ navBar, setNavBar }: Props) => {
  const { width } = useScreenSize();

  return <section id="news" className="h-screen w-screen flex relative flex-col-reverse md:flex-row bg-white">
    <section
      className={`w-full flex flex-row ${width > 760 ? navBar === 'contact' ? ' animate__slideInRight' : ' animate__slideOutRight' : ''}`}>
      <div className={"flex flex-col items-start justify-start gap-8 2xl:gap-12 w-full pt-44 lg:pt-32 pb-32 2xl:py-44 px-16 xl:px-32 relative z-20"}>
        <h2 className={`text-primary font-bold text-3xl md:text-5xl 2xl:text-6xl ${width > 760 ? navBar == 'top' && ' animate__fadeInDown' : ''}`}>Tras
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
      width > 760 &&
    <span className="absolute lg:left-[56%] xl:left-1/2 left-1/2 -translate-x-1/2 bottom-[8vh] md:bottom-[2vh] flex gap-4">
    <Link className="rotate-180" href={'#capacity'} onClick={() => setNavBar('capacity')}><ArrowDownCircle
      className="text-white lg:text-primary animate__fadeInUpBig aspect-square h-10 2xl:h-auto"
      size={60}/> </Link>
    <Link href={'#contact'} onClick={() => setNavBar('contact')}><ArrowDownCircle
      className="text-white lg:text-primary animate__fadeInUpBig aspect-square h-10 2xl:h-auto"
      size={60}/> </Link>
    </span>
  }

  </section>;
}

export default News;