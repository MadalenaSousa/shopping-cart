import * as React from 'react';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';


export default function Pages({handlePageChange, totalSongs, songsPerPage, currentPage}) {
  return (
    <Box>
        <Pagination 
          count={Math.ceil(totalSongs / songsPerPage)} 
          onChange={handlePageChange}
          page={currentPage}
        />
    </Box>
  );
}