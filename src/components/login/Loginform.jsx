import React,{useState} from 'react';
import { connect } from 'react-redux';
import { Box, Button, Card, CardContent, CardHeader, Container, TextField } from '@mui/material';
import { setUser } from '../../reducers/userActions';

function Loginform({ setUser }) {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleLogin=()=>{
        console.log({email,password})
        setUser({ email, password });
    }
    
  return ( 
    <Box sx={{width:"100%", height:"100%"}}>
        <Container sx={{height:"100%"}}>
            <Card  sx={{height:"500px"}}>
                <CardHeader sx={{marginTop:"10%"}} title="Log In"/>
                <CardContent>
                
                        <Box mt={2} mb={2}>
                            <TextField variant='outlined' required value={email} placeholder='Email' label="Email" onChange={(e)=> setEmail(e.target.value)} sx={{width:"80%"}}/>
                        </Box> 
                        <Box mt={2} mb={2}>
                            <TextField variant='outlined' required type='password' value={password} placeholder='Password' label="Password" onChange={(e)=> setPassword(e.target.value)} sx={{width:"80%"}}/>
                        </Box>
                        <Box mt={2} mb={2}>
                            <Button variant='contained' type='submit' onClick={handleLogin} href='/' >Login</Button>
                        </Box>
                </CardContent>
            </Card>
        </Container>
    </Box>
  )
}
const mapDispatchToPropsLogin = {
    setUser,
  };
  
  export default connect(null, mapDispatchToPropsLogin)(Loginform);