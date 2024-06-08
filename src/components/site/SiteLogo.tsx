import React from 'react';
import Logo from '../../assets/images/logo.svg';
import Wordmark from '../../assets/images/wordmark.svg';

const SiteLogo = () => {
  return (
    <a href='/' className='flex flex-1 md:flex-none items-center justify-start md:gap-2 w-10 md:w-40'>
      <img src={Logo} alt='Logo' />
      <img className='hidden md:block invert' src={Wordmark} alt='Text Logo' />
    </a>
  );
};

export default SiteLogo;