import React from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { filterSongs } from "../redux/actions/filterSongs";

export default function Search() {
    const dispatch = useDispatch();

    return (
        <Box>
            <TextField onChange={(event) => dispatch(filterSongs(event.target.value))} id="standard-basic" label="Procure aqui a sua música" variant="standard" />   
        </Box>
    )
}