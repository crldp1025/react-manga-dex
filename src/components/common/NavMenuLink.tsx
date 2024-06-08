import React, { ComponentPropsWithoutRef } from 'react';

interface INavLink extends ComponentPropsWithoutRef<'a'> {};

const NavMenuLink = ({children, className, ...props}: INavLink) => {
  return (
    <a
      className='w-full block md:w-auto text-black dark:text-white md:text-white px-4 py-4 md:py-2 md:rounded-lg transition hover:bg-indigo-400 md:hover:bg-white hover:text-white md:hover:text-indigo-400'
      {...props}  
    >
      {children}
    </a>
  );
};

export default NavMenuLink;