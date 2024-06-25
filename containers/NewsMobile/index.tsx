"use client"

import React, { useState } from 'react';

import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import {Navigation} from 'swiper/modules';

import { BlogsType } from '@/types/blogs';

import 'swiper/css';
import Image from 'next/image';
import ModalBlog from '../Modal';
import { Share } from 'react-bootstrap-icons';
import { createToken } from '@/utils/tokens';
import PupUp from '@/components/PupUp';

type Props = {
  BlogData: BlogsType[]
}

const NewsMobile = ({BlogData}: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showPupUp, setShowPupUp] = useState(false);
  const [dataModal, setDataModal] = useState<BlogsType>();

  const selectBlog = (i: number) => {
    setDataModal(BlogData[i]);
    setShowModal(true);
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

  return <section className='text-black'>
    <h1 className='text-center font-bold text-2xl text-primary'>Noticias</h1>
    {
      showPupUp && <PupUp/>
    }
    {
      BlogData.map((item, index)=> <span key={index} className='flex mx-4 relative mt-4'>
      <span className='border-b-2' onClick={()=>selectBlog(index)}>
        <h1 className='font-bold'>{item.title}</h1>
        <p className='text-xs font-light mb-1' dangerouslySetInnerHTML={{__html: item.date}}/>
        <span className='flex justify-between my-2'>
          <p></p>
          <button onClick={()=>selectBlog(index)} className='text-xs float-right border-primary text-primary underline'>Continuar leyendo</button>
        </span>
      </span>
      <Image src={item.image} alt={"No c"} height={3012} width={2200} quality={100}
              className={"w-20 ml-2 rounded object-cover top-0 left-0 h-full z-0"}/>
      </span>)
    }
    <ModalBlog BlogData={dataModal} visible={showModal} copyToClipboard={copyToClipboard} setDataModal={setShowModal}/>
  </section>;
}

export default NewsMobile;