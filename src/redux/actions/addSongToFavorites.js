import { ADD_SONG_TO_FAVORITES } from "../actionTypes";

export const addSongToFavorites = (songToAdd) => {
    return {
        type: ADD_SONG_TO_FAVORITES,
        payload: songToAdd
    }
}