import React, { ChangeEvent, useContext, useState } from 'react';
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { ThemeContext } from '../../context/ThemeContext';

const switchMode  = {
  'light': 'left-0 bg-yellow-400',
  'dark': 'left-4 bg-blue-950'
}

const Switch = () => {
  const {mode, setMode} = useContext(ThemeContext);
  const [switchAnimation, setSwitchAnimation] = useState<string|undefined>(undefined);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.checked) {
      document.documentElement.classList.add('dark')
      setMode('dark');
      setSwitchAnimation('animate-switch-to-right');
    } else {
      document.documentElement.classList.remove('dark')
      setMode('light');
      setSwitchAnimation('animate-switch-to-left');
    }
  }

  return (
    <span className='flex relative w-14 md:w-16'>
      <span className='flex w-full md:w-12 h-4 md:h-5 bg-gray-500 m-2 rounded-full items-center'>
        <span className={`relative flex w-6 md:w-8 h-6 md:h-8 rounded-full items-center justify-center ${switchMode[mode as keyof typeof switchMode]} ${switchAnimation}`}>
          {mode === 'light' ?
            <MdOutlineLightMode className='text-md md:text-xl text-white font-bold' />
            :
            <MdDarkMode className='text-md md:text-xl text-white' />
          }
        </span>
      </span>
      <input 
        type='checkbox' 
        checked={mode === 'dark' ? true : false}
        className='absolute w-16 h-full left-0 hover:cursor-pointer opacity-0'
        onChange={handleOnChange}
      />
    </span>
  );
};

export default Switch;