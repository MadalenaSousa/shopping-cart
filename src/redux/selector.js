import data from '../components/resources/db.json'

const backupArray = data.songs;

//gets the data from the store
export const getSongsToDisplay = (store) => {
    if(store && store.songList && store.songList.songs) {
        console.log("Data is there")
        return store.songList.songs
    } else {
        console.log("No data was obtained from request")
        return []
    }
}