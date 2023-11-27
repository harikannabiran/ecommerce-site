import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Sidebar from './sidebar/Sidebar'
import Data from './Data';
import axios from "axios"


function Content() {
 
  return (

    <Box sx={{height:"100%", padding:"10px 10%"}}>
      <Data />
    </Box>
    
  )
}

export default Content