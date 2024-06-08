import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

export type ModeType = 'light' | 'dark';

export interface IThemeContext {
  mode: ModeType;
  setMode: Dispatch<SetStateAction<ModeType>>;
};

const defaultState = {
  mode: 'light',
  setMode: (mode: ModeType) => {}
} as IThemeContext;

export const ThemeContext = createContext(defaultState);

interface IThemeProvider {
  children?: ReactNode;
};

const ThemeProvider = ({children}: IThemeProvider) => {
  const [mode, setMode] = useState<ModeType>(defaultState.mode);

  return (
    <ThemeContext.Provider value={{mode, setMode}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;