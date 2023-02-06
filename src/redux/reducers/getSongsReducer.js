import { START_SONG_REQUEST } from "../actionTypes";;

const getSongsReducer = (state = [], action) => {
    switch (action.type) {
        case START_SONG_REQUEST:
            return action.payload
        default: return state
    }
}

export default getSongsReducer