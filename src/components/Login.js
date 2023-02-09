import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';


function Login() {
  return (
    <Box sx={{textAlign: 'center', transform: 'translateY(50%)'}}>
        <Box sx={{m: 2}}>
            <Typography variant="h5" component="div" sx={{fontWeight: 'bold', color: '#90CAF9', marginBottom: 4}}>Bem vindo ao seu <br/> Carrinho de Compras!</Typography>
        </Box>
        <Box sx={{m: 2}}>
            <TextField id="outlined-basic" label="Email *" variant="outlined"/>
        </Box>
        <Box sx={{m: 2}}>
            <TextField id="outlined-basic" label="Password *" variant="outlined"/>
        </Box>
        <Link to="/shopping-cart">
            <Button variant="contained" sx={{backgroundColor: '#0A1929', color: 'white'}}>Login</Button>
        </Link>
    </Box>
  );
}

export default Login;