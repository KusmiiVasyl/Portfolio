import React from 'react';

export const Project = ({item}) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center mt-2'>
      <div className="mb-3">
        <img className='rounded-2xl h-full w-[566px] md:mx-auto md:h-full lg:h-[400px]'
          src={item.image} alt=""/>
      </div>
      <p className='capitalize text-cyan-200 text-sm mb-3'>
        {item.category}
      </p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>
        {item.name}
      </h3>
      <p className='text-cyan-200'>{item.description}</p>
      <hr className='w-2/3 mt-3 opacity-50'/>
      <a className='mt-2 text-blue-400 italic hover:text-blue-300 '
         href={item.hrefGit}>
        Look at GitHub
      </a>
    </div>
  );
};

