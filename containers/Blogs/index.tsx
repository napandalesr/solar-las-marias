import React from 'react';
import Carousel from 'framer-motion-carousel';

import News from '../News';
import { Props } from '@/types/props';
import { BlogsData } from '@/masterData/blogs';
import NewsMobile from '../NewsMobile';

const Blogs = ({ navBar, setNavBar }: Props) => {
  return <>
  <section className='hidden md:block' id='news'>
    <Carousel  autoPlay={false} interval={0} loop={false} renderDots={()=><></>}  >
      {
        BlogsData.map((item, index)=> <News key={index} navBar={navBar} setNavBar={setNavBar} BlogData={item}/>)
      }
    </Carousel>
  </section>
  <section className='md:hidden'>
    <NewsMobile BlogData={BlogsData} />
  </section>
  </>
}

export default Blogs;