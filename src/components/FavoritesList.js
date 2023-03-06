import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from './ListItem';
import Typography from '@mui/material/Typography';
import Pages from './Pages';
import {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import Header from './Header';

export default function FavoritesList() {
  const songsPerPage = 5
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: songsPerPage
  });
  const { cartSongs } = useSelector(state => state.songs)
  const { favoriteSongs } = useSelector(state => state.songs)
  const [splitSongs, setSplitSongs] = useState(favoriteSongs)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setPagination({
      ...pagination,
      from: 0,
      to: songsPerPage
    });
    setCurrentPage(1);
  }, [favoriteSongs])
  
  useEffect(() => {    
    const newSongs = favoriteSongs.slice(pagination.from, pagination.to)
    setSplitSongs(newSongs)
  }, [pagination.from, pagination.to, favoriteSongs])

  const handlePageChange = (event, page) => {
    const from = (page - 1) * songsPerPage;
    const to = (page - 1) * songsPerPage + songsPerPage;
    setCurrentPage(page);

    setPagination({
      ...pagination,
      from: from,
      to: to
    });
  }

  //console.log(splitSongs)
  return (
    <>
        <Header />
        <Box component="span" sx={{ p: 2 }}>
            {splitSongs.length > 0 ? splitSongs.map((song) => (
            <ListItem
                key={song.trackId}
                song={song}
                isAdded={cartSongs.find(cartSong => cartSong.trackId === song.trackId) !== undefined}
                isFaved={favoriteSongs.find(favoriteSong => favoriteSong.trackId === song.trackId) !== undefined}
            />
            )) : "Ainda não adicionou nenhuma música aos seus favoritos!"}
            <Pages 
            handlePageChange={handlePageChange} 
            totalSongs={favoriteSongs.length}
            songsPerPage={songsPerPage}
            currentPage={currentPage}
            />
        </Box>
    </>
  );
}