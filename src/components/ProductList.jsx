import React from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Grid,
  Modal,
  Rating,
  Typography,
} from '@mui/material';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { pink } from '@mui/material/colors';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';


function truncateText(text, limit) {
  if (text.length <= limit) {
    return text;
  } else {
    const truncatedText = text.substring(0, limit).trim();
    return (
      <span>
        {truncatedText}
        <span style={{ color: 'grey', cursor: 'pointer' }}> read more..</span>
      </span>
    );
  }
}


const cardStyles = {
  width: '85%',
  height: 'fit-content',
  margin: '30px 20px 30px 50px',
  padding: '20px 10px',
};

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

function ProductList({
  data,
  removeFromCart,
  handleOpen,
  handleClose,
  itemIndex,
  open,
  cartItems,
  wishlist,
  setWishlist,
  cartData,
  setCartData,
  productQuantities,
  setProductQuantities,
}) {
  const handleWishlistToggle = (index) => {
    const updatedWishlist = wishlist.includes(index)
      ? wishlist.filter((item) => item !== index)
      : [...wishlist, index];
    setWishlist(updatedWishlist);
  };

  const addToCart = (index) => {
    const updatedCartData = [...cartData, index];
    setCartData(updatedCartData);
  };

  const handleQuantityChange = (index, change) => {
    const updatedQuantities = { ...productQuantities };
    updatedQuantities[index] = Math.max(0, (updatedQuantities[index] || 0) + change);
    setProductQuantities(updatedQuantities);
  };

  const renderQuantityButtons = (index) => {
    if (productQuantities[index] > 0) {
      return (
        <>
          <Button
            variant="contained"
            sx={{ ...buttonStyles }}
            onClick={() => handleQuantityChange(index, -1)}
          >
            -
          </Button>
          <Typography sx={{ color: pink[600],  margin: '4px' }}>
            {productQuantities[index]}
          </Typography>
          <Button
            variant="contained"
            sx={{ ...buttonStyles }}
            onClick={() => handleQuantityChange(index, 1)}
          >
            +
          </Button>
        </>
      );
    } else {
      return (
        <Button
          variant="contained"
          sx={{ ...buttonStyles }}
          onClick={() => {
            addToCart(index);
            handleQuantityChange(index, 1);
          }}
        >
          Add to cart
        </Button>
      );
    }
  };

  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 4, sm: 4, md: 3 }}>
      {data.map((item, index) => (
        <Grid key={index} xs={2} sm={4} md={3}>
          <Card sx={cardStyles}>
            <CardHeader
              sx={{ textAlign: 'right' }}
              title={
                <Checkbox
                  sx={{
                    color: 'grey',
                    '&.Mui-checked': {
                      color: pink[600],
                    },
                  }}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  checked={wishlist.includes(index)}
                  onChange={() => handleWishlistToggle(index)}
                />
              }
            />
            <CardMedia
              sx={{ objectFit: 'contain', padding: '5px 5%', width: '80%' }}
              component="img"
              src={item.image}
              onClick={() => handleOpen(index)}
              height="194"
              alt="product photo"
            />
            <CardContent sx={{ textAlign: 'left', height: '128px', paddingLeft: '42px' }} onClick={() => handleOpen(index)}>
              {truncateText(item.title, 50)}
              <Typography sx={{ color: 'grey', textAlign: 'left' }} key={item.id}></Typography>
              <Typography variant="h6">${item.price}</Typography>
              <Box sx={{ display: 'inline-flex' }}>
                <Rating readOnly value={item.rating.rate} />
                <Typography>({item.rating.count})</Typography>
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>{renderQuantityButtons(index)}</Box>
            </CardActions>
          </Card>
          <Modal
            open={open}
            onClose={handleClose}
            disableAutoFocus
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              sx: {
                backgroundColor: 'rgba(0, 0, 0, 0.078)',
              },
            }}
            sx={{ width: '80%', height: '900px', padding: '10%', paddingTop: '5%', justifyContent: 'center' }}
          >
            <Fade in={open}>
              <Card sx={{ height: '80%', width: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'inline-flex', padding: '100px', justifyContent: 'space-between' }}>
                    <Box sx={{ width: '50%', height: '30%', padding: '20px' }}>
                      <img
                        style={{ objectFit: 'cover', height: '42%', width: '70%' }}
                        src={data[itemIndex].image}
                        alt="product"
                      />
                    </Box>
                    <Box sx={{ width: '50%', height: '40%' }}>
                      <Typography variant="h4" sx={{ width: '500px' }}>
                        {data[itemIndex].title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'grey', width: '400px' }}>
                        {data[itemIndex].description}
                      </Typography>
                      <Box sx={{ display: 'inline-flex' }}>
                        <Rating readOnly value={data[itemIndex].rating.rate} />
                        <Typography>({data[itemIndex].rating.count})</Typography>
                      </Box>
                      <Box ml={2} sx={{ display: 'inline-flex' }}>
                        {renderQuantityButtons(index)}
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </Fade>
          </Modal>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
