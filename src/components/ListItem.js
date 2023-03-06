import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { addSongToCart } from "../redux/actions/addSongToCart";
import { removeSongFromCart } from "../redux/actions/removeSongFromCart";
import { addSongToFavorites } from "../redux/actions/addSongToFavorites";
import { removeSongFromFavorites } from "../redux/actions/removeSongsFromFavorites";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

export default function ListItem({song, isAdded, isFaved}) {
  const dispatch = useDispatch();
  
  return (
    <Box component="span" sx={{ 
        p: 2, 
        m: 2, 
        borderRadius: 2, 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        border: '1px solid #90CAF9' }}>
      <Box>
        <img src={song.previewUrl} height="100px"/>
        <Typography align="left" sx={{fontWeight: 'bold'}} variant="body1" component="div">{song.trackName}</Typography>
        <Typography align="left" variant="body1" component="div">{song.collectionName}</Typography>
        <Typography align="left" variant="body1" component="div">{song.artistName}</Typography>
      </Box>
      <Typography align="left" variant="body1" component="div">{song.trackPrice} USD</Typography>
      
      <Box>
      {isAdded===false ? 
        <Button color="inherit" onClick={() => dispatch(addSongToCart(song))} >
          <AddShoppingCartIcon/>
        </Button> : 

        <Button color="inherit" onClick={() => dispatch(removeSongFromCart(song))} >
          <RemoveShoppingCartIcon/>
        </Button>
        }
        {isFaved===false ?
        <Button color="inherit" onClick={() => dispatch(addSongToFavorites(song))} >
          <FavoriteBorderRoundedIcon/>
        </Button> :
        <Button color="inherit" onClick={() => dispatch(removeSongFromFavorites(song))} >
          <FavoriteRoundedIcon/>
        </Button>
        }
      </Box>
    </Box>
  );
}
