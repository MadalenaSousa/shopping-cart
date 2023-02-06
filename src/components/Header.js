import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: '#0A1929' }} position="static">
        <Toolbar>
          <Typography align="left" variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            O Meu Carrinho de Compras
          </Typography>
          <Button color="inherit">
            <AccountBoxRoundedIcon/>
          </Button>
          <Button color="inherit">
            <ShoppingCartRoundedIcon/>
          </Button>
          <Button color="inherit">
            <FavoriteBorderRoundedIcon/>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
