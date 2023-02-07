import * as React from 'react';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import {useState} from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { getSongsToDisplay } from '../redux/selector';
import { getSongsFromAPI } from '../redux/actions/getSongsFromAPI';

export default function Pages({setSongs}) {
  const songsPerPage = 5
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: songsPerPage
  });

  const dispatch = useDispatch();
  const songs = useSelector(getSongsToDisplay)
  
  React.useEffect(() => {
    console.log(songs)
    dispatch(getSongsFromAPI)
    
    const splitSongs = songs.slice(pagination.from, pagination.to)
    setSongs(splitSongs)
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
    <Box>
        <Pagination 
          count={Math.ceil(songs.length / songsPerPage)} 
          onChange={handlePageChange}
        />
    </Box>
  );
}

/*
- Problema da API e remendo
- A primeira página falham as músicas a aparecer de vez em quando, pq eu só renderizo este componente depois de fazer o primeiro songs.map
- Podia passar o use effect e a parte toda de chamar a API para o Music List? Meto lá a função e passo a função por props?
- A parte de slice o array de músicas devia estar a fazer num reducer?
- Porque é que o meu dispatch não está a fazer nada? Isso não significa que não devia funcionar nada?
- A minha store no Redux Dev Tools aparece vazia, porquê?
*/
