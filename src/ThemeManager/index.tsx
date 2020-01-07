import React, {
  ReactNode, createContext, useState, FC,
} from 'react';

const defaultMode = 'dark';

type ThemeContext = {
  mode: string;
  toggle (): void;
}

type Props = {
  children: ReactNode;
}

export const ManageThemeContext: React.Context<ThemeContext> = createContext({
  mode: defaultMode,
  toggle: () => { },
});

export const useTheme = (): ThemeContext => React.useContext(ManageThemeContext);

export const ThemeManager: FC<Props> = ({ children }) => {
  const [themeState, setThemeState] = useState({
    mode: defaultMode,
  });

  const toggle = (): void => {
    setThemeState({ mode: (themeState.mode === 'light' ? 'dark' : 'light') });
  };

  return (
    <ManageThemeContext.Provider value={{
      mode: themeState.mode,
      toggle,
    }}
    >
      {children}
    </ManageThemeContext.Provider>
  );
};
