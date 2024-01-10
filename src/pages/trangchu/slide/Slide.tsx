import React, { useRef } from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export type CarouselRef = {
    goTo: (slide: number, dontAnimate?: boolean) => void;
    next: () => void;
    prev: () => void;
  };

const Slide = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  const ref = useRef<CarouselRef>();

  return (
    <>
    <button className='absolute rounded-full z-10 translate-y-80 py-5 px-7 bg-[#A9B388]' onClick={() => {
        if (ref.current) {
            ref.current.prev()
        }
    }}>-</button>
    <button className='absolute rounded-full z-10 -right-0 translate-y-80 py-5 px-7 bg-[#A9B388]' onClick={() => {
        if (ref.current) {
            ref.current.next()
        }
    }}>+</button>
    <Carousel ref={ref} afterChange={onChange}>
      <div className='h-[45rem]'>
        <h3 style={contentStyle}><img className='w-full h-[45rem] justify-center object-center' src="src/assets/img/baner.jpg" alt="" /></h3>
      </div>
    </Carousel>
    </>
  );
};

export default Slide;