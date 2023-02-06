import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function ListItem(props) {
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
      <Button color="inherit">
        <AddShoppingCartIcon/>
      </Button>
    </Box>
  );
}
