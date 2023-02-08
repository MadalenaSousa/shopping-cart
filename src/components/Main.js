import * as React from 'react';
import MusicList from './MusicList';
import Cart from './Cart';
import Box from '@mui/material/Box';

function Main() {
 
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'space-around'
    }}>
    <Box sx={{ flexGrow: 1 }}>
        <MusicList/>
    </Box> 
    <Box sx={{ flexGrow: 1/4 }}>
        <Cart/>
    </Box>  
    </div>
  );
}

export default Main;

/*
  const dispatch = useDispatch();
  useEffect(() => {    
    dispatch(getSongsFromAPI)
  }, [])
*/
