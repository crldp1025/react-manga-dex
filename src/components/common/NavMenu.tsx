import React from 'react';
import NavMenuLink from './NavMenuLink';
import { navMenu } from '../../constants/Menu';

const NavMenu = () => {
  return (
    <div className='flex-1 block md:flex items-center md:px-6'>
      {navMenu.map((item, index) => (
        <NavMenuLink key={index} href={item.url}>
          {item.label}
        </NavMenuLink>
      ))}
    </div>
  );
};

export default NavMenu;