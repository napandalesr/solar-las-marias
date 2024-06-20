import React from 'react';

import { BlogsType } from '@/types/blogs';
import { X } from 'react-bootstrap-icons';

type Props = {
  BlogData: BlogsType | undefined
  visible: boolean
  setDataModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalBlog = ({BlogData, visible = false, setDataModal}: Props) => {
  return <>
  {
    visible && 
    <section className='fixed z-50 top-2 bottom-2 left-2 right-2 bg-white overflow-auto px-4 pt-6'>
      <X onClick={()=>setDataModal(false)} className='float-right font-bold' size={20}/>
      {
        BlogData && 
        <><h1 className='text-center font-bold'>{BlogData.title}</h1><article className='my-4 text-sm text-center italic'>{BlogData.article}</article>
        {
          BlogData.text.map((item, index) => <p key={index} dangerouslySetInnerHTML={{__html: item.paragraph}} />)
        }
        </>
      }
    </section>
  }
  
  </>;
}

export default ModalBlog;