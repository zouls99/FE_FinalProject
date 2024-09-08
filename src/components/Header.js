import React from 'react';

const Header = ({ title }) => {
  return (
    <div className='w-full bg-slate-900 h-[60px] text-white flex items-center justify-center'>
      <h1 className='text-4xl font-bold'>{title}</h1>
    </div>
  );
};

export default Header;