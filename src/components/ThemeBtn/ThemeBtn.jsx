import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '../../contexts/theme'; // Adjust the import path as necessary

const ThemeBtn = () => {
  const { themeMode, toggleTheme } = useTheme();
  
  return (
    <IconButton 
      sx={{ 
        ml: 1,
        color: 'inherit',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.08)'
        }
      }}
      onClick={toggleTheme}
      aria-label={`Switch to ${themeMode === 'dark' ? 'light' : 'dark'} mode`}
    >
      {themeMode === 'dark' ? (
        <Brightness7Icon fontSize="medium" />
      ) : (
        <Brightness4Icon fontSize="medium" />
      )}
    </IconButton>
  );
};

export default ThemeBtn;