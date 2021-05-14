import React, { createContext, useContext } from 'react';
import { ThemeProvider as Provider } from 'styled-components';

import theme from '../../themes';

interface ThemeContextData {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider: React.FC = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ theme } as ThemeContextData}>
      <Provider theme={theme}>{children}</Provider>
    </ThemeContext.Provider>
  );
};

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}

export { ThemeProvider, useTheme };
