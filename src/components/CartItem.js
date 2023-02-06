import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import RemoveShoppingCartRoundedIcon from '@mui/icons-material/RemoveShoppingCartRounded';

export default function CartItem() {
  return (
    <Box component="span" sx={{ 
        p: 2, 
        m: 2, 
        borderRadius: 2, 
        display: 'flex', 
        justifyContent: 'space-between', 
        border: '1px solid #90CAF9' }}>
      <Typography align="left" variant="body1" component="div">Nome da Música</Typography>
      <Typography align="left" variant="body1" component="div">Preço USD</Typography>
      <Button color="inherit">
        <RemoveShoppingCartRoundedIcon/>
      </Button>
    </Box>
  );
}
