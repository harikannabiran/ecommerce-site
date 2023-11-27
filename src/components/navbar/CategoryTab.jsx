import { Box, Button,  Link,  TextField, Typography } from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { pink } from '@mui/material/colors';
import React from 'react'

function CategoryTab() {
  return (
    <Box sx={{padding:"10px 12%",backgroundColor:"#FF7C7C"}}>
          <Box sx={{padding:"10px 20px", display:"inline-flex",justifyContent:"space-around",width:"100%"}}>
    
    <Box sx={{display:"inline-flex",alignItems:"center",width:"30%",paddingLeft:"5%"}}>
      <Button variant='contained' sx={{backgroundColor:"#FEE0C0",color:pink[400],'&:hover': {
                      backgroundColor:"#FEE0C0", // Change color on hover if needed
                    },
                    '&.Mui-selected': {
                      backgroundColor:"#FEE0C0", // Change color when selected
                      '&:hover': {
                        backgroundColor:"#FEE0C0", // Change color on hover if needed
                      },
                    },
                    '&.Mui-focusVisible': {
                      backgroundColor:"#FEE0C0", // Change color when focused
                      '&:hover': {
                        backgroundColor:"#FEE0C0", // Change color on hover if needed
                      },
                    }}}  >shop by category</Button>
    </Box>
    <Box sx={{display:"inline-flex",alignItems:"center", justifyContent:"space-evenly",width:"100%"}}>
      <Link sx={{textDecoration:"none",color:"white"}}><Typography>HOME PAGE</Typography></Link>
      <Link sx={{textDecoration:"none",color:"white"}}><Typography>SHOP</Typography></Link>
      <Link sx={{textDecoration:"none",color:"white"}}><Typography>BLOG</Typography></Link>
      <Link sx={{textDecoration:"none",color:"white"}}><Typography><WhatshotIcon  fontSize='small'/>HOT DEALS</Typography></Link>
      <Link sx={{textDecoration:"none",color:"white"}}><Typography>CONTACT</Typography></Link>
    </Box>
    <Box sx={{display:"inline-flex",alignItems:"center",width:"40%",color:"white",borderColor:"white"}}>
    <TextField variant='outlined' 
    sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white", // Change the border color here
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
              ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                color: "white",
              },
            }}
     placeholder='Search the product' autoComplete="off"/>
    </Box>
  </Box>
    </Box>
   


        
  )
}

export default CategoryTab