// Sidebar.js

import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { pink } from '@mui/material/colors';

function Sidebar({ filters, onFilterChange }) {
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.name;
    const updatedCategories = event.target.checked
      ? [...filters.category, selectedCategory]
      : filters.category.filter((category) => category !== selectedCategory);
    onFilterChange('category', updatedCategories);
  };

  const handlePriceChange = (event) => {
    const selectedPrice = event.target.name;
    const updatedPrices = event.target.checked
      ? [...filters.price, selectedPrice]
      : filters.price.filter((price) => price !== selectedPrice);
    onFilterChange('price', updatedPrices);
  };

  const handleRatingChange = (event) => {
    const selectedRating = parseFloat(event.target.name);
    const updatedRatings = event.target.checked
      ? [...filters.ratings, selectedRating]
      : filters.ratings.filter((rating) => rating !== selectedRating);
    onFilterChange('ratings', updatedRatings);
  };

  return (
    <Box sx={{ paddingLeft: '30px', width: '300px',marginTop:"10px" }}>
      <Box>
        <Typography variant='h6' sx={{color:"grey", textAlign:"left"}}>Filter by</Typography>
      </Box>
      <Card sx={{ maxWidth: '400px' }}>
        <CardContent>
          <Typography variant="h6" sx={{ color: 'grey', textAlign: 'left' }}>
            Category
          </Typography>
          <FormGroup sx={{ color: 'grey' }}>
            <FormControlLabel
              control={<Checkbox sx={{ color: 'grey', 
              '&.Mui-checked': {
                color: pink[600],
              }, }} 
              onChange={handleCategoryChange} name="men's clothing" />}
              label="Men's clothing"
              checked={filters.category.includes("men's clothing")}
            />
            <FormControlLabel
              control={<Checkbox sx={{ color: 'grey', 
              '&.Mui-checked': {
                color: pink[600],
              }, }} onChange={handleCategoryChange} name="women's clothing" />}
              label="Women's clothing"
              checked={filters.category.includes("women's clothing")}
            />
            <FormControlLabel
              control={<Checkbox sx={{ color: 'grey', 
              '&.Mui-checked': {
                color: pink[600],
              }, }} onChange={handleCategoryChange} name="electronics" />}
              label="Electronics"
              checked={filters.category.includes('electronics')}
            />
            <FormControlLabel
              control={<Checkbox sx={{ color: 'grey', 
              '&.Mui-checked': {
                color: pink[600],
              }, }} onChange={handleCategoryChange} name="jewelery" />}
              label="Jewelry"
              checked={filters.category.includes('jewelery')}
            />
          </FormGroup>
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: '400px', marginTop: 2 }}>
        <CardContent>
          <Typography variant="h6" sx={{ color: 'grey', textAlign: 'left' }}>
            Price Range
          </Typography>
          <FormGroup sx={{ color: 'grey' }}>
            {['under 10', '10 to 50', '50 to 100', '100 to 500', '500 to 1000'].map((price) => (
              <FormControlLabel
                key={price}
                control={
                  <Checkbox
                    sx={{ color: filters.price.includes(price) ? pink[600] : 'grey', 
              '&.Mui-checked': {
                color: pink[600],
              }, }}
                    onChange={handlePriceChange}
                    name={price}
                  />
                }
                label={price}
                checked={filters.price.includes(price)}
              />
            ))}
          </FormGroup>
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: '400px', marginTop: 2 }}>
        <CardContent>
          <Typography variant="h6" sx={{ color: 'grey', textAlign: 'left' }}>
            Ratings
          </Typography>
          <FormGroup sx={{ color: 'grey' }}>
            {[ 4, 3, 2].map((rating) => (
              <FormControlLabel
                key={rating}
                control={
                  <Checkbox
                    sx={{ color: filters.ratings.includes(rating) ? pink[600] : 'grey' , 
              '&.Mui-checked': {
                color: pink[600],
              },}}
                    onChange={handleRatingChange}
                    name={rating.toString()}
                  />
                }
                label={`& Up (${rating} stars)`}
                checked={filters.ratings.includes(rating)}
              />
            ))}
          </FormGroup>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Sidebar;
