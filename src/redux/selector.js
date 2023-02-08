import data from '../components/resources/db.json'

const backupArray = data.songs;

//gets the data from the store
export const getSongsToDisplay = (store) => {
    if(store && store.allSongs && store.allSongs.songs) {
        console.log("Data is there")
        return store.allSongs.songs
    } else {
        console.log("No data was obtained from request")
        return []
    }
}