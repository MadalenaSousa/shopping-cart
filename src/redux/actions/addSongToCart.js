import { ADD_SONG_TO_CART } from "../actionTypes";

export const addSongToCart = (songToAdd) => {
    return {
        type: ADD_SONG_TO_CART,
        payload: songToAdd
    }
}