import { SPLIT_SONGS } from "../actionTypes";

export const splitSongs = (data) => {
    return {
        type: SPLIT_SONGS,
        payload: data
    }
}