import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartItem = (props) => {
    return (
        <Box sx={{ maxWidth: '350px', width: '100%', mb: '10px', paddingLeft: '40px' }}>
            <Card sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {props.title}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            component="div"
                            sx={{ color: 'text.secondary' }}
                        >
                            ${props.price}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            component="div"
                            sx={{ color: 'text.secondary' }}
                        >
                            Quantity: {props.qty}
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <IconButton 
                            aria-label="increase quantity" 
                            onClick={props.onIncrease}
                        >
                            <AddIcon />
                        </IconButton>
                        <IconButton 
                            aria-label="decrease quantity" 
                            onClick={props.onDecrease}
                        >
                            <RemoveIcon />
                        </IconButton>
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 151, height: '100%' }}
                    image={props.image}
                    alt={`${props.title} product image`}
                />
            </Card>
        </Box>
    );
};

export default CartItem;