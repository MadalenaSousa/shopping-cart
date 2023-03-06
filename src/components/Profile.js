import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import Header from "./Header";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export default function Profile() {
    const { user } = useSelector(state => state)
    const navigate = useNavigate();

    return (
        <>
            <Header />
            {user.isLogged ? 
            <Box className='Profile'>
                <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 56, height: 56 }}
                />
                <Typography sx={{fontWeight: 'bold'}}>Jane Doe</Typography>
                <Typography>{user.credentials.email}</Typography>
            </Box> :
            <Box className='Profile'>
                <Typography>You are not Logged in!</Typography>
                <Button onClick={() => navigate('/')} variant="contained" sx={{backgroundColor: '#90CAF9', color: 'white', maxWidth: '90%', width: '250px;', fontWeight: 'bold', marginTop: '10px'}}>
                    Go to Login
                </Button>
            </Box>}
        </>
    );
}