import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CartItem from "./CartItem";
import { getCartSongsToDisplay } from '../redux/selector';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

function Cart() {    
    const {cartSongs} = useSelector(getCartSongsToDisplay);
    const [isBought, setIsBought] = useState(false)

    const priceSum = () => {
        let price = 0;
        for(let i = 0; i < cartSongs.length; i++) {
            price = price + cartSongs[i].trackPrice;
        }
        return price;
    }

    useEffect(() => {setIsBought(false)}, []);

    const sortedSongs = [].concat(cartSongs).sort((a, b) => a.trackId > b.trackId ? 1 : -1)

    return (
    <Box component="span" sx={{ p: 2 }}>
        <Box sx={{ //will make a separate component
            m: 2
        }}>
            <Typography align="left" variant="h5" component="div" sx={{fontWeight: 'bold', color: '#90CAF9'}}>Carrinho de Compras</Typography>
        </Box>
        <Box sx={{
            m: 2,
            display: 'flex',
            justifyContent: 'space-around'
        }}>
            <Typography align="left" variant="body1" component="div" sx={{fontWeight: 'bold'}}>Nome</Typography>
            <Typography align="left" variant="body1" component="div" sx={{fontWeight: 'bold'}}>Preço</Typography>
        </Box>

        {sortedSongs.map((song) => (
          <CartItem 
            key={song.trackId}
            song={song}
          />
        ))}

        <Box sx={{ //will make a separate component
            m: 2,
            display: 'flex',
            justifyContent: 'space-around'
        }}>
            <Typography align="left" variant="body1" component="div" sx={{fontWeight: 'bold'}}>Total Items</Typography>
            <Typography align="left" variant="body1" component="div" sx={{fontWeight: 'bold'}}>Montante Total</Typography>
        </Box>
        <Box sx={{
            m: 2,
            display: 'flex',
            justifyContent: 'space-around'
        }}>
            <Typography align="left" variant="body1" component="div">{cartSongs.length}</Typography>
            <Typography align="left" variant="body1" component="div">{priceSum()} USD</Typography>
        </Box>
        <Box sx={{textAlign: 'center'}}>
            <Button type='submit' onClick={() => setIsBought(!isBought)} variant="contained" style={{backgroundColor: '#90CAF9', color: 'white'}}>Finalizar Compra</Button>
        </Box>
        {isBought && <Box sx={{textAlign: 'center', m: 2}}>A sua compra foi finalizada com sucesso!</Box>}
    </Box>
    );
}

export default Cart;
