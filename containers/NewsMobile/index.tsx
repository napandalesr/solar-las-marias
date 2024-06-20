"use client"

import React, { useState } from 'react';

import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import {Navigation} from 'swiper/modules';

import { BlogsType } from '@/types/blogs';

import 'swiper/css';
import Image from 'next/image';
import ModalBlog from '../Modal';

type Props = {
  BlogData: BlogsType[]
}

const NewsMobile = ({BlogData}: Props) => {
  const swiper = useSwiper();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [dataModal, setDataModal] = useState<BlogsType>();

  const selectBlog = (i: number) => {
    setDataModal(BlogData[i]);
    setShowModal(true);
  }

  return <section>
    {
      BlogData.map((item, index)=> <span key={index} className='flex mx-4 my-10 relative'>
      <span className='border-b-2'>
        <h1 className='font-bold'>{item.title}</h1>
        <span className='flex justify-between mt-4'>
          <p className='text-xs font-light' dangerouslySetInnerHTML={{__html: item.date}}/>
          <button onClick={()=>selectBlog(index)} className='text-xs float-right border-primary text-primary underline'>Continuar leyendo</button>
        </span>
      </span>
      <Image src={item.image} alt={"No c"} height={3012} width={2200} quality={100}
              className={"w-20 ml-2 rounded object-cover top-0 left-0 h-full z-0"}/>
      </span>)
    }
    <ModalBlog BlogData={dataModal} visible={showModal} setDataModal={setShowModal}/>
  </section>;
}

export default NewsMobile;