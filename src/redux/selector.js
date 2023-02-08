import { createSelector } from 'reselect';

export const getSongsToDisplay = (store) => {
    if(store && store.songs && store.songs.allSongs) {
        return store.songs.allSongs
    } else {
        return []
    }
}

/*export const getCartSongsToDisplay = (store) => {
    if(store && store.songs && store.songs.cartSongs) {
        return store.songs.cartSongs
    } else {
        return []
    }
}*/

export const getCartSongs = (state) => state.songs.cartSongs;

export const getCartSongsToDisplay = createSelector(
[getCartSongs],
(cartSongs) => cartSongs
);