import Link from 'next/link';
import React from 'react';
import {  ArrowDownSquareFill } from 'react-bootstrap-icons';

type props = {
  location: string
}

const ButtonTop = ({ location }: props) => {
  return <Link className={`animate__animated animate__fadeInUp ${location === 'top' && 'hidden'} fixed right-12 bottom-12 z-30`} href={'#top'}><ArrowDownSquareFill className='text-secundary rotate-180'  size={50}/></Link>;
}

export default ButtonTop;