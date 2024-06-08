import React, { ComponentPropsWithoutRef } from 'react';
import Header from '../site/Header';
import Main from './Main';

interface IContainer extends ComponentPropsWithoutRef<'div'> {};

const Container = ({children}: IContainer) => {
  
  return (
    <div className='w-full h-screen h-bg-white dark:bg-slate-950 transition overflow-x-hidden	'>
      <Header />
      <Main>
        {children}
      </Main>
    </div>
  );
};

export default Container;