import { startSongRequest } from "./startSongRequest";
import axios from "axios";

export const fetchSongsFromAPI = () => {
    return async function (dispatch) {
        const response = await axios
        .get("http://localhost:3000/songs")
        .catch((error) => {
            console.log("Error: ", error);
        })
        dispatch(startSongRequest(response.data))
    }
}

//./src/components/resources/songs.js
//https://itunes.apple.com/search?term=rock&entity=musicTrack&limit=200

/*export const getSongsFromAPI = (dispatch) => {
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
}*/