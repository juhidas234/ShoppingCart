import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CartContext from '../../store/cartContext';
import { useContext } from 'react';
import Badge from '@mui/material/Badge';
import ThemeBtn from '../ThemeBtn/ThemeBtn'; // Import ThemeBtn component
import React from 'react';

const Navbar = ({ colorMode }) => {  // Accept colorMode prop
    const { cartLength = 0 } = useContext(CartContext); // Default to 0 if cartLength is undefined

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Shopping Cart
                    </Typography>
                    <Button component={NavLink} to="/" color="inherit">Products</Button>
                    <Button component={NavLink} to="/login" color="inherit">Login</Button>
                    <Button component={NavLink} to="/cart" color="inherit">
                        <Badge badgeContent={cartLength} color="secondary">
                            <LocalMallIcon />
                        </Badge>
                    </Button>
                     <ThemeBtn colorMode={colorMode} />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;