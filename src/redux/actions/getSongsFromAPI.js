import { startSongRequest } from "./startSongRequest";
import axios from "axios";

export const getSongsFromAPI = (dispatch) => {
    const url = "http://localhost:3000/songs";
    
    return axios
        .get(url)
        .then((res) => {
            //console.log(res.data)
            dispatch(startSongRequest(res.data))
        })
        .catch((error) => {
            console.log(error)
            dispatch(startSongRequest([]))
        })
}

//./src/components/resources/songs.js
//https://itunes.apple.com/search?term=rock&entity=musicTrack&limit=200