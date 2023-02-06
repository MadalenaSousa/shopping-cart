export const getSongsToDisplay = (state) => (state && state.allSongs) ? state.allSongs : [];

export const getSplitSongsToDisplay = (state) => (state && state.splitSongs) ? state.splitSongs : [];