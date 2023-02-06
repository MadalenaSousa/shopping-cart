import * as React from 'react';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import {useState} from 'react'
import { useSelector } from 'react-redux';
import { getSongsToDisplay } from '../redux/selector';

export default function Pages({songList}) {
  const songsPerPage = 10
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: songsPerPage
  });
  
  //console.log(songList);

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
          count={Math.ceil(songList.length / songsPerPage)} 
          onChange={handlePageChange}
        />
    </Box>
  );
}
