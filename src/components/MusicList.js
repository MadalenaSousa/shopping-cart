import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from './ListItem';
import Typography from '@mui/material/Typography';
import Search from './Search';
import Pages from './Pages';
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSongsToDisplay } from '../redux/selector';
import { fetchSongsFromAPI } from '../redux/actions/apiActions';

export default function MusicList() {
  const songs = useSelector(getSongsToDisplay)
  const dispatch = useDispatch()
  const songsPerPage = 5
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: songsPerPage
  });
  const [splitSongs, setSplitSongs] = useState([])
  const { cartSongs } = useSelector(state => state.songs)

  useEffect(() => {
    dispatch(fetchSongsFromAPI())
  }, [])
  
  useEffect(() => {    
    const newSongs = songs.slice(pagination.from, pagination.to)
    setSplitSongs(newSongs)
  }, [pagination.from, pagination.to, songs.length])

  const handlePageChange = (event, page) => {
    const from = (page - 1) * songsPerPage;
    const to = (page - 1) * songsPerPage + songsPerPage;

    setPagination({
      ...pagination,
      from: from,
      to: to
    });
  }

  //console.log(splitSongs)
  return (
    <Box component="span" sx={{ p: 2 }}>
        <Box sx={{m: 2}}>
            <Typography align="left" variant="h5" component="div" sx={{fontWeight: 'bold'}}>Lista de Músicas</Typography>
            <Search/>
        </Box>
        {splitSongs.map((song) => (
          <ListItem
            key={song.trackId}
            song={song}
            isAdded={cartSongs.find(cartSong => cartSong.trackId === song.trackId) !== undefined}
          />
        ))}
        <Pages 
          handlePageChange={handlePageChange} 
          allSongs={songs}
          songsPerPage={songsPerPage}
        />
    </Box>
  );
}