"use client"

import React, { useEffect, useRef, useState } from 'react';

type Props = {
  increment: number
  frequency: number
  numberFinal: number
}

const CounterAnimation = ({increment, frequency, numberFinal}: Props) => {
  const [numberShow, setNumberShow] = useState(0);
  const [show, setShow] = useState(false);
  const incrementTo = increment;
  const elementRef = useRef(null);

  const runtAnimation = (increment: number = 0) =>  {
    if(increment < numberFinal) {
      setNumberShow(increment)
      setTimeout(() => {
        runtAnimation(increment+incrementTo);
      }, frequency);
    }else {
      setNumberShow(numberFinal)
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              if (numberShow === 0) {
                setShow(true);
                runtAnimation(increment);
              }
              observer.disconnect(); // Deja de observar después de la primera intersección
            }
          });
        },
        {
          threshold: 0.1 // El 10% del elemento tiene que estar visible para considerarlo "visible"
        }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };

  }, [numberShow, runtAnimation]);


  return <span className={`${show ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} ref={elementRef}>{numberShow}</span>;
}

export default CounterAnimation;