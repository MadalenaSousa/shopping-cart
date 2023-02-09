import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { addSongToCart } from "../redux/actions/addSongToCart";
import {useState, useEffect} from 'react'

export default function ListItem(props) {
  const dispatch = useDispatch()
  const [item, setItem] = useState({
    id: props.trackId,
    name: props.trackName,
    price: props.trackPrice,
    isAdded: false
  })

  function handleClick() {
    dispatch(addSongToCart(item));
    setItem({
      id: props.trackId,
      name: props.trackName,
      price: props.trackPrice,
      isAdded: true
    })
  }

  //nota para a fucionalidade do mudar o icone quando ele está added: ele não está a re-renderizar o componente?

  return (
    <Box component="span" sx={{ 
        p: 2, 
        m: 2, 
        borderRadius: 2, 
        display: 'flex', 
        justifyContent: 'space-between', 
        border: '1px solid #90CAF9' }}>
      <Box>
        <Typography align="left" sx={{fontWeight: 'bold'}} variant="body1" component="div">{props.trackName}</Typography>
        <Typography align="left" variant="body1" component="div">{props.collectionName}</Typography>
        <Typography align="left" variant="body1" component="div">{props.artistName}</Typography>
      </Box>
      <Typography align="left" variant="body1" component="div">{props.trackPrice} USD</Typography>
      {item.isAdded==false ? <Button color="inherit" onClick={handleClick} >
                                <AddShoppingCartIcon/>
                              </Button> : 
                              <Button color="inherit" >
                                <RemoveShoppingCartIcon/>
                              </Button>
                              }
    </Box>
  );
}
