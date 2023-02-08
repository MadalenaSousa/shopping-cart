import { START_SONG_REQUEST } from "../actionTypes";;

const initialState = {
    songs: []
}

const getSongsReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_SONG_REQUEST:
            return {
                ...state,
                songs: action.payload
            }
        default: return state
    }
}

export default getSongsReducer