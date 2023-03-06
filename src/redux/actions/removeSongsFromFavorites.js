import { REMOVE_SONG_FROM_FAVORITES } from "../actionTypes";

export const removeSongFromFavorites = (songToRemove) => {
    return {
        type: REMOVE_SONG_FROM_FAVORITES,
        payload: songToRemove
    }
}