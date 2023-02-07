import { START_SONG_REQUEST } from "../actionTypes";;

const initialState = {
    songs: [],
    currentPage: 1
}

const getSongsReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_SONG_REQUEST:
            return {
                ...state,
                songs: action.payload,
                
            }
        default: return state
    }
}

export default getSongsReducer