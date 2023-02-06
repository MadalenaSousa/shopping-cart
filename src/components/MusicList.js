import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from './ListItem';
import Typography from '@mui/material/Typography';
import Search from './Search';
import Pages from './Pages';

import { useDispatch, useSelector } from 'react-redux';
import { getSongsToDisplay } from '../redux/selector';
import { getSongsFromAPI } from '../redux/actions/getSongsFromAPI';

export default function MusicList() {
  const dispatch = useDispatch();
  const songs = useSelector(getSongsToDisplay)
  
  React.useEffect(() => {
    dispatch(getSongsFromAPI)
    //console.log(songs)
  }, [])

  return (
    <Box component="span" sx={{ p: 2 }}>
        <Box sx={{
            m: 2
        }}>
            <Typography align="left" variant="h5" component="div" sx={{fontWeight: 'bold'}}>Lista de Músicas</Typography>
            <Search/>
        </Box>
        {songs.map((song) => (
          <ListItem
            key={song.trackId}
            trackName={song.trackName}
            collectionName={song.collectionName}
            artistName={song.artistName}
            trackPrice={song.trackPrice}
          />
        ))} 
      <Pages
        songList={songs}
      />
    </Box>
  );
}

/*
  {songs.map((song) => (
    <ListItem
      key={song.trackId}
      trackName={song.trackName}
      collectionName={song.collectionName}
      artistName={song.artistName}
      trackPrice={song.trackPrice}
    />
  ))} 
  <Pages
    songList={songs}
  />
*/