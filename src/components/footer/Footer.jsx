import { Box, Container, Typography } from '@mui/material'
import React from 'react'

function footer() {
  return (
    <Box sx={{width:"100%", backgroundColor:"#B9005B", height:"40px"}}>
        <Container sx={{width:"100%", backgroundColor:"#B9005B", height:"30px"}}>
            <Typography variant="h6" sx={{color:"white", backgroundColor:"#B9005B", height:"30px"}}>	&#169; 2023 all rights reserved by hari</Typography>
        </Container>
    </Box>
  )
}

export default footer