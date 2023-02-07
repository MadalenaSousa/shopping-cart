import data from '../components/resources/db.json'

const backupArray = data.songs;

//gets the data from the store
export const getSongsToDisplay = (store) => {
    if(store && store.songList && store.songList.songs) {
        return store.songList.songs
    } else {
        console.log("Error getting songs. Backup results will be returned.")
        return backupArray
    }
}