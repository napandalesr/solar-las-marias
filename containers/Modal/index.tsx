import React from 'react';

import { BlogsType } from '@/types/blogs';
import { X } from 'react-bootstrap-icons';
import Image from 'next/image';

type Props = {
  BlogData: BlogsType | undefined
  visible: boolean
  setDataModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalBlog = ({BlogData, visible = false, setDataModal}: Props) => {
  return <>
  {
    visible && 
    <section className='fixed z-50 top-2 bottom-2 left-2 right-2 bg-white overflow-auto px-4 py-6 text-black'>
      <Image className='mb-2' src={'/images/prensa1.jpg'} alt='' width={6000} height={4000}/>
      <X onClick={()=>setDataModal(false)} className='float-right font-bold fixed right-4 top-4 bg-white border-2 rounded' size={30}/>
      {
        BlogData && 
        <><h1 className='text-center font-bold'>{BlogData.title}</h1><article className='my-4 text-xs text-center italic'>{BlogData.article}</article>
        {
          BlogData.text.map((item, index) => <p className='text-sm text-justify' key={index} dangerouslySetInnerHTML={{__html: item.paragraph}} />)
        }
        </>
      }
    </section>
  }
  
  </>;
}

export default ModalBlog;