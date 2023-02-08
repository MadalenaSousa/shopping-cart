import { createSelector } from 'reselect';

export const getSongsToDisplay = (store) => {
    if(store && store.songs && store.songs.allSongs) {
        return store.songs.allSongs
    } else {
        return []
    }
}

export const getCartSongsToDisplay = (store) => {
    if(store && store.songs) {
        return store.songs
    } else {
        return []
    }
}