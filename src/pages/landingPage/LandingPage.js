import { Box } from "@mui/material"
import Navbar from "../../components/navbar/Navbar"
import CategoryTab from "../../components/navbar/CategoryTab"
import Content from "../../components/Content"
import Footer from "../../components/footer/Footer"
import { useState } from "react"
import Data from "../../components/Data"

const LandingPage =()=>{
  const [wishlist, setWishlist] = useState([]);
  const [cartData,setCartData]=useState([]);
  const [productQuantities, setProductQuantities] = useState({});
    return (
        <Box>
              <Navbar 
                wishlistCount={wishlist.length} 
                wishlist={wishlist}   
                setWishlist={setWishlist} 
                cartData={cartData} 
                setCartData={setCartData} 
                productQuantities={productQuantities} 
                setProductQuantities={setProductQuantities}
              />
    <CategoryTab/>
   
      <Data 
        wishlist={wishlist} 
        setWishlist={setWishlist} 
        cartData={cartData} 
        setCartData={setCartData}
        productQuantities={productQuantities} 
        setProductQuantities={setProductQuantities}
      />
         <Footer/>
        </Box>
    )
}

export default LandingPage