import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/actions/userLogin';
import styled from "styled-components";

const S = {
    LoginInput: styled.input
        `height: 100%;
        max-width: 90%;
        width: 250px;
        background-color: transparent;
        border: 1px solid white;
        border-radius: 5px;
        padding: 10px;
        color: black;
        margin: 2px;`
}

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        document.getElementById('body').style.backgroundColor = '#0A1929'
    }, []);

    function handleSubmit(event) { //should this saved data be persistent?
        event.preventDefault() //removes the warning about the form not having any associated action
        const userData = {
            userEmail: email,
            userPassword: password
        }

        dispatch(userLogin(userData))

        navigate("/shopping-cart")
    };  

    return (
    <Box role='form' component='form' onSubmit={handleSubmit} sx={{textAlign: 'center', transform: 'translateY(50%)', width: '100%'}}>
        <Box sx={{m: 2}}>
            <Typography variant="h5" component="div" sx={{fontWeight: 'bold', color: '#90CAF9', marginBottom: 4}}>Bem vindo ao seu <br/> Carrinho de Compras!</Typography>
        </Box>
        <Box sx={{m: 2}}>
            <S.LoginInput
                id="outlined-basic"  
                variant="outlined"

                required
                placeholder="Email *"
                label="Email"
                value={email}
                onChange={event => setEmail(event.target.value)}
            />
        </Box>
        <Box sx={{m: 2}}>
            <S.LoginInput
                id="outlined-basic"  
                variant="outlined"

                required
                placeholder="Password *"
                label="Password"
                value={password}
                onChange={event => setPassword(event.target.value)}
            />
        </Box>
        <Button type="submit" variant="contained" sx={{backgroundColor: '#90CAF9', color: '#0A1929', maxWidth: '90%', width: '250px;', fontWeight: 'bold', marginTop: '10px'}}>Login</Button>
    </Box>
    );
}

export default Login;