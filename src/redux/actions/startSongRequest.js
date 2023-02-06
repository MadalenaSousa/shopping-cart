import { START_SONG_REQUEST } from "../actionTypes";

export const startSongRequest = (data) => {
    return {
        type: START_SONG_REQUEST,
        payload: data
    }
}