import React from 'react'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Slider = ({slides}) => {

    const [activeIndex, setActiveIndex] = useState(0);

    // useEffect(() => {  
    //   const timer = setInterval(() => nextSlide(), 3000)
    //     return () => clearInterval(timer)
    // });

    const handleSlideClick = (index) => {
      setActiveIndex(index);
    };

    const prevSlide = ()=>{
      if(activeIndex === 0) setActiveIndex(slides.length);
      else setActiveIndex(activeIndex - 1);
     }
  
    const nextSlide = ()=>{
      if(activeIndex === slides.length) setActiveIndex(0);
      else setActiveIndex(activeIndex + 1);
    }

    const slideVariants = {
        active: {
          opacity: 1,
          filter: "brightness(100%)",
          scale: 1,
          y: 0,
          zIndex: 1,
        },
        inactive: {
          opacity: 0.6,
          filter: "brightness(40%)",
          scale: 0.8,
          y: 10,
          zIndex: 0,
        },
      };

      const textVariants = {
        active: {
          opacity: 1,
          scale: 1,
          y: 20,
        },
        inactive: {
          opacity: 0,
          scale: 0.8,
          y: 20,
        }
      };
    
      const buttonVariants = {
        active: {
          opacity: 1,
          scale: 1,
          y: 20
        },
        inactive: {
          opacity: 0,
          scale: 0.8,
          y: 30
        },
      };

  return (
    <div className="container">
    {slides.map((slide, index) => {
      const isActive = activeIndex === index;

      return (
        <motion.div
          key={index}
          className={`slide ${isActive ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.imageUrl})` }}
          onClick={() => handleSlideClick(index)}
          variants={slideVariants}
          initial={isActive ? 'active' : 'inactive'}
          animate={isActive ? 'active' : 'inactive'}
          transition={{ duration: 0.5 }}
        >
        <motion.h2
              variants={textVariants}
              initial="inactive"
              animate={isActive ? 'active' : 'inactive'}
              transition={{ duration: 1.3, delay: 0.8 }}
        >
              {slide.title}
        </motion.h2>
        <motion.button
              variants={buttonVariants}
              initial="inactive"
              animate={isActive ? 'active' : 'inactive'}
              transition={{ duration: 1.3, delay: 0.8 }}
              whileHover={{scale: 1.2}}
              whileTap={{scale: 1}}
        >
              Learn More
        </motion.button>
        </motion.div>
        
      );
      
    })}
        <motion.span 
            className='slide-arrow slider-arrow-prev' 
            onClick={prevSlide}
            whileHover={{scale: 1.2}}
            whileTap={{scale: .8}}
        >
          <i className="fa-sharp fa-solid fa-arrow-left"></i>
        </motion.span>
        <motion.span 
            className='slide-arrow slider-arrow-next' 
            onClick={nextSlide}
            whileHover={{scale: 1.2}}
            whileTap={{scale: .8}}
        >
          <i className="fa-sharp fa-solid fa-arrow-right"></i>
        </motion.span>
  </div>
  )
}
