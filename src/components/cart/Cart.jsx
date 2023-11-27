import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { pink } from '@mui/material/colors';

const buttonStyles = {
  backgroundColor: pink[600],
  '&:hover': {
    backgroundColor: pink[700],
  },
  '&.Mui-selected, &.Mui-focusVisible': {
    backgroundColor: pink[700],
    '&:hover': {
      backgroundColor: pink[700],
    },
  },
};

function Cart({ data, cartItems, setCartData, productQuantities, setProductQuantities }) {
  
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + data[item].price, 0).toFixed(2);
  };
  const removeFromCart = (index) => {
    const newCartItems = cartItems.filter((item, i) => i !== index);
  setCartData(newCartItems);
    console.log('Removing item from cart:', index);
    
  };


  console.log(cartItems)
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h4" sx={{color:"#B9005B"}} mb={2} mt={6}>
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant='body1' sx={{color:"grey"}}>Your cart is empty.</Typography>
      ) : (
        <List>
          {cartItems.map((item, index) => (
            
            <ListItem key={index}>
              <img style={{height:"60px",width:"50px", margin:"10px 20px"}} src={data[item].image} alt='product'/>
              <ListItemText primary={data[item].title} secondary={`$${data[item].price}`} />
              <Button variant="text" sx={{color:"grey"}} disableRipple disableFocusRipple onClick={() => removeFromCart(index)}>
                <CloseIcon/>
              </Button>
            </ListItem>
          ))}
        </List>
      )}
      {cartItems.length > 0 && (
        <Box mt={2}>
          <Typography variant="h6">Total: ${calculateTotal()}</Typography>
          <Button variant="contained" color="primary" sx={{...buttonStyles, width:"90%" }}>
            Checkout
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default Cart;