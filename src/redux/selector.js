export const getSongsToDisplay = (store) => {
    if(store && store.songs && store.songs.allSongs) {
        return store.songs.allSongs
    } else {
        return []
    }
}

export const getCartSongsToDisplay = (store) => { //nota: o useselector so manda coisas, só renderiza, quando nota mudanças na store GERAL não olha para os detalhes dela, não olha para store.songs.cartsongs (acho eu)
    if(store && store.songs) {
        return store.songs
    } else {
        return []
    }
}

export const getUserData = (state) => (state.user)