import React, { useState } from 'react';

import Link from 'next/link';
import { ArrowDownCircle, Linkedin, TwitterX, ArrowRight, ArrowLeft, Share } from 'react-bootstrap-icons';
import Image from 'next/image';

import useScreenSize from '@/hooks/useScreenSize';
import { BlogsType } from '@/types/blogs';
import { createToken } from '@/utils/tokens';
import PupUp from '@/components/PupUp';

export type Props = {
  setNavBar: React.Dispatch<React.SetStateAction<string>>
  navBar: string
  BlogData: BlogsType
  index?: number
  length?: number
}

const News = ({ navBar, setNavBar, BlogData, index, length }: Props) => {
  const [showPupUp, setShowPupUp] = useState(false);
  const [ counter, setCounter] = useState(0);
  const [ animationParagraph, setAnimationParagraph] = useState('');
  const { width } = useScreenSize();

  

  const transitionParagraphRight = () => {
    setAnimationParagraph('animate__animated animate__fadeOutLeftBig');
    setTimeout(() =>{
      setCounter(counter+1);
      setAnimationParagraph('animate__animated animate__fadeInRight');
    }, 200);
  }

  const transitionParagraphLeft = () => {
    
    setAnimationParagraph('animate__animated animate__fadeOutRightBig');
    setTimeout(() =>{
      setCounter(counter-1);
      setAnimationParagraph('animate__animated animate__fadeInLeftBig');
    }, 200);
  }

  const RenderPagination = (index: number) => {
    if(counter < 4 && index < 5)  return true;
    if(index > BlogData.text.length-3) return true;
    if(counter > BlogData.text.length-3 && index > BlogData.text.length-7) return true;
    return counter > 3 && (counter - index < 4) && index > counter - 5 && (counter - index >= -1);

  }

  const updatePagination = (position: number) => {
    setCounter(position);
    RenderPagination(position);
  }

  const copyToClipboard = (index: number) => {
    const data = { key1: 'value1', key2: index };
    const token = createToken(data);
    navigator.clipboard.writeText("http://localhost:3000/"+token).then(() => {
      setShowPupUp(true);
      setTimeout(()=>setShowPupUp(false), 3000)
    }).catch(err => {
      console.error('Error al copiar el texto: ', err);
    });
  };

  return <section className="h-max md:h-screen w-screen flex relative  md:flex-row bg-white" draggable="false">
    {
      index !== length && <p className='text-white bg-black absolute top-[56%] mt-2 -translate-y-1/2 right-0 z-40 text-xs text-center px-2 py-2 rounded'>Siguiente<br/>Noticia</p>
    }
    {
      showPupUp && <PupUp/>
    }
    <section
        className={`w-full flex flex-row items-center ${width > 760 ? navBar === 'news' ? 'animate__animated animate__slideInRight' : 'animate__animated animate__slideOutRight' : ''}`}>
      <div className={"flex flex-col items-center justify-center w-full gap-3 md:gap-6 px-4 xl:px-32 relative md:mt-8"}>
        <h2 className={`text-primary font-bold text-xl md:text-3xl tall:text-4xl  ${width > 760 ? navBar == 'top' && ' animate__fadeInDown' : ''}`}>
          {BlogData.title}
        </h2>
        <article className='italic text-justify text-xs tall:text-sm text-primary'>
          {BlogData.article}
        </article>
        <p className={`text-neutral-500 text-justify text-sm normal:text-base tall:text-lg normal:h-64 normal:mb-24 ${animationParagraph}`}
           dangerouslySetInnerHTML={{__html: BlogData.text[counter].paragraph}}/>
        <ul className={"flex flex-col items-center justify-center gap-6 absolute top-1/2 lg:top-6 xl:top-[55%] -translate-y-1/2 -right-1/2 xl:right-6 !z-40"}>
          {/*<li className={"bg-primary font-semibold text-white p-3 rounded-xl box-border"}><Link
              className={"flex items-center justify-center gap-4"} href={"https://linkedin.com"}><Linkedin
              size={20}/></Link></li>*/}
          {/*<li className={"bg-primary font-semibold text-white p-3 rounded-xl box-border"}><Link
              className={"flex items-center justify-center gap-4"} href={"https://twitter.com"}><TwitterX
              size={20}/></Link></li>*/}
          <li className={"bg-primary font-semibold text-white p-3 rounded-xl box-border"} title='Compartir'><button onClick={()=>copyToClipboard(BlogData.index)}
              className={"flex items-center justify-center gap-4"}><Share
              size={20}/></button></li>
        </ul>
      </div>
      <span
          className='absolute bottom-8 w-[45%] xl:w-[35%] bg-secundary flex justify-between items-center px-6 py-1 box-border mx-16 lg:mx-10 xl:mx-32 text-white rounded-lg '>
          <span>
          {BlogData.text.map((item, index: number) => <button onClick={() => updatePagination(index)} key={index}
                                                              className={`${RenderPagination(index) && 'p-2 cursor-pointer'} ${index == counter ? 'font-bold bg-primary' : 'hover:text-primary hover:font-medium'}`}>
            {
              RenderPagination(index) ? <>{index + 1}</> : <>{index === 0 ? <span className='ml-2'>.</span> : <>.</>}</>
            }
          </button>)}
          </span>
          <span className='float-right flex z-10'>
            <button disabled={counter == 0} onClick={() => {
              transitionParagraphLeft()
            }} className={`mr-8 ${counter == 0 && 'opacity-0'}`}>
              <ArrowLeft size={25}/>
            </button>
            <button disabled={counter == BlogData.text.length - 1} onClick={() => {
              transitionParagraphRight()
            }} className={`flex items-center ${counter == BlogData.text.length - 1 && 'opacity-0'}`}>
              <span className='text-sm mr-1'>Continuar leyendo </span> <ArrowRight className={"ml-1"} size={25}/>
            </button>
          </span>
        </span>
      <div
          className={"w-full h-[40%] lg:h-full lg:w-[60%] absolute bottom-0 left-0 lg:relative select-none pointer-events-none overflow-clip hidden md:block"}>
        <Image src={BlogData.image} alt={"No c"} height={3012} width={2200} quality={100}
               className={"absolute object-cover top-0 left-0 h-full z-0"}/>
        <span
            className={"absolute w-full h-full bg-gradient-to-t lg:bg-gradient-to-l from-black/50 via-black/10"}/>
      </div>
    </section>
    {
        width > 760 &&
      <span
        className="absolute lg:left-[56%] xl:left-1/2 left-1/2 -translate-x-1/2 bottom-[8vh] md:bottom-[2vh] flex gap-4">
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