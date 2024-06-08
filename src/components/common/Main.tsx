import React, { ComponentPropsWithoutRef } from 'react';

interface IMainProps extends ComponentPropsWithoutRef<'div'> {};

const Main = ({children, className, ...props}: IMainProps) => {

  return (
    <div 
      className={`w-full max-w-[1440px] mx-auto px-4 md:px-8 py-4 text-black dark:text-white ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Main;