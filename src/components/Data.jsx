// Data.js

import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Sidebar from './sidebar/Sidebar';
import ProductList from './ProductList';
import axios from 'axios';
function Data({wishlist, setWishlist, cartData, setCartData,productQuantities,  setProductQuantities}) {
  const [data, setData] = useState([]);
 
  const [open, setOpen] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);
  const [filters, setFilters] = useState({
    category: [],
    price: [],
    ratings: [],
  });

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  console.log(data);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch product data
    axios.get('https://fakestoreapi.com/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  const addToCart = (productId) => {
    // Simulate adding to cart using the Fake Store API's /carts endpoint
    axios.post('https://fakestoreapi.com/carts', { productId }).then((response) => {
      setCartItems(response.data);
    });
  };

  const removeFromCart = (productId) => {
    // Simulate removing from cart using the Fake Store API's /carts endpoint
    axios.delete(`https://fakestoreapi.com/carts/${productId}`).then((response) => {
      setCartItems(response.data);
    });
  };
  const handleOpen = (index) => {
    setOpen(true);
    setItemIndex(index);
  };

  const handleClose = () => setOpen(false);

  const applyFilters = () => {
    let filteredData = data.filter((item) => {
      // Check category filter
      if (filters.category.length > 0 && !filters.category.includes(item.category.toLowerCase())) {
        return false;
      }

      // Check price filter
      const itemPrice = parseFloat(item.price);
      if (filters.price.length > 0 && !filters.price.includes(getPriceRange(itemPrice))) {
        return false;
      }

      // Check ratings filter
      const itemRating = parseFloat(item.rating.rate);
      if (filters.ratings.length > 0 && !filters.ratings.some((rating) => rating <= itemRating)) {
        return false;
      }

      return true;
    });

    return filteredData;
  };

  const getPriceRange = (price) => {
    if (price < 10) return 'under 10';
    if (price < 50) return '10 to 50';
    if (price < 100) return '50 to 100';
    if (price < 500) return '100 to 500';
    if (price >= 500) return '500 to 1000';
    return 'unknown';
  };
  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  return (
    <Box sx={{ display: 'flex' ,padding:"10px 10%"}}>
      <Sidebar filters={filters} onFilterChange={handleFilterChange} />  
      <ProductList
      
        data={applyFilters()} 
        addToCart={addToCart} 
        removeFromCart={removeFromCart}
        cartItems={cartItems} // Use cartItems instead of cartData
        handleOpen={handleOpen}
        handleClose={handleClose}
        itemIndex={itemIndex}
        open={open}
        wishlist={wishlist}
        setWishlist={setWishlist}
        cartData={cartData} 
        setCartData={setCartData}
        productQuantities={productQuantities} 
        setProductQuantities={setProductQuantities}
      />
      
    </Box>
  );
}

export default Data;
