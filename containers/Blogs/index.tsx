import React, { useEffect, useState } from 'react';
import Carousel from 'framer-motion-carousel';

import News from '../News';
import { BlogsData } from '@/masterData/blogs';
import NewsMobile from '../NewsMobile';
import { BlogsType } from '@/types/blogs';

export type Props = {
  setNavBar: React.Dispatch<React.SetStateAction<string>>
  navBar: string
  index?: number
}

const Blogs = ({ navBar, setNavBar, index }: Props) => {
  const [showCarousel, setShowCarousel] = useState(false);

  
function moveToFirstPosition(arr: BlogsType[], id: number): BlogsType[] {
  const index = arr.findIndex(item => item.index === id);
  if (index === -1) return arr;
  const [element] = arr.splice(index, 1);
  arr.unshift(element);
  return arr;
}


  useEffect(()=>{
    
    console.log("index", index);
    if(index) {
      
      moveToFirstPosition(BlogsData, index);
    }
    setShowCarousel(true);
    /*
    if(idNoticia == 1) {
      const newsTag = document.getElementById('news');
      setTimeout(()=> {
        newsTag?.scrollIntoView({behavior: 'smooth'});
      }, 500);
    }*/
  },[])

  return <>
  <section className='hidden md:block' id='news'>
    {
      showCarousel && <Carousel  autoPlay={false} interval={1} loop={false} renderDots={()=><></>} >
        {
          BlogsData.map((item, index)=> <News key={index} index={index} length={BlogsData.length-1} navBar={navBar} setNavBar={setNavBar} BlogData={item}/>)
        }
      </Carousel>
    }
    
  </section>
  <section className='md:hidden bg-white py-10'>
    <NewsMobile BlogData={BlogsData} />
  </section>
  </>
}

export default Blogs;