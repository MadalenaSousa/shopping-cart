import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { userLogin } from '../redux/actions/userLogin';


function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = event => {
        console.log("enter handle submit")
        event.preventDefault();
        
        if (email.length === 0 || password.length === 0) {
        }

        const userCredentials = {
            userEmail: email,
            userPassword: password
        }

        dispatch(userLogin(userCredentials))

        navigate("/shopping-cart")
    };  

    return (
    <Box component='form' onSubmit={handleSubmit} sx={{textAlign: 'center', transform: 'translateY(50%)'}}>
        <Box sx={{m: 2}}>
            <Typography variant="h5" component="div" sx={{fontWeight: 'bold', color: '#90CAF9', marginBottom: 4}}>Bem vindo ao seu <br/> Carrinho de Compras!</Typography>
        </Box>
        <Box sx={{m: 2}}>
            <TextField 
                id="outlined-basic"  
                variant="outlined"

                required
                label="Email"
                value={email}
                onChange={event => setEmail(event.target.value)}
            />
        </Box>
        <Box sx={{m: 2}}>
            <TextField 
                id="outlined-basic"  
                variant="outlined"
                
                required
                label="Password"
                value={password}
                onChange={event => setPassword(event.target.value)}
            />
        </Box>
        <Button type="submit" variant="contained" sx={{backgroundColor: '#0A1929', color: 'white'}}>Login</Button>
    </Box>
    );
}

export default Login;