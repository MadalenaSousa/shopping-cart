import { ADD_SONG_TO_CART, START_SONG_REQUEST } from "../actionTypes";;

const initialState = {
    allSongs: [],
    cartSongs: []
}

const songsReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_SONG_REQUEST:
            return {
                ...state,
                allSongs: action.payload
            }
        case ADD_SONG_TO_CART:
            const newCartSongs = state.cartSongs;
            newCartSongs.push(action.payload)
            return {
                ...state,
                cartSongs: newCartSongs
            }    
        default: return state
    }
}

export default songsReducer