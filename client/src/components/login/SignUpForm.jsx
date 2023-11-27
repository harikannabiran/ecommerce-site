import React ,{useState}from 'react';
import { connect } from 'react-redux';
import { Box, Button, Card, CardContent, CardHeader, Container, TextField } from '@mui/material';
import { setUser } from '../../reducers/userActions';

function SignUpForm({ setUser }) {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [name,setName]=useState("");
    const [phonenumber,setPhoneNumber]=useState("");
    const handleLogin=()=>{
        const _id=Date.now()
        console.log({email,password,name,phonenumber,_id})
    }
  return (
    <Box sx={{width:"100%", height:"100%"}}>
        <Container sx={{height:"100%"}}>
            <Card  sx={{height:"500px"}}>
                <CardHeader title="Sign up"/>
                <CardContent>
                        <Box mt={2} mb={2} >
                            <TextField variant='outlined' required value={name} placeholder='Name' label="Name" onChange={(e)=> setName(e.target.value)} sx={{width:"80%"}}/>
                        </Box>
                        <Box mt={2} mb={2}>
                            <TextField variant='outlined' required value={phonenumber} placeholder='Phone No' label="Phone No" onChange={(e)=> setPhoneNumber(e.target.value)} sx={{width:"80%"}}/>
                        </Box>
                        <Box mt={2} mb={2}>
                            <TextField variant='outlined' required value={email} placeholder='Email' label="Email" onChange={(e)=> setEmail(e.target.value)}sx={{width:"80%"}}/>
                        </Box>
                        <Box mt={2} mb={2}>
                            <TextField variant='outlined' required type='password' value={password} placeholder='Password' label="Password" onChange={(e)=> setPassword(e.target.value)}sx={{width:"80%"}}/>
                        </Box>
                        <Box mt={2} mb={2}>
                            <Button variant='contained' type='submit' onClick={handleLogin} >Sign Up</Button>
                        </Box>
                </CardContent>
            </Card>
        </Container>
    </Box>
  )
}
const mapDispatchToPropsSignUp = {
    setUser,
  };
  
  export default connect(null, mapDispatchToPropsSignUp)(SignUpForm);