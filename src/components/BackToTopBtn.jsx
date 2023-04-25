import React, {useEffect, useState} from 'react';
import {Link, animateScroll as scroll} from "react-scroll";
import {ChevronUpIcon} from "@heroicons/react/outline";


export const BackToTopBtn = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false)
    })
  })

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return show &&
    <button onClick={()=> scrollToTop()}
      className='opacity-50 bg-orange-700 w-12 h-12 hover:bg-orange-500 text-cyan-50 rounded-full fixed right-12 bottom-12
     cursor-pointer flex justify-center items-center transition-all'>
      <ChevronUpIcon className='w-6 h-6'/>
    </button>
};

