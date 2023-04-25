import React, {useState} from "react";
import {navigation} from "../data/navigation-data";
import {XIcon} from '@heroicons/react/outline';
import {MenuAlt3Icon} from '@heroicons/react/outline';
import {motion} from 'framer-motion';
import {Link} from 'react-scroll';
import {Socials} from "./Socials";


export const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  const circleVariants = {
    hidden: {
      scale: 0
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 60
      }
    }
  }

  const ulVariant = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1
      }
    }
  }

  return (
    <nav className='relative'>
      <div className='cursor-pointer text-cyan-200' onClick={() => setIsOpen(true)}>
        <MenuAlt3Icon className='w-8 h-8'/>
      </div>
      <motion.div
        variants={circleVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : 'hidden'}
        className='w-4 h-4 rounded-full bg-cyan-950 fixed top-0 right-0'
      ></motion.div>
      <motion.ul
        variants={ulVariant}
        initial='hidden'
        animate={isOpen ? 'visible' : ''}
        className={`${isOpen ? 'right-0' : '-right-full'}
                   fixed top-0 bottom-0 w-full flex flex-col justify-center
                   items-center transition-all duration-300 overflow-hidden`}
      >
        <div onClick={() => setIsOpen(false)} className='cursor-pointer absolute top-8 right-8'>
          <XIcon className='w-8 h-8 text-cyan-200'/>
        </div>
        {
          navigation.map((item, index) => {
            return (
                <li key={index} className='mb-8'>
                  <Link to={item.href} onClick={() => setIsOpen(false)}
                        smoth="true" duration={500} offser={-70}
                        className='text-xl cursor-pointer capitalize hover:text-blue-400'>
                    {item.name}
                  </Link>
                </li>
            )
          })
        }
        <div className='lg:block'>
          <Socials/>
        </div>
      </motion.ul>
    </nav>
  )
}