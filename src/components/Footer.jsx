import React from 'react';
import {social} from "../data/social-data";
import Logo from "..//assets/logo.svg";

export const Footer = () => {
  return (
    <footer className='bg-cyan-900 py-12'>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item,index) => {
              return (
                <a href={item.href} key={index}
                   className='text-orange-500 hover:text-orange-700 text-base'>
                  {item.icon}
                </a>
              )
            })}
          </div>
          <div>
            <img src={Logo} alt="Logo"/>
          </div>
          <p>
            &copy; 2023 Vasyl Kusmii. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

