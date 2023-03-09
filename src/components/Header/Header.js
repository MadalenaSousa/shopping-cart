import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: '#0A1929' }} position="static">
        <Toolbar>
          <Typography align="left" variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            O Meu Carrinho de Compras
          </Typography>
          <Button color="inherit" onClick={() => navigate('/profile')}>
            <AccountBoxRoundedIcon/>
          </Button>
          <Button color="inherit" onClick={() => navigate('/shopping-cart')}>
            <ShoppingCartRoundedIcon/>
          </Button>
          <Button color="inherit" onClick={() => navigate('/favorites')}>
            <FavoriteBorderRoundedIcon/>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
