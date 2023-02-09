import { REMOVE_SONG_FROM_CART } from "../actionTypes";

export const removeSongFromCart = (songToRemove) => {
    return {
        type: REMOVE_SONG_FROM_CART,
        payload: songToRemove
    }
}