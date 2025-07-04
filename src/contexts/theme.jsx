// src/contexts/theme.js
import { createContext, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children, value }) => {
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Add default export for better compatibility
export default {
  ThemeProvider,
  useTheme
};