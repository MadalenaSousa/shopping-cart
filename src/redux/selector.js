import data from '../components/resources/db.json'

const backupArray = data.songs;

export const getSongsToDisplay = (store) => {
    if(store && store.songs) {
        return store.songs
    } else {
        console.log("Error getting songs. Backup results will be returned.")
        return backupArray
    }
}