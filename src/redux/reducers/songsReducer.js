import { ADD_SONG_TO_CART, FILTER_SONGS, REMOVE_SONG_FROM_CART, START_SONG_REQUEST } from "../actionTypes";;

const initialState = {
    allSongs: [],
    cartSongs: [],
    filteredSongs: []
}

const songsReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_SONG_REQUEST:
            return {
                ...state,
                allSongs: action.payload,
                filteredSongs: action.payload
            };
        case ADD_SONG_TO_CART:
            const cartSongsAdded = state.cartSongs;            
            cartSongsAdded.push(action.payload)
            
            return {
                ...state,
                cartSongs: cartSongsAdded
            };
        case REMOVE_SONG_FROM_CART:
            const cartSongsRemoved = state.cartSongs.filter(
                song => song.trackId !== action.payload.trackId
            );
            
            return {
                ...state,
                cartSongs: cartSongsRemoved
            };
        case FILTER_SONGS:
            const newFilteredSongs = state.allSongs.filter((song) =>
                song.trackName.toLowerCase().includes(action.payload.toLowerCase())
            );

            return {
                ...state,
                filteredSongs: newFilteredSongs,
            };
        default: return state
    }
}

export default songsReducer