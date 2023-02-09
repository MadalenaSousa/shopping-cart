import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import RemoveShoppingCartRoundedIcon from '@mui/icons-material/RemoveShoppingCartRounded';
import { useDispatch, useSelector } from 'react-redux';
import { removeSongFromCart } from "../redux/actions/removeSongFromCart";
import {useState, useEffect} from 'react'

export default function CartItem({song}) {
  const dispatch = useDispatch()

  return (
    <Box component="span" sx={{ 
        p: 2, 
        m: 2, 
        borderRadius: 2, 
        display: 'flex', 
        justifyContent: 'space-between', 
        border: '1px solid #90CAF9' }}>
      <Typography align="left" variant="body1" component="div">{song.trackName}</Typography>
      <Typography align="left" variant="body1" component="div">{song.trackPrice}</Typography>
      <Button color="inherit" onClick={() => dispatch(removeSongFromCart(song))}>
        <RemoveShoppingCartRoundedIcon/>
      </Button>
    </Box>
  );
}
