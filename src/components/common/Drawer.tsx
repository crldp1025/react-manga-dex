import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import NavMenu from './NavMenu';
import Search from '../site/Search';
import SiteLogo from '../site/SiteLogo';

const Drawer = () => {
  const [isDrawerVisible, setDrawerIsVisible] = useState<boolean>(false);

  const handleDrawerToggle = (state: boolean) => {
    if(window.innerWidth < 768) {
      setDrawerIsVisible(state);
    }
  }
  
  return (
    <div className='block md:hidden'>
      <button 
        className='px-4 py-4 hover:bg-white/40 text-white'
        onClick={() => setDrawerIsVisible(!isDrawerVisible)}
      >
        <IoIosMenu className='text-3xl ' />
      </button>
      <div className={`fixed h-full left-0 top-0 z-50 overflow-hidden ${(isDrawerVisible ? 'w-full' : 'transition-all delay-500 duration-0 w-0 ')}`}>
        <div 
          className={`absolute top-0 left-0 w-full h-full bg-black/50 z-10 overflow-hidden ${(isDrawerVisible ? 'opacity-100 animate-fade-in' : 'opacity-0 animate-fade-out')}`}
          onClick={() => handleDrawerToggle(false)}>
        </div>
        <div className='w-10/12 h-full'>
          <div className={`relative h-full bg-white dark:bg-gray-900 z-20 ${(isDrawerVisible ? 'w-full left-0 animate-slideIn-to-right' : 'w-0 left-[-100%] animate-slideOut-to-left')}`}>
            <div className='flex items-center justify-end border-b border-gray mb-2 py-2 pl-4 pr-2'>
              <SiteLogo />
              <button 
                className='px-2 py-1 rounded-lg hover:bg-black/20'
                onClick={() => setDrawerIsVisible(false)}
              >
                <IoMdClose className='text-3xl text-black dark:text-white' />
              </button>
            </div>
            <div className='block md:hidden mb-2'>
              <Search />
            </div>
            <NavMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;