import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from './ListItem';
import Typography from '@mui/material/Typography';
import Search from './Search';
import Pages from './Pages';
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSongsToDisplay } from '../redux/selector';
import { getSongsFromAPI } from '../redux/actions/getSongsFromAPI';

export default function MusicList() {
  const dispatch = useDispatch();
  const [songs, setSongs] = useState([])
  const allSongs = useSelector(getSongsToDisplay)
  console.log(allSongs)
  const songsPerPage = 5
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: songsPerPage
  });
  
  useEffect(() => {    
    getSongsFromAPI(dispatch)

    const newSongs = allSongs.slice(pagination.from, pagination.to)
    setSongs(newSongs)
  }, [pagination.from, pagination.to])

  const handlePageChange = (event, page) => {
    const from = (page - 1) * songsPerPage;
    const to = (page - 1) * songsPerPage + songsPerPage;

    setPagination({
      ...pagination,
      from: from,
      to: to
    });
  }
  return (
    <Box component="span" sx={{ p: 2 }}>
        <Box sx={{m: 2}}>
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
        handlePageChange={handlePageChange} 
        allSongs={allSongs}
        songsPerPage={songsPerPage}
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