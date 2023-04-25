import React from 'react';
import {CertificateSlider} from "./CertificateSlider";


export const Certificates = () => {
  return (
    <section id='certificates' className='section bg-cyan-950'>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className='section-title text-cyan-200
          before:content-certificates relative
          before:absolute before:opacity-40 before:-top-[2rem]
          before:left-64 before:hidden before:lg:block'>
            My Certificates, Diplomas
          </h2>
        </div>
        <CertificateSlider/>
      </div>
    </section>
  );
};


