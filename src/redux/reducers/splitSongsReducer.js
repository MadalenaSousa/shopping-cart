import { SPLIT_SONGS } from "../actionTypes";

const splitSongsReducer = (state = [], action) => {
    switch (action.type) {
        case SPLIT_SONGS:
            const splitSongs = state.allSongs.slice(0, 10)
            return {
                splitSongs
            }
        default: return state
    }
}

export default splitSongsReducer