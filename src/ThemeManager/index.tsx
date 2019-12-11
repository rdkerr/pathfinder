import React, { ReactNode } from 'react';

const defaultMode = 'dark';

type ThemeContext = {
  mode: string;
  toggle (): void;
}

type Props = {
  children: ReactNode;
}

export const ManageThemeContext: React.Context<ThemeContext> = React.createContext({
  mode: defaultMode,
  toggle: () => { },
});

export const useTheme = (): ThemeContext => React.useContext(ManageThemeContext);

export const ThemeManager: React.FC<Props> = ({ children }) => {
  const [themeState, setThemeState] = React.useState({
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
