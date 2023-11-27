import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Container,
  Drawer,
  Grid,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Modal,
  Rating,
  Toolbar,
  Typography,
} from '@mui/material';
import {
  LocalMallOutlined as LocalMallOutlinedIcon,
  PermIdentityOutlined as PermIdentityOutlinedIcon,
  FavoriteBorderOutlined as FavoriteBorderOutlinedIcon,
  ShoppingCartOutlined as ShoppingCartOutlinedIcon,
} from '@mui/icons-material';
import LogoutIcon from '@mui/icons-material/Logout';
import { setUser, logout } from '../../reducers/userActions';
import { pink } from '@mui/material/colors';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Cart from "../cart/Cart"
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxHeight: '80%',
  height:"fit-content",
  overflow: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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

function Navbar({ wishlistCount, wishlist, setWishlist, cartData, setCartData,productQuantities, setProductQuantities }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [user, setUser] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const handleCartToggle = () => setIsCartOpen(!isCartOpen);

  const handleLogin = () => setUser(true);

  const handleLogout = () => {
    setUser(false);
    handleCloseUserMenu();
  };

  return (
    <Box>
      <AppBar sx={{ backgroundColor: '#B9005B', boxShadow: 'none', color: 'white' }} position="sticky">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'inline-flex' }}>
            <IconButton>
              <LocalMallOutlinedIcon fontSize="large" sx={{ color: 'white' }} />
            </IconButton>
            <Typography mt={1} variant="h5" sx={{ color: 'white' }}>
              Brand Name
            </Typography>
            <Box ml={10} sx={{ width: '200px', textAlign: 'left' }}>
              <Typography variant="caption" sx={{ color: 'white' }}>
                send us a message <Link sx={{ color: 'white' }}>customersupport@brandname.com</Link>
              </Typography>
            </Box>
            <Box ml={10} sx={{ width: '200px', textAlign: 'left' }}>
              <Typography variant="caption" sx={{ color: 'white' }}>
                Need any help? Call us: <Link sx={{ color: 'white' }}>+0123456789</Link>
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <IconButton onClick={handleCartToggle}>
              <ShoppingCartOutlinedIcon sx={{ color: 'white' }} />
            </IconButton>
            <IconButton onClick={handleOpen}>
              <Badge badgeContent={wishlistCount} color="error">
                <FavoriteBorderOutlinedIcon sx={{ color: 'white' }} />
              </Badge>
            </IconButton>
            <Modal open={open} onClose={handleClose}>
              <Box sx={style}>
                <Box sx={{ width: '100%', justifyContent: 'center' }}>
                  <Typography variant='h6' sx={{ color: "#B9005B", fontWeight: "100", fontSize: "64px", textAlign: "center" }}>Wishlist</Typography>
                </Box>
                {wishlistCount!==0?<>
                  <Grid container rowSpacing={2} columnSpacing={{ xs: 4, sm: 4, md: 3 }}>
                  {wishlist.map((item, index) => (
                    <Grid key={index} xs={2} sm={4} md={3}>
                      <Card sx={cardStyles}>
                        <CardHeader sx={{ textAlign: 'right' }} 
                       />
                        <CardMedia
                          sx={{ objectFit: 'contain', padding: "5px 5%", width: "80%" }}
                          component="img"
                          src={data[item].image}
                          onClick={() => handleOpen(index)}
                          height="194"
                          alt="product photo"
                        />
                        <CardContent sx={{ textAlign: 'left', height: '128px', paddingLeft: '42px' }} onClick={() => handleOpen(index)}>
                          {truncateText(data[item].title, 50)}
                          <Typography sx={{ color: 'grey', textAlign: 'left' }} key={data[item].id}></Typography>
                          <Typography variant="h6">${data[item].price}</Typography>
                          <Box sx={{ display: 'inline-flex' }}>
                            <Rating readOnly value={data[item].rating.rate} />
                            <Typography>({data[item].rating.count})</Typography>
                          </Box>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'center' }}>
                          <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                            <ButtonGroup sx={{ ...buttonStyles }}>
                              <Button variant="contained" sx={{ ...buttonStyles }}>
                                Add to cart
                              </Button>
                            </ButtonGroup>
                          </Box>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
                </>:<>
                  <Typography variant='h6' sx={{color:"grey", textAlign:"center"}}>No wishlist</Typography>
                </>}
               
              </Box>
            </Modal>

            {user ? (
              <IconButton onClick={handleOpenUserMenu}>
                <PermIdentityOutlinedIcon sx={{ color: 'white' }} />
              </IconButton>
            ) : (
              <Button variant="text" sx={{ color: 'white' }} onClick={handleLogin} disableElevation disableRipple>
                Login
              </Button>
            )}

            {user && (
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Button onClick={handleLogout} variant="text" sx={{ color: 'grey' }} disableElevation disableRipple>
                    <LogoutIcon sx={{ color: 'grey' }} /> Logout
                  </Button>
                </MenuItem>
              </Menu>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" sx={{ width: '500px', '.MuiDrawer-paper': { width: '500px' } }} open={isCartOpen} onClose={handleCartToggle}>
        {isCartOpen && <Cart data={data} cartItems={cartData} setCartData={setCartData}  productQuantities={productQuantities} 
        setProductQuantities={setProductQuantities} />}
      </Drawer>
    </Box>
  );
}

export default Navbar;
