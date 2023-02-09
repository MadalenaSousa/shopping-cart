import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { addSongToCart } from "../redux/actions/addSongToCart";
import {useState, useEffect} from 'react'

export default function ListItem({song, isAdded}) {
  const dispatch = useDispatch();
  
  return (
    <Box component="span" sx={{ 
        p: 2, 
        m: 2, 
        borderRadius: 2, 
        display: 'flex', 
        justifyContent: 'space-between', 
        border: '1px solid #90CAF9' }}>
      <Box>
        <Typography align="left" sx={{fontWeight: 'bold'}} variant="body1" component="div">{song.trackName}</Typography>
        <Typography align="left" variant="body1" component="div">{song.collectionName}</Typography>
        <Typography align="left" variant="body1" component="div">{song.artistName}</Typography>
      </Box>
      <Typography align="left" variant="body1" component="div">{song.trackPrice} USD</Typography>
      
      {isAdded===false ? 

      <Button color="inherit" sx={{backgroundColor: 'blue'}} onClick={() => dispatch(addSongToCart(song))} >
        <AddShoppingCartIcon/>
      </Button> : 

      <Button color="inherit" >
        <RemoveShoppingCartIcon/>
      </Button>
      }
    </Box>
  );
}
