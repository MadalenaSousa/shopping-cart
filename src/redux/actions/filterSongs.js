import { FILTER_SONGS } from "../actionTypes";

export const filterSongs = (searchTerm) => {
    return {
        type: FILTER_SONGS,
        payload: searchTerm
    }
}