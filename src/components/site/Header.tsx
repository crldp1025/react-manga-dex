import React, { useState } from 'react';
import Switch from './Switch';
import NavMenu from '../common/NavMenu';
import Search from './Search';
import Drawer from '../common/Drawer';
import SiteLogo from './SiteLogo';

const Header = () => {

  return (
    <div className='relative w-full bg-indigo-400'>
      <div className='w-full max-w-[1440px] pl-0 pr-2 md:px-8 py-0 md:py-4 mx-auto'>
        <div className='w-full flex items-center gap-1 md:gap-2'>
          <Drawer />
          <SiteLogo />
          <div className='flex-1 hidden md:flex items-center'>
            <NavMenu />
            <div className='flex items-center justify-end basis-96'>
              <Search />
            </div>
          </div>
          <Switch />
        </div>
      </div>
    </div>
  );
};

export default Header;