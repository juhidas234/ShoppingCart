import { StrictMode ,useState, useEffect} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from './store/CartContext.jsx';
import  { ThemeProvider } from './contexts/theme.jsx'; // Import ThemeProvider

function Main() {
  const [themeMode, setThemeMode] = useState('light');

  const toggleTheme = () => {
    setThemeMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, toggleTheme }}>
      <BrowserRouter>
        <CartContextProvider>
          <App />                                                       
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>
);