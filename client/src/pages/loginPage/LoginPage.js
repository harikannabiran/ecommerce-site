import { Box, Container } from "@mui/material"
import Loginform from "../../components/login/Loginform"
import SignUpForm from "../../components/login/SignUpForm"

const LoginPage=()=>{
    return(
        <>
            
                <Container sx={{display:"flex",justifyContent:"space-evenly",alignItems:"center", height:"100%",padding:"10% 0% 10% 0%"}}>
                
                    <Loginform/>
                    <SignUpForm/>
                </Container>
          
        </>
    )
}

export default LoginPage