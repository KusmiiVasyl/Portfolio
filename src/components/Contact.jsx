import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import {contacts} from "../data/contacts-data";

export const Contact = () => {
  const [inputs, setInputs] = useState({});
  const [success, setSuccess] = useState(null);
  const ref = useRef();

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = e => {
    e.preventDefault()
    emailjs.sendForm('service_nvtpucx', 'template_b843pxm', ref.current, 'JmhZe2u6_sqzurLFK')
      .then((result) => {
        console.log(result.text);
        setSuccess(true);
        setTimeout(()=> {
          setSuccess(false)
        }, 6000);
        setInputs({'name': '', 'email': '', 'subject': '', 'message': ''});
      }, (error) => {
        console.log(error.text);
        setSuccess(false);
      });
  }

  return (
    <section className='section bg-cyan-950' id='contact'>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className='section-title
                          before:content-contact relative
                          before:absolute before:opacity-40
                          before:-top-7 before:-left-40 before:hidden
                          before:lg:block'
          >
            Contact me
          </h2>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          <div className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'>
            {contacts.map((item, index) => {
              const {icon, title, subtitle} = item;
              return (
                <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                  <div className='text-cyan-600 rounded-sm w-14 h-14 flex items-start
                                  justify-center mt-2 mb-4 lg:mb-0 text-2xl'
                  >
                    {icon}
                  </div>
                  <div className='font-body text-xl mb-1'>
                    <h4 className='text-cyan-300'>
                      {title}
                    </h4>
                    <p className='mb-1'>
                      {subtitle}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
          <form ref={ref} onSubmit={handleSubmit} className='space-y-8 w-full max-w-[780px]' noValidate>
            <div className="flex flex-wrap lg:flex-nowrap md:flex-nowrap gap-8">
              <input className='input' value={inputs.name || ''} onChange={handleChange} type="text"
                     placeholder='Your name' name="name"/>
              <input className='input' value={inputs.email || ''} onChange={handleChange} type="email"
                     placeholder='Your email' name="email"/>
            </div>
            <input type='text' className="input" value={inputs.subject || ''} onChange={handleChange}
                   placeholder='Subject' name="subject"/>
            <textarea className='textarea' value={inputs.message || ''} onChange={handleChange} placeholder='Your message' name="message"></textarea>
            <button type="submit"  disabled={!inputs.name || !inputs.email || !inputs.subject || !inputs.message}
                    className='btn bg-cyan-900 hover:bg-cyan-700 text-cyan-200 disabled:opacity-75 disabled:hover:bg-cyan-900 disabled:text-gray-400'>
              Send message
            </button>
            <div className='text-orange-500 h-2'>
              {success &&
                  "Your message has been send. I'll get back to tou soon :)"}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
